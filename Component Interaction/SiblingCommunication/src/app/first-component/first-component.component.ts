import { Component, OnInit } from '@angular/core';
import { EventServiceService } from '../event-service.service';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {

  sendThisData = "Gujjula Pradeep Reddy";

  constructor(private myservice:EventServiceService) {
    myservice.emit<string>(this.sendThisData);
   }

  ngOnInit(): void {
  }

}
