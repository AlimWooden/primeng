import {Component} from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
    templateUrl: './checkboxdemo.html',
    styles: [`
        .ui-grid .ui-grid-col-1,
        .ui-grid .ui-grid-col-11 {
            padding: 4px 10px;
        }

        .ui-grid label {
            display: block;
            margin: 2px 0 0 4px;
        }
    `]
})
export class CheckboxDemo {

    formBuilder: FormBuilder = new FormBuilder();
    array = new FormArray([
        this.addFormGroup(), this.addFormGroup(), this.addFormGroup()
    ]);

 selectedCities: string[] = ['Jimmy', 'Dean'];

    selectedCategories: string[] = ['Technology', 'Sports'];

    checked: boolean = false;

    public checkoruncheck() {
        console.log('In method');
        this.checked = !this.checked;
    }

    addFormGroup(): FormGroup{
        return this.formBuilder.group({
            object: new FormControl({title: 'Jimmy', id: 1234}),
            title: new FormControl('Jimmy'),
            switch: new FormControl(true)
        });
    }

    addFormControl(): FormControl{
        return new FormControl('Jimmy');
    }

}
