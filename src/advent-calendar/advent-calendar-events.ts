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
    iframe: {
        style: "width: 100%;height: 80%",
        src: 'https://stackblitz.com/edit/angular-aspect-ratio-by-iframe?embed=1&file=src/app/app.component.ts&hideExplorer=1',
        frameborder: 0,
        allow: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture',
        allowfullscreen: true
    },
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


EVENTS.set(7, {
    title: 'NG Conf 2019 Day 3 CDK Is The Coolest Thing You Are Not Using With Jeremy Elbourn',
    description: ``,
    iframe: {
        style: "margin: auto; display: block; max-width: 100%",
        width: 560,
        height: 315,
        src: 'https://www.youtube.com/embed/4EXQKP-Sihw',
        frameborder: 0,
        allow: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture',
        allowfullscreen: true
    },
    links: [
        'https://www.youtube.com/watch?v=4EXQKP-Sihw'
    ]
});

EVENTS.set(8, {
    title: 'NGX-BUILD-PLUS 🚀',
    description: `
    That tool allows us to exclude certain dependecies from our final bundle

    There excluded dependencies will be treated as external ones which must be provided in the final implementation.

    So we could wrap our "micro" angular app as a web element (custom element) without all the angular dependencies.
    Then use our "micro" app within another one which already provides these common angular dependecies.

    That reduces a lot the "micro" apps bundle sizes in an angular micro-front-end world.
    `,
    links: [
        'https://github.com/manfredsteyer/ngx-build-plus'
    ]
});


