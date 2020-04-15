import {Component, ChangeDetectorRef} from '@angular/core';
import {SelectItem} from 'primeng/api';
import {SelectItemGroup} from 'primeng/api';
import { FormArray, FormBuilder, FormGroup, FormControl } from '@angular/forms';

interface City {
    name: string,
    code: string
}

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

    cities: City[];

    selectedCity: City;

    cars: SelectItem[];

    selectedCar1: string;

    selectedCar2: string = 'BMW';
    
    selectedCar3: string;

    groupedCars: SelectItemGroup[];

    items: SelectItem[];

    item: string;

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
        this.changeDetector.detectChanges();
    }

    addFormGroup(): FormGroup{
        return this.formBuilder.group({
            object: new FormControl({title: 'Jimmy', id: 1234}),
            title: new FormControl('Jimmy'),
            switch: new FormControl(false)
        });
    }

    addFormControl(): FormControl{
        return new FormControl('Jimmy');
    }

    changeFormValue(control: FormControl) {
        console.log('In change method', control.value);
        let value: boolean = control.value;
        console.log('In change method', !value);
        control.setValue(!value);
        console.log(control);
        console.log(this.array);
    }

    showFormControl(group: FormGroup) {
        console.log('The Group', group);
    }

    setFormValue() {
        console.log('In setFormValue');
        const form: FormGroup = this.array.controls[1] as FormGroup;
        const value = form.controls.switch.value;
        form.controls.switch.setValue(!value);
        this.changeDetector.detectChanges();
    }

    constructor(private readonly changeDetector: ChangeDetectorRef) {
        this.items = [];
        for (let i = 0; i < 10000; i++) {
            this.items.push({label: 'Item ' + i, value: 'Item ' + i});
        }

        this.cities = [
            {name: 'New York', code: 'NY'},
            {name: 'Rome', code: 'RM'},
            {name: 'London', code: 'LDN'},
            {name: 'Istanbul', code: 'IST'},
            {name: 'Paris', code: 'PRS'}
        ];

        this.cars = [
            {label: 'Audi', value: 'Audi'},
            {label: 'BMW', value: 'BMW'},
            {label: 'Fiat', value: 'Fiat'},
            {label: 'Ford', value: 'Ford'},
            {label: 'Honda', value: 'Honda'},
            {label: 'Jaguar', value: 'Jaguar'},
            {label: 'Mercedes', value: 'Mercedes'},
            {label: 'Renault', value: 'Renault'},
            {label: 'VW', value: 'VW'},
            {label: 'Volvo', value: 'Volvo'}
        ];

        this.groupedCars = [
            {
                label: 'Germany', value: 'germany.png', 
                items: [
                    {label: 'Audi', value: 'Audi'},
                    {label: 'BMW', value: 'BMW'},
                    {label: 'Mercedes', value: 'Mercedes'},
                    {label: 'Murcia', value: 'Murcia'}
                ]
            },
            {
                label: 'USA', value: 'usa.png', 
                items: [
                    {label: 'Cadillac', value: 'Cadillac'},
                    {label: 'Ford', value: 'Ford'},
                    {label: 'GMC', value: 'GMC'}
                ]
            },
            {
                label: 'Japan', value: 'japan.png', 
                items: [
                    {label: 'Honda', value: 'Honda'},
                    {label: 'Mazda', value: 'Mazda'},
                    {label: 'Toyota', value: 'Toyota'}
                ]
            }
        ];
    }
}
