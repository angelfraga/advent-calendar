const DAYS_IN_ADVENT_CALENDAR = 24;
export const DEFAULT_TILE_ICON = 'gitf';

export class AdventCalendarConfig {
    icons: string[] = [DEFAULT_TILE_ICON];
    maxDays: number = DAYS_IN_ADVENT_CALENDAR;
}