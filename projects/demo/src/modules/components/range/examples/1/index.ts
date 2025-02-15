import {Component} from '@angular/core';
import {UntypedFormControl} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: 'tui-range-example-1',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiRangeExample1 {
    readonly control = new UntypedFormControl([4, 6]);
}
