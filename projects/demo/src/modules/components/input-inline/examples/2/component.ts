import {Component, Inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAlertService} from '@taiga-ui/core';

@Component({
    selector: 'tui-input-inline-example-2',
    templateUrl: './template.html',
    styleUrls: ['./style.less'],
    encapsulation,
    changeDetection,
})
export class TuiInputInlineExample2 {
    heading = 'Page heading';
    editing = false;

    constructor(
        @Inject(TuiAlertService)
        private readonly alerts: TuiAlertService,
    ) {}

    toggle(): void {
        this.editing = !this.editing;
    }

    onFocusedChange(focused: boolean): void {
        if (!focused) {
            this.editing = false;
            this.saveHeading(this.heading);
        }
    }

    private saveHeading(newHeading: string): void {
        this.alerts.open(newHeading, {label: 'New heading'}).subscribe();
    }
}
