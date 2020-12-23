import { AdventCalendarEvent } from './models/advent-calendar-event';

export const ADVENT_CALENDAR_DIALOG_EVENT_TAG_NAME = 'advent-calendar-dialog'

export class AdventCalendarDialog extends HTMLElement {

    event: AdventCalendarEvent;

    onclosed: () => void = () => { };

    private closeIconEl = document.createElement('div');
    private titleEl = document.createElement('h1');
    private descriptionEl = document.createElement('pre');
    private iframe = document.createElement('iframe');
    private wrapper = document.createElement('div');

    connectedCallback() {
        this.closeIconEl.onclick = (event: MouseEvent) => {
            event.stopPropagation();
            const animation = this.animate([{ opacity: 1 }, { opacity: 0 }], 500);
            animation.onfinish = () => this.onclosed();
        }

        this.render();
    }

    private render() {
        this.innerHTML = ``;

        this.closeIconEl.classList.add('advent-calendar-dialog-close');
        this.closeIconEl.innerHTML = `<i class="fa fa-times"></i>`;
        this.wrapper.appendChild(this.closeIconEl);

        this.titleEl.classList.add('advent-calendar-dialog-header');
        this.titleEl.textContent = this.event?.title;
        this.wrapper.appendChild(this.titleEl);

        this.descriptionEl.textContent = this.event?.description;
        this.wrapper.appendChild(this.descriptionEl);

        if (this.event?.iframe) {
            for (let attr in this.event.iframe) {
                this.iframe.setAttribute(attr, this.event.iframe[attr]);
            }
            this.wrapper.appendChild(this.iframe);
        }

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
        this.wrapper.appendChild(linkList);


        this.wrapper.classList.add('advent-calendar-dialog');
        this.appendChild(this.wrapper);
    }

}