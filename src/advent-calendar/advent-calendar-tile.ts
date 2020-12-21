export class AdventCalendarTile extends HTMLElement {

    static get observedAttributes() {
        return ['day'];
    }
    day$ = new BehaviorSubject<number>(-1);
    destroyed$ = new Subject();
    attributeChangedCallback(attrName: string, oldValue: any, newValue: any) {
        if (attrName === 'day') {
    }
    }

        if (this.isDayInTheFuture(dayOfMonth)) {
            this.renderLockedTile(dayOfMonth);
        } else {
    }
        }

    private renderOpenedTile(dayOfMonth: number) {
        this.innerHTML = `
        <advent-calendar-tile-day day="${dayOfMonth}"></advent-calendar-tile-day>
        <!--  Here will be the advent-calendar-event  -->
        `;
    }

    private renderLockedTile(dayOfMonth: number) {
        this.innerHTML = `
        <advent-calendar-tile-day day="${dayOfMonth}"></advent-calendar-tile-day>
        <!-- here the lock icon -->
        `;
    }

    private isDayInTheFuture(dayOfMonth: number): boolean {
        const today = new Date();
        const tileDate = new Date();
        tileDate.setDate(dayOfMonth);

        return today.getTime() < tileDate.getTime();
    }

}