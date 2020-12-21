
export const ADVENT_CALENDAR_TILE_DAY_TAG_NAME = 'advent-calendar-tile-day';
export class AdventCalendarTileDay extends HTMLElement {

    day: number;

    connectedCallback() {
        this.render();
    }

    private render() {
        this.textContent = `${this.day}`;
    }
}