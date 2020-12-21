import '@fortawesome/fontawesome-free/js/brands';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/solid';
import { AdventCalendar, ADVENT_CALENDAR_TAG_NAME } from './advent-calendar/advent-calendar';
import { AdventCalendarTile, ADVENT_CALENDAR_TILE_TAG_NAME } from './advent-calendar/advent-calendar-tile';
import { AdventCalendarTileDay, ADVENT_CALENDAR_TILE_DAY_TAG_NAME } from './advent-calendar/advent-calendar-tile-day';
import './style.scss';


AdventCalendar.setConfig({
    maxDays: 24,
    icons: [
        'fas fa-sleigh',
        'fas fa-gifts',
        'fas fa-gift',
        'fas fa-holly-berry',
        'fas fa-candy-cane',
        'fas fa-tree',
        'fas fa-snowman',
        'fas fa-snowflake'
    ]
});

window.customElements.define(ADVENT_CALENDAR_TILE_DAY_TAG_NAME, AdventCalendarTileDay);
window.customElements.define(ADVENT_CALENDAR_TILE_TAG_NAME, AdventCalendarTile);
window.customElements.define(ADVENT_CALENDAR_TAG_NAME, AdventCalendar);
