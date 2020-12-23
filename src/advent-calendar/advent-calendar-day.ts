
export const ADVENT_CALENDAR_DAY_TAG_NAME = 'advent-calendar-day';
export class AdventCalendarDay extends HTMLElement {

    icon: string;
    dayOfMonth: number;

    connectedCallback() {
        this.render(this.dayOfMonth, this.icon);
    }

    private render(dayOfMonth: number, icon: string) {
        this.innerHTML = `
        <div class="advent-calendar-day-header">${dayOfMonth}</div>
        <div class="icon">
            <i class="${icon}"></i>
        </div>
        `;
    }
}