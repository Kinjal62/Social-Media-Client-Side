import { Component, OnInit } from '@angular/core';
import  {PostService} from '../post.service';
import {Router} from '@angular/router';
import { map } from 'rxjs/operators';
import * as _ from 'lodash';
declare var $ : any;
import { UserService } from '../user.service';

@Component({
	selector: 'app-allpost',
	templateUrl: './allpost.component.html',
	styleUrls: ['./allpost.component.css']
})
export class AllpostComponent implements OnInit {

	posts=[];
	like=[];
	_id : any;
	comments:any;
	currentUser = JSON.parse(localStorage.getItem('user'));
	constructor(public _postService: PostService , private router: Router, public _userService: UserService) { }

	ngOnInit() {
		this.getMyPost();
		setTimeout(function () {
			$('.grid').masonry({
				itemSelector: '.grid-item'
			});
		}, 1000);

		$(document).on("resize", function(){
			$('.grid').masonry({
				itemSelector: '.grid-item'
			});
		});
		
	}
	getImageLayoutClass(length){
		console.log(length);
		switch (length) {
			case 1:
			// code...
			return "single_image_layout";
			break;

			case 2:
			return "double_image_layout";
			break;

			case 3:
			return "three_image_layout";
			break;
			case 4:
			return "four_image_layout";
			break;
			case 5:
			return "five_image_layout";
			break;

			default:
			// code...
			return "five_plus_image_layout"
			break;
		}
	}
	getMyPost(){
		
		var id = JSON.parse(localStorage.getItem('user'))._id;
		var k = 0;
		this._postService.getUsersPosts(id).subscribe((res: any) => {
			console.log("response",res);
			this.posts=res;
			// this.change.detectChanges();
			console.log("posts in service",this.posts);

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
			this.posts = JSON.parse(localStorage.getItem('user')).post;
			this.like.forEach((i)=>{
				var flag = _.includes(this.posts, i._id);
				i['isLike'] = flag;
				console.log(i);
			})
			// this.change.detectChanges();


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

	deletePosts(post,i){
		console.log(post);
		this._postService.deletePost(post._id);
		this.posts.splice(i,1);
	}
}
