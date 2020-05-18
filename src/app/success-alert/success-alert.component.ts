import {Component} from '@angular/core';

@Component({
	selector: "#success-alert",
	template: "<h2>{{message}}</h2>",
	styles: [
		`h2 {
			text-align: center;
			color: #19840c;
			border: solid;
			border-width: 3px;
			border-radius: 16px;
		}`
	],
})
export class SuccessAlertComponent {
	public message: string;

	constructor() {
		this.message = "Attention! Thanks for your attention!";

	}
}