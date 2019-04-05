import { Component, OnInit } from '@angular/core';
import  {UserService} from '../user.service';
import * as _ from 'lodash';


@Component({
	selector: 'app-search',
	templateUrl: './search.component.html',
	styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
	key;
	users=[];
	_id:string;
	myFriends=[];


	constructor(public _userService:UserService) { }

	ngOnInit() {
	}

	searchUser(key){
		console.log("response",this.key);
		this._userService.searchUser(this.key).subscribe((res:any)=>{
			console.log("response",res);
			this.users = res;
			this.myFriends = JSON.parse(localStorage.getItem('user')).friend;
			this.users.forEach((i)=>{
				var flag = _.includes(this.myFriends, i._id);
				i['isFriend'] = flag;
				console.log(i);
			})
		},err=>{
			console.log("error",err);

		})
		console.log("details",this.key);
	}

	addFriends(_id){
		console.log("response");
		this._userService.addFriend(_id).subscribe((res:any)=>{
			console.log("response",res);
			this._id = res;
			localStorage.setItem("user",JSON.stringify(res));
		},err=>{
			console.log("error",err);
		})
	}

	removeFriends(_id){

		console.log("response");
		this._userService.unFollow(_id).subscribe((res:any)=>{
			console.log("response",res);
			this._id = res;
			localStorage.setItem("user",JSON.stringify(res));
		},err=>{
			console.log("error",err);
		})
	}
}
