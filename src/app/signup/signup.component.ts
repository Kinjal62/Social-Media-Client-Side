import { Component, OnInit } from '@angular/core';
import  {UserService} from '../user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

	detail = {first_name:"",last_name:"",email:"",dob:"",password:""};

  constructor(public _userService:UserService,private router:Router) { }

  ngOnInit() {
  }

   addData(detail){
		console.log("detail", detail);
		this._userService.signUp(detail).subscribe((res: any) => {
			console.log("response",res);
			this.router.navigate(['/logIn']);
			
		},err => {
			console.log("ERROR !" , err)
		});
		
	}

	

}
