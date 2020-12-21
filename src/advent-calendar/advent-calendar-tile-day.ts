import { BehaviorSubject } from "rxjs";
import { distinctUntilChanged } from "rxjs/operators";

export const ADVENT_CALENDAR_TILE_DAY_TAG_NAME = 'advent-calendar-tile-day';
export class AdventCalendarTileDay extends HTMLElement {

    static get observedAttributes() {
        return ['day'];
    }

    get day(): number {
        return parseInt(this.getAttribute('day'), 10);
    }

    day$ = new BehaviorSubject<number>(-1);

    constructor() {
        super();
        this.day$.pipe(
            distinctUntilChanged()
        ).subscribe(day => this.render(day));
    }

    connectedCallback() {
        this.render(this.day);
    }

    private render(dayOfMonth: number) {
        this.innerHTML = `${dayOfMonth}`;
    }
}