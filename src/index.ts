import '@fortawesome/fontawesome-free/js/brands';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/solid';
import { AdventCalendar, ADVENT_CALENDAR_TAG_NAME } from './advent-calendar/advent-calendar';
import { AdventCalendarDay, ADVENT_CALENDAR_DAY_TAG_NAME } from './advent-calendar/advent-calendar-day';
import { AdventCalendarDialog, ADVENT_CALENDAR_DIALOG_EVENT_TAG_NAME } from './advent-calendar/advent-calendar-dialog';
import { EVENTS } from './advent-calendar/advent-calendar-events';
import './style.scss';


AdventCalendar.setConfig({
    icons: [
        'fas fa-sleigh',
        'fas fa-gifts',
        'fas fa-gift',
        'fas fa-holly-berry',
        'fas fa-candy-cane',
        'fas fa-tree',
        'fas fa-snowman',
        'fas fa-snowflake'
    ],
    lockIcon: 'fas fa-lock',
    events: EVENTS
});

window.customElements.define(ADVENT_CALENDAR_DIALOG_EVENT_TAG_NAME, AdventCalendarDialog);
window.customElements.define(ADVENT_CALENDAR_DAY_TAG_NAME, AdventCalendarDay);
window.customElements.define(ADVENT_CALENDAR_TAG_NAME, AdventCalendar);
