import { Component, OnInit, HostListener } from '@angular/core';
import {UserService} from '../user.service';
import {ChatService} from '../chat.service';

import { DropEvent } from 'angular-draggable-droppable';
declare var $:any;
import * as _ from 'lodash';

@Component({
	selector: 'app-myconnection',
	templateUrl: './myconnection.component.html',
	styleUrls: ['./myconnection.component.css']
})
export class MyconnectionComponent implements OnInit {


	constructor(public _userService:UserService,public _chatService:ChatService) { }

	
	friends = [];
	_id : string;

	draggable: string = "";




	ngOnInit() {

		this.getFriends();

	}

	getFriends(){
		var currentUser = JSON.parse(localStorage.getItem('user'))._id;
		this._userService.getMyAllFriendsById(currentUser).subscribe((res: any) => {
			console.log("response",res);
			for(var i=0;i<res.length;i++){
				this.friends.push(res[i]);
			}
			
			console.log("users in service",this.friends);
		},(err:any) => {
			console.log("ERROR !" , err)
		});
		
	}

	removeFriend(_id){
		console.log("response");
		this._userService.unFollow(_id).subscribe((res:any)=>{
			console.log("response",res);
			console.log(this.friends);
			this.friends.splice(_.findIndex(this.friends, {_id: _id}), 1);
			localStorage.setItem("user",JSON.stringify(res));

		},err=>{
			console.log("error",err);
		})
	}

	@HostListener('dragover', ['$event']) onDragOver(event) {
		event.preventDefault();
	}

	@HostListener('drop', ['$event']) onDrop(event) {
		event.preventDefault();
		event.stopPropagation();
		var id = $(this)[0].friends[0]._id;
		this.removeFriend(id);
	}
}
