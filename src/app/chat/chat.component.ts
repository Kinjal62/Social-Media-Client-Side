// import { Component, OnInit } from '@angular/core';
// import { ChatService } from '../chat.service';
// import {UserService} from '../user.service';
// declare var $ : any; 

// @Component({
// 	selector: 'app-chat',
// 	templateUrl: './chat.component.html',
// 	styleUrls: ['./chat.component.css']
// })
// export class ChatComponent implements OnInit {
// 	friends=[];
// 	message: string;
// 	messages = [];
// 	currentUser = JSON.parse(localStorage.getItem('user'));
// 	user:any;

// 	constructor(public _chatService: ChatService, public _userService:UserService) {
// 		this.getMessages();
// 	}

// 	ngOnInit() {
// 		this.getFriends();
// 	}
// 	openModel(user){
// 		this.user = user;
// 		console.log(user);
// 		this.getAllMessage(user._id);
// 		setTimeout(()=>{
// 		// var objDiv = document.getElementById("chat");
// 		// objDiv.scrollTop = objDiv.scrollHeight;

// 		$('#chat').animate({ scrollTop: $('#chat .chat_inner').height() }, 1200);
// 	},100)
// 	}

// 	getFriends(){
// 		var currentUser = JSON.parse(localStorage.getItem('user'))._id;
// 		this._userService.getMyAllFriendsById(currentUser).subscribe((res: any) => {
// 			console.log("response",res);
// 			for(var i=0;i<res.length;i++){
// 				this.friends.push(res[i]);
// 			}			
// 			console.log("users in service",this.friends);
// 		},(err:any) => {
// 			console.log("ERROR !" , err)
// 		});		
// 	}

// 	// openModel(user){
// 	// 	this.user = user;
// 	// 	this.getAllMessage(user._id);
// 	// }

// 	sendMessage(dstId){
// 		var body = {
// 			srcId: JSON.parse(localStorage.getItem('user'))._id,
// 			dstId: dstId,
// 			msg: this.message
// 		}
// 		this._chatService.sendMessage(body);
// 		setTimeout(()=>{this.getAllMessage(dstId)},500);
// 	}

// 	getAllMessage(user){

// 		var body = {
// 			srcId: JSON.parse(localStorage.getItem('user'))._id,
// 			dstId: user
			
// 		}
// 		this._chatService.getAllMessage(body).subscribe((res:any)=>{
// 			console.log("message");
// 			this.messages=res;

// 		},err=>{
// 			console.log(err);
// 		});

// 	}

// 	getMessages(){
// 		this._chatService
// 		.getMessages()
// 		.subscribe((data: any) => {
// 			console.log(data);
// 			if(data.dstId === this.currentUser._id){
// 				alert("you have new message from " + data.msg);	
// 				this.getAllMessage(data.srcId);			
// 			}
// 		});
// 	}
	
	
// }
import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';
import { UserService } from '../user.service';
declare var $ : any; 

@Component({
	selector: 'app-chat',
	templateUrl: './chat.component.html',
	styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
	message: string;
	messages: string[] = [];
	friends = [];
	currentUser = JSON.parse(localStorage.getItem('user'));
	user : any;
	constructor(private _chatService: ChatService, public _userService: UserService) { 

		this.getMessages();
	}

	ngOnInit() { 
		this.getAllFriends();
	}	
	openModel(user){
		this.user = user;
		console.log(user);
		this.getAllMessage(user._id);
		setTimeout(()=>{
		// var objDiv = document.getElementById("chat");
		// objDiv.scrollTop = objDiv.scrollHeight;

		$('#chat').animate({ scrollTop: $('#chat .chat_inner').height() }, 1200);
	},100)
	}
	getAllFriends(){
		var currentUser = JSON.parse(localStorage.getItem('user'))._id;
		this._userService.getMyAllFriendsById(currentUser).subscribe((res : any)=>{
			console.log("Response",res);
			for(var i = 0; i < res.length; i++){
				this.friends.push(res[i]);
			}
			console.log("users in service",this.friends);
		},err=>{
			console.log("Error",err)
		});
	
	}

	sendMessage(dstId) {
		var body = { 
			srcId: JSON.parse(localStorage.getItem('user'))._id,
			dstId: dstId,
			msg: this.message
		}
		this._chatService.sendMessage(body);
		setTimeout(()=>{this.getAllMessage(dstId)},500);
	}

	getMessages(){
		this._chatService.getMessages().subscribe((data: any) =>{
			console.log(data);
				if(data.dstId === this.currentUser._id){
				this.getAllMessage(data.srcId);
			}
		});		
	}
	getAllMessage(user){
		var body = { 
			srcId: JSON.parse(localStorage.getItem('user'))._id,
			dstId: user
		}
		this._chatService.getAllMessage(body).subscribe((res:any)=>{
			console.log(res);
			this.messages = res;
		},err=>{
			console.log(err);
		});
	}
}
