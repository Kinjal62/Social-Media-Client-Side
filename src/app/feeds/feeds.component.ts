import { Component, OnInit,ChangeDetectorRef } from '@angular/core';
import  {PostService} from '../post.service';
import {Router} from '@angular/router';
import { map } from 'rxjs/operators';
import * as _ from 'lodash';


@Component({
	selector: 'app-feeds',
	templateUrl: './feeds.component.html',
	styleUrls: ['./feeds.component.css']
})
export class FeedsComponent implements OnInit {

	friends=[];
	like=[];
	comments:any;
	currentUser = JSON.parse(localStorage.getItem('user'));
	constructor(public _postService:PostService , private router:Router,public change: ChangeDetectorRef) { }

	ngOnInit() {

		this.getFriendPost();


	}

	getFriendPost(){
		var id = JSON.parse(localStorage.getItem('user'))._id;
		var k=0;
		this._postService.getMyFriendPost(id).subscribe((res: any) => {
			console.log("response",res);
			this.friends=res;
			this.change.detectChanges();
			console.log("posts in service",this.friends);
		},
		err => {
			console.log("ERROR !" , err)
		});
	}

	postLike(postid){

		var id = JSON.parse(localStorage.getItem('user'))._id;
		this._postService.like(id,postid).subscribe((res:any)=>{

			console.log("like----",res);
			this.like=res;
			this.friends = JSON.parse(localStorage.getItem('user')).friend;
			this.like.forEach((i)=>{
				var flag = _.includes(this.friends, i._id);
				i['isLike'] = flag;
				console.log(i);
			})
			this.change.detectChanges();


		},err=>{
			console.log("err=====-=-=-",err);
		})	

		console.log("like-=-=-=-",postid);

	}

	postDisLike(postid){

		var id = JSON.parse(localStorage.getItem('user'))._id;
		this._postService.dislike(id,postid).subscribe((res:any)=>{

			console.log("err+++++",res);
			this.like=res;
		},err=>{
			console.log("err=====-=-=-",err);
		})
	}

	commentUser(postid,comment){


		var id = JSON.parse(localStorage.getItem('user'))._id;
		this._postService.userComment(id,postid,comment).subscribe((res:any)=>{

			console.log("usercomment----",res);
			this.comments = res;
			// this.change.detectChanges();

		},err=>{
			console.log("err=====-=-=-",err);
		})	

	}

	getComment(postId){

		this._postService.getComment(postId).subscribe((res:any)=>{

			console.log("getComment------",res);

		},err=>{

			console.log("errr-=-=-=-",err);
		})
	}
	getAllCommentOfTask(postId){
				this._postService.getAllComments(postId).subscribe(res=>{
					this.comments = res;
				}, err=>{
					console.error(err);
				})
			}
	
}
