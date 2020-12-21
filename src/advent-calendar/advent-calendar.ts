export class AdventCalendar extends HTMLElement {

    connectedCallback() {
        this.render();
    }

    render() {
        const tileTemplates = Array.from(new Array(24)).map((_, i) => {
            const dayOfMonth = i + 1;
            return `
                <advent-calendar-tile day="${dayOfMonth}"></advent-calendar-tile>
            `;
        });

        this.innerHTML = tileTemplates.join(' ');
    }
}