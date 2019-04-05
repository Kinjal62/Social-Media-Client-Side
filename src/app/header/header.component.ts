import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
declare var $:any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  logout(){
		console.log("response");
		localStorage.clearAll();
		this.router.navigate(['/logIn']);
	}
 }
