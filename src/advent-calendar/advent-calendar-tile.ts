import { BehaviorSubject, combineLatest, Subject } from "rxjs";
import { DEFAULT_TILE_ICON } from './models/advent-calendar-config';

export const ADVENT_CALENDAR_TILE_TAG_NAME = 'advent-calendar-tile';
export class AdventCalendarTile extends HTMLElement {

    static get observedAttributes() {
        return ['day', 'icon'];
    }

    get icon(): string {
        return this.getAttribute('icon');
    }

    day$ = new BehaviorSubject<number>(-1);
    icon$ = new BehaviorSubject<string>(DEFAULT_TILE_ICON);
    destroyed$ = new Subject();

    constructor() {
        super();
        combineLatest([
            this.day$,
            this.icon$
        ]).subscribe(([day, icon]) => {
            this.render(day, icon);
        });
    }

    connectedCallback() {
        this.icon$.next(this.icon);
    }

    attributeChangedCallback(attrName: string, oldValue: any, newValue: any) {
        if (attrName === 'day') {
            this.day$.next(newValue);
        }
    }

    private render(dayOfMonth: number, icon: string) {
        if (this.isDayInTheFuture(dayOfMonth)) {
            this.renderLockedTile(dayOfMonth);
        } else {
            this.renderOpenedTile(dayOfMonth, icon);
        }
    }

    private renderOpenedTile(dayOfMonth: number, icon: string) {
        this.innerHTML = `
        <advent-calendar-tile-day day="${dayOfMonth}"></advent-calendar-tile-day>
        <div class="icon">
         <i class="${icon}"></i>
        </div>
        <!--  Here will be the advent-calendar-event  -->
        `;
    }

    private renderLockedTile(dayOfMonth: number) {
        this.innerHTML = `
        <advent-calendar-tile-day day="${dayOfMonth}"></advent-calendar-tile-day>
        <div class="icon">
         <i class="fas fa-lock"></i>
        </div>
        `;
    }

    private isDayInTheFuture(dayOfMonth: number): boolean {
        const today = new Date();
        const tileDate = new Date();
        tileDate.setDate(dayOfMonth);

        return today.getTime() < tileDate.getTime();
    }

}