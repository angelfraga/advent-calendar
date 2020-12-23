export interface AdventCalendarEvent {
    title: string;
    description: string;
    /**
     * That property allows us inject content such as Youtube video
     * @example 
     * {
     *  style: "margin: auto",
     *  width: 560,
     *  height: 315,
     *  src: 'https://www.youtube.com/embed/4EXQKP-Sihw',
     *  frameborder: 0,
     *  allow: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture',
     *  allowfullscreen: true
     * }
     */
    iframe?: { [attribute: string]: any }
    links: string[];
}