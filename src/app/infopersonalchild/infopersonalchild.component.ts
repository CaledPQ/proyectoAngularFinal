import { Component } from '@angular/core';

@Component({
  selector: 'app-infopersonalchild',
  templateUrl: './infopersonalchild.component.html',
  styleUrls: ['./infopersonalchild.component.css']
})
export class InfopersonalchildComponent {
  show:boolean=false

  showText(){
    this.show=!this.show
  }
}


