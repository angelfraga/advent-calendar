import { AdventCalendarTile, ADVENT_CALENDAR_TILE_TAG_NAME } from './advent-calendar-tile';
import { AdventCalendarConfig } from "./models/advent-calendar-config";


export const ADVENT_CALENDAR_CONFIG_TOKEN = 'ADVENT_CALENDAR_CONFIG_TOKEN';
export const ADVENT_CALENDAR_TAG_NAME = 'advent-calendar';
export class AdventCalendar extends HTMLElement {

    static setConfig(config: AdventCalendarConfig) {
        (window as any)[ADVENT_CALENDAR_CONFIG_TOKEN] = Object.freeze({ ...config });
    }
    static get config(): AdventCalendarConfig {
        return (window as any)[ADVENT_CALENDAR_CONFIG_TOKEN];
    }

    constructor() {
        super();
        if (!AdventCalendar.config) {
            AdventCalendar.setConfig(new AdventCalendarConfig())
        }
    }

    connectedCallback() {
        this.render(AdventCalendar.config);
    }

    render(config: AdventCalendarConfig) {
        this.innerHTML = '';
        const tileElements = Array.from(new Array(config?.maxDays)).map((_, i) => {
            const tileElement = document.createElement(ADVENT_CALENDAR_TILE_TAG_NAME) as AdventCalendarTile;
            const dayOfMonth = i + 1;
            const icon = this.randomItem(config.icons);
            const event = config.events.get(dayOfMonth);
            tileElement.icon = icon;
            tileElement.event = event;
            tileElement.dayOfMonth = dayOfMonth;
            return tileElement;
        });

        this.append(...tileElements);
    }

    private randomItem<T>(list: T[]) {
        const random = Math.floor(Math.random() * list.length);

        return list[random];
    }
}