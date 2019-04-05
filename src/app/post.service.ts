import { Injectable } from '@angular/core';
import  { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
@Injectable({
	providedIn: 'root'
})
export class PostService {
removePost: Subject<any>;

	constructor(public http:HttpClient) { 
	this.removePost = <Subject<any>>new Subject();
	}
	removeObservableOfUser(){
		return this.removePost.asObservable();
	}
	addPost(detail){
		console.log("addpost",detail);
		detail['userId'] = JSON.parse(localStorage.getItem('user'))._id;
		console.log("userid===>",detail['userId']);
		return this.http.post("http://localhost:3000/post",detail);
		console.log("detil================>",detail);
	}

	getPost(userid){
		return this.http.get("http://localhost:3000/post",userid);
	}


	getUsersPosts(userId){
		console.log("getPosts")
		return this.http.get("http://localhost:3000/post/"+userId);
		
	}

	getMyFriendPost(currentUser){
		console.log("getmyfriendpsts")
		return this.http.get("http://localhost:3000/post/get-friend-post/"+currentUser);
	}

	uploadFile(file: FileList, data){
		console.log(data);
		let formData = new FormData();
		data['userId'] = JSON.parse(localStorage.getItem('user'))._id;
		formData.append('content', data.content);
		formData.append('datetime', data.datetime);
		formData.append('publish', data.publish);
		formData.append('fileName', data.fileName);
		formData.append('userId', data.userId);
		formData.append("uploadFile", file[0]);
		return this.http.post('http://localhost:3000/post/file-upload', formData);
	}

	like(id,postid){

		console.log("like",id);
		console.log("postid",postid);

		var dtl={
			userId:id,
			postId:postid
		}
		return this.http.post("http://localhost:3000/post/like",dtl);
	}

	dislike(postid,id){

		console.log("dislike",id);
		console.log("postid",postid);

		var dtl={
			userId:id,
			postId:postid
		}

		return this.http.post("http://localhost:3000/post/dislike",dtl);
	}
	
	userComment(id,postid,comment){

		console.log("comment",id);
		console.log("postid===========[[",postid);
		console.log("comment[[][][",comment);

		var body={

			userId:id,
			postId:postid,
			comment:comment
		}

		return this.http.post("http://localhost:3000/comment",body);
	}

	getComment(postId){
		console.log("getcomment",postId);
		return this.http.get("http://localhost:3000/comment/getcomment/"+postId);
		
	}
	getAllComments(postId){
	console.log("getallcomment",postId);
		return this.http.get("http://localhost:3000/comment/all/"+postId);
	}
	deletePost(id){
		this.http.delete("http://localhost:3000/post/"+id).subscribe(res=>{
			console.log(res);
			this.removePost.next({
				data:res
			})
		},err=>{
			console.log(err);
		});
	}
}
