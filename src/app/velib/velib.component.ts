import { Component } from '@angular/core';
import {RechercheComponent} from "./recherche/recherche.component";
import {ListeComponent} from "./liste/liste.component";
import {DetailComponent} from "./detail/detail.component";
import {VelibService} from "./services/velib.service";

@Component({
  selector: 'app-velib',
  standalone: true,
  imports: [
    RechercheComponent,
    ListeComponent,
    DetailComponent
  ],
  providers: [ VelibService ],
  templateUrl: './velib.component.html',
  styleUrl: './velib.component.css'
})
export class VelibComponent {

}
