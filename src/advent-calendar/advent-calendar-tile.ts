import { fromEvent, Subject } from "rxjs";
import { filter } from "rxjs/operators";
import { AdventCalendarTileDay, ADVENT_CALENDAR_TILE_DAY_TAG_NAME } from './advent-calendar-tile-day';
import { AdventCalendarTileEvent, ADVENT_CALENDAR_TILE_EVENT_TAG_NAME } from "./advent-calendar-tile-event";
import { AdventCalendarEvent } from './models/advent-calendar-event';

export const ADVENT_CALENDAR_TILE_TAG_NAME = 'advent-calendar-tile';
export class AdventCalendarTile extends HTMLElement {

    icon: string;
    dayOfMonth: number;
    event: AdventCalendarEvent;

    readonly openEvent$ = new Subject();

    private tileDayElement = document.createElement(ADVENT_CALENDAR_TILE_DAY_TAG_NAME) as AdventCalendarTileDay;
    private tileEventElement = document.createElement(ADVENT_CALENDAR_TILE_EVENT_TAG_NAME) as AdventCalendarTileEvent;

    constructor() {
        super();
        this.openEvent$.subscribe(() => this.openEvent())
    }

    connectedCallback() {
        fromEvent(this, 'click').subscribe(this.openEvent$);
        fromEvent(this, 'keyup').pipe(
            filter((event: KeyboardEvent) => event.key === 'Enter')
        ).subscribe(this.openEvent$)

        this.render(this.dayOfMonth, this.icon, this.event);
    }

    private render(dayOfMonth: number, icon: string, event: AdventCalendarEvent) {
        if (this.isDayInTheFuture(dayOfMonth)) {
            this.tabIndex = -1;
            this.renderLockedTile(dayOfMonth);
        } else {
            this.tabIndex = 0;
            this.renderOpenedTile(dayOfMonth, icon, event);
        }
    }

    private renderOpenedTile(dayOfMonth: number, icon: string, event: AdventCalendarEvent) {
        this.innerHTML = `
        <div class="icon">
            <i class="${icon}"></i>
        </div>
        `;
        this.tileDayElement.day = dayOfMonth;
        this.prepend(this.tileDayElement);
        this.tileEventElement.event = event;
        this.append(this.tileEventElement);
    }

    private renderLockedTile(dayOfMonth: number) {
        this.innerHTML = ``;
        this.tileDayElement.day = dayOfMonth;

        this.innerHTML = `
        <div class="icon">
         <i class="fas fa-lock"></i>
        </div>
        `;

        this.prepend(this.tileDayElement);
    }

    private isDayInTheFuture(dayOfMonth: number): boolean {
        const today = new Date();
        const tileDate = new Date();
        tileDate.setDate(dayOfMonth);

        return today.getTime() < tileDate.getTime();
    }

    private openEvent() {
        if (this.tileEventElement) {
            this.tileEventElement.focus();
        }
    }
}