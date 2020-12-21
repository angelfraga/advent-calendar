import { AdventCalendarEvent } from './models/advent-calendar-event';

export const ADVENT_CALENDAR_TILE_EVENT_TAG_NAME = 'advent-calendar-tile-event'

export class AdventCalendarTileEvent extends HTMLElement {

    event: AdventCalendarEvent;

    private titleEl = document.createElement('h1');
    private descriptionEl = document.createElement('pre');

    connectedCallback() {
        this.tabIndex = 0;
        this.titleEl.classList.add('advent-calendar-tile-event-header');
        this.render()
    }

    private render() {
        this.innerHTML = ``;

        this.titleEl.textContent = this.event?.title;
        this.descriptionEl.textContent = this.event?.description;

        this.appendChild(this.titleEl);
        this.appendChild(this.descriptionEl);

        const linkList = document.createElement('ul');

        this.event?.links?.map(link => {
            const item = document.createElement('li');
            const a = document.createElement('a')
            a.href = link;
            a.textContent = link;
            a.target = '__blank';
            item.append(a);
            linkList.append(item);
        })

        this.appendChild(linkList);
    }
}