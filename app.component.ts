import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hands-on';

  //Two-way binding
  Fname = "";
  Lname = "";
  Email = "";
  School="";

  //Data Binding

  imageUrl:string="assets/img/header.jpg"

  appName ="Research Conferences"
  appName2 ="Join our Online Events this 2022!";
  
  appliedCSSClass = "globe";

  appliedCSS = "corp";

  //ngfor
  partners =[
    { company: "Microsoft", trademark:"assets/img/microsoft.png", sponsorship:"Platinum", website:"https://www.microsoft.com/en-ph"},
    { company: "Apple, Inc.", trademark:"assets/img/apple.png", sponsorship:"Gold", website:"https://www.apple.com/ph/"},
    { company: "Amazon", trademark:"assets/img/amazon.png", sponsorship:"Silver", website:"https://www.amazon.com/"},
    { company: "Google, Inc.", trademark:"assets/img/gogole.png", sponsorship:"Bronze", website:"https://www.google.com/"},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

