import { Component } from '@angular/core';
import { RechercheComponent } from "./recherche/recherche.component";
import { ListeComponent } from "./liste/liste.component";
import { DetailComponent } from "./detail/detail.component";
import { VelibService } from "./services/velib.service";
import { RechercheValue } from "./recherche-value";

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
  protected currentCriteres: Partial<RechercheValue>| undefined;

  handleCriteres(values: Partial<RechercheValue>) {
    this.currentCriteres = values;
  }
}
