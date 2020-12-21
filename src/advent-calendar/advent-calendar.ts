import { AdventCalendarTile } from "./advent-calendar-tile";
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
        const tileTemplates = Array.from(new Array(config?.maxDays)).map((_, i) => {
            const dayOfMonth = i + 1;
            const icon = this.randomItem(config.icons);
            return `
                <advent-calendar-tile icon="${icon}"  day="${dayOfMonth}"></advent-calendar-tile>
            `;
        });

        this.innerHTML = tileTemplates.join(' ');
    }

    private randomItem<T>(list: T[]) {
        const random = Math.floor(Math.random() * list.length);

        return list[random];
    }
}