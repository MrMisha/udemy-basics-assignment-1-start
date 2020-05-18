import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  templateUrl: './warning-alert.component.html',
  styleUrls: ['./warning-alert.component.css']
})
export class WarningAlertComponent implements OnInit {

  constructor() {
	this.message = "Attention is a WARNING message!";
   }

  public message: string;

  ngOnInit(): void {
  }

}
