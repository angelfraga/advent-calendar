import { AdventCalendarEvent } from './advent-calendar-event';
export const DEFAULT_TILE_ICON = 'fas fa-gitf';

export class AdventCalendarConfig {
    /**
     * List of css classes to be used as
     * icons
     * @example fas fa-gift
     */
    icons: string[] = [DEFAULT_TILE_ICON];
    /**
     * icon to be used when is a future day
     */
    lockIcon: string;
    /**
     * attached notes to be shown in the dialog
     */
    events: Map<number, AdventCalendarEvent> = new Map()
}