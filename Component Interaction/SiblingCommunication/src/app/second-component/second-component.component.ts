import { Component, OnInit } from '@angular/core';
import { EventServiceService } from '../event-service.service';

@Component({
  selector: 'app-second-component',
  templateUrl: './second-component.component.html',
  styleUrls: ['./second-component.component.css']
})
export class SecondComponentComponent implements OnInit {

  data = '';
  constructor(private myservice:EventServiceService) {
    myservice.on<string>().subscribe(mydata=>{
      this.data=mydata;
    });
   }

  ngOnInit(): void {
  }

}
function subscribe(arg0: (mydata: any) => void): any {
  throw new Error('Function not implemented.');
}

