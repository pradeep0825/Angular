import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Output() myDataFromChild:EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    let data = {name:'Pradeep', age:22};
    this.myDataFromChild.emit(data);
  }

}
