import { AdventCalendarDay, ADVENT_CALENDAR_DAY_TAG_NAME } from './advent-calendar-day';
import { AdventCalendarDialog, ADVENT_CALENDAR_DIALOG_EVENT_TAG_NAME } from './advent-calendar-dialog';
import { AdventCalendarConfig } from "./models/advent-calendar-config";


export const ADVENT_CALENDAR_CONFIG_TOKEN = 'ADVENT_CALENDAR_CONFIG_TOKEN';
export const ADVENT_CALENDAR_TAG_NAME = 'advent-calendar';
const DAYS_IN_ADVENT_CALENDAR = 24;
const JS_DECEMBER_MONTH_INDEX = 11;
export class AdventCalendar extends HTMLElement {

    static setConfig(config: AdventCalendarConfig) {
        (window as any)[ADVENT_CALENDAR_CONFIG_TOKEN] = Object.freeze({ ...config });
    }
    static get config(): AdventCalendarConfig {
        return (window as any)[ADVENT_CALENDAR_CONFIG_TOKEN];
    }

    /**
     * NOTE: ts definitions missed
     */
    private jellySwitch = document.createElement('jelly-switch') as HTMLElement & { checked: boolean, ontoggle: () => void };
    private stricted = true;

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
        const dayElements = Array.from(new Array(DAYS_IN_ADVENT_CALENDAR)).map((_, i) => {
            const tileElement = document.createElement(ADVENT_CALENDAR_DAY_TAG_NAME) as AdventCalendarDay;
            const dayOfMonth = i + 1;
            const dayClass = this.getDayClass(dayOfMonth);
            tileElement.icon = this.getIcon(config, dayOfMonth);
            tileElement.dayOfMonth = dayOfMonth;
            tileElement.onclick = () => this.openDialog(config, dayOfMonth);
            tileElement.classList.add(dayClass);
            return tileElement;
        });

        this.jellySwitch.checked = this.stricted;
        this.jellySwitch.ontoggle = () => {
            this.stricted = !this.stricted
            this.classList.toggle('non-stricted');
        };

        this.append(...dayElements, this.jellySwitch);
        const today = new Date();

        if (this.isDecember(today)) {
            this.openDialog(config, today.getDate());
        }
    }

    openDialog(config: AdventCalendarConfig, dayOfMonth: number) {
        const shouldBeOpened = !this.isDayInTheFuture(dayOfMonth) || !this.stricted;
        if (shouldBeOpened) {
            let dialog = document.createElement(ADVENT_CALENDAR_DIALOG_EVENT_TAG_NAME) as AdventCalendarDialog;
            const event = config.events.get(dayOfMonth);

            dialog.event = event;
            dialog.onclosed = () => {
                this.removeChild(dialog);
                dialog = undefined;
            }

            this.append(dialog);
            dialog.animate([{ opacity: 0 }, { opacity: 1 }], 500);
        }
    }

    private getIcon(config: AdventCalendarConfig, dayOfMonth: number) {
        if (this.isDayInTheFuture(dayOfMonth)) {
            return config.lockIcon;
        } else {
            return this.randomItem(config.icons);
        }
    }

    private getDayClass(dayOfMonth: number): string {

        if (this.isToday(dayOfMonth)) {
            return 'today';
        }

        if (this.isDayInTheFuture(dayOfMonth)) {
            return 'future';
        }

        return 'over';
    }

    private isDayInTheFuture(dayOfMonth: number): boolean {
        const today = new Date();
        const tileDate = this.getTileDate(dayOfMonth);
        return today.getTime() < tileDate.getTime();
    }

    private isToday(dayOfMonth: number) {
        const today = new Date();
        const tileDate = this.getTileDate(dayOfMonth);
        const isSameMonth = tileDate.getMonth() === today.getMonth();
        const isSameDayOfMonth = dayOfMonth === today.getDate();
        return isSameMonth === isSameDayOfMonth;
    }

    private isDecember(date: Date) {
        return date.getMonth() === JS_DECEMBER_MONTH_INDEX;
    }

    private getTileDate(dayOfMonth: number): Date {
        const tileDate = new Date();
        tileDate.setMonth(JS_DECEMBER_MONTH_INDEX);
        tileDate.setDate(dayOfMonth);
        return tileDate;
    }

    private randomItem<T>(list: T[]) {
        const random = Math.floor(Math.random() * list.length);

        return list[random];
    }
}