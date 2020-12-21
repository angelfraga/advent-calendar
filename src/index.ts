import { AdventCalendar, ADVENT_CALENDAR_TAG_NAME } from './advent-calendar/advent-calendar';
import { AdventCalendarTile, ADVENT_CALENDAR_TILE_TAG_NAME } from './advent-calendar/advent-calendar-tile';
import { AdventCalendarTileDay, ADVENT_CALENDAR_TILE_DAY_TAG_NAME } from './advent-calendar/advent-calendar-tile-day';
import './style.scss';
window.customElements.define(ADVENT_CALENDAR_TILE_DAY_TAG_NAME, AdventCalendarTileDay);
window.customElements.define(ADVENT_CALENDAR_TILE_TAG_NAME, AdventCalendarTile);
window.customElements.define(ADVENT_CALENDAR_TAG_NAME, AdventCalendar);
