import { Component } from '@angular/core';
import { DatePipe } from "@angular/common";
import { Station } from "../station.type";
import { VelibService } from "../services/velib.service";

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [
    DatePipe
  ],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent {
  station: Station;

  constructor(private velibService: VelibService) {
    this.station = this.velibService.getById(17278902806);
  }
}
