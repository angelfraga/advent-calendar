import { AdventCalendarEvent } from './models/advent-calendar-event';

// TODO: fill up from localStorage
export const EVENTS: Map<number, AdventCalendarEvent> = new Map();

Array.from(new Array(24)).forEach((_, i) => {
    const dayOfMonth = i + 1;
    EVENTS.set(dayOfMonth, { title: `Event ${dayOfMonth}`, description: `Description event day ${dayOfMonth}`, links: [] })
})

EVENTS.set(1, {
    title: 'Using custom elements',
    description: `Custom Elements allow web developers to define new types of HTML elements`,
    links: [
        'https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements',
        'https://developers.google.com/web/fundamentals/web-components'
    ]
})

EVENTS.set(2, {
    title: 'Using angular material theme generator',
    description: '',
    links: [
        'https://materialtheme.arcsine.dev/'
    ]
})

EVENTS.set(3, {
    title: 'CSS Aspect Ratio',
    description: `Use css in order to force an element to make fit the aspect ratio`,
    links: [
        'https://www.w3schools.com/howto/howto_css_aspect_ratio.asp'
    ]
})

EVENTS.set(4, {
    title: 'Responsive Aspect Ratio Trick',
    description: `
        Forces an element to keep fiting with an aspect ratio without producing overflow in its parent element.

        But also without extreme JS calculations using an iframe and css marvels.
    `,
    links: [
        'https://angular-aspect-ratio-by-iframe.stackblitz.io/'
    ]
})

EVENTS.set(5, {
    title: 'Material Icons font self hosted',
    description: `
        It looks like Google fonts served by CDN are not longer cached because some security/technical issues.

        That means we can not get real benefit of the CDN caching then it makes sense to self hosted all these fonts.
    `,
    links: [
        'https://google.github.io/material-design-icons/'
    ]
})

EVENTS.set(6, {
    title: 'Fabricjs ',
    description: ``,
    links: [
        'http://fabricjs.com/'
    ]
})


