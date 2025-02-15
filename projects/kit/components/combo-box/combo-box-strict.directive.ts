import {Directive, HostListener, Inject, Input} from '@angular/core';

import {TuiComboBoxComponent} from './combo-box.component';

@Directive({
    selector: 'tui-combo-box[strict]',
})
export class TuiComboBoxStrictDirective<T> {
    @Input()
    strict = true;

    constructor(
        @Inject(TuiComboBoxComponent)
        private readonly comboBox: TuiComboBoxComponent<T | string>,
    ) {}

    @HostListener('input')
    onInput(): void {
        if (!this.strict && this.comboBox.search) {
            this.comboBox.value = this.comboBox.search;
        }
    }
}
