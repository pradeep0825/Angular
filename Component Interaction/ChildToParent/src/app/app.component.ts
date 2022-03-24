import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ChildToParent';
  data:any;
  ParentFunction(abc:any){
    console.log(abc);
    this.data=abc;
    console.log(this.data);
  }
}
