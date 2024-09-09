import { Component } from '@angular/core';
import { PercentPipe } from "@angular/common";
import { Station } from "../station.type";
import {VelibService} from "../services/velib.service";

@Component({
  selector: 'app-liste',
  standalone: true,
  imports: [
    PercentPipe
  ],
  templateUrl: './liste.component.html',
  styleUrl: './liste.component.css'
})
export class ListeComponent {
  public stations: Station[];

  constructor(private velibService: VelibService) {
    this.stations = this.velibService.getList();
  }
}
