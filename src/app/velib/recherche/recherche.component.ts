import { Component, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { debounceTime, filter } from "rxjs";
import { RechercheValue } from "../recherche-value";

@Component({
  selector: 'app-recherche',
  standalone: true,
  imports: [
    ReactiveFormsModule,
  ],
  templateUrl: './recherche.component.html',
  styleUrl: './recherche.component.css'
})
export class RechercheComponent {
  rechercheForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    isInstalled: new FormControl(false),
    isRenting: new FormControl(false),
    idReturning: new FormControl(false)
  });

  protected readonly JSON = JSON;

  values: EventEmitter<Partial<RechercheValue>> = new EventEmitter<Partial<RechercheValue>>();

  constructor() {
    this.rechercheForm.valueChanges.pipe(
      filter(formValue => formValue.name?.length ? formValue.name.length >= 3 : false),
      debounceTime(500)
    ).subscribe({
      next: value => this.values.emit(value)
    });

    this.values.subscribe(value => console.log(`obs1 : ${value.name}`));
    this.values.subscribe(value => console.log(`obs2 : ${value.name}`));
  }
}
