import {Component} from '@angular/core';
import {UntypedFormControl, UntypedFormGroup} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDay, TuiDayRange} from '@taiga-ui/cdk';

@Component({
    selector: 'tui-input-date-range-example-1',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiInputDateRangeExample1 {
    readonly testForm = new UntypedFormGroup({
        testValue: new UntypedFormControl(
            new TuiDayRange(new TuiDay(2018, 2, 10), new TuiDay(2018, 3, 20)),
        ),
    });

    readonly min = new TuiDay(2000, 2, 20);

    readonly max = new TuiDay(2040, 2, 20);
}
