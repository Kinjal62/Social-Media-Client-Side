import { Component, OnInit } from '@angular/core';
import  {PostService} from '../post.service';
import {Router} from '@angular/router';

@Component({
	selector: 'app-post',
	templateUrl: './post.component.html',
	styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
	detail = {content:"", datetime: new Date(), publish: false, fileName:""};
	posts:any;
	files:FileList;
	currentUser = JSON.parse(localStorage.getItem('user'));
	constructor(public _postService:PostService , private router:Router) { }

	ngOnInit() {
	}

	addPost(detail){

		if(this.files && this.files.length)
		{

		detail['userId'] = JSON.parse(localStorage.getItem('user'))._id;
		console.log("details", detail);
		this._postService.uploadFile(this.files ,detail).subscribe(res=> {
			console.log("response",res);
			
		},err => {
			console.log("ERROR !" , err)
		});
		}
		else{
		this._postService.addPost(detail).subscribe(res=>{

				console.log("response",Response);
			},err=>{
				console.log(err);
			})
		}
	}

	getPosts(detail){
		this._postService.addPost(detail).subscribe(res=> {
			console.log("response",res);
		},err => {
			console.log("ERROR !" , err)
		});

	}

	changeFile(e){
		console.log(e.target.files);
		this.files = e.target.files;
		//this._postService.uploadFile(this.files);
	}
}




