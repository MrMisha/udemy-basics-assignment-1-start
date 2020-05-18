import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-alert',
  templateUrl: './error-alert.component.html',
  styleUrls: ['./error-alert.component.css']
})
export class ErrorAlertComponent implements OnInit {

	constructor() {
		this.message = "Attention is a ERROR message!";
	}
	
	public message: string;

  ngOnInit(): void {
  }

}
