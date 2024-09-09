import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";

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
  })
  protected readonly JSON = JSON;
}
