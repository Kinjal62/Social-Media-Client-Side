import { Injectable } from '@angular/core';
import  {HttpClient} from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http:HttpClient) { }



  logIn(log)
  {
  	console.log("login user",log);
  	return this.http.post("http://localhost:3000/user/logIn",log);
  	
  }


  signUp(log)
  {
  	console.log("signUp user",log);
  	return this.http.post("http://localhost:3000/user/signUp",log);
  }

  searchUser(key){
    console.log("searchUser", key);
    var query = "?key="+key
    return this.http.get("http://localhost:3000/user"+query);
  }

  addFriend(_id){
    console.log("friend",_id);
    var body = {requestedUser:JSON.parse(localStorage.getItem('user'))._id, userTobeFollowed:_id};
    return this.http.post("http://localhost:3000/user/follow",body);
  }

  unFollow(_id){

    console.log("unfriend",_id);
    var body = {requestedUser:JSON.parse(localStorage.getItem('user'))._id, userTobeUnFollowed:_id};
    return this.http.post("http://localhost:3000/user/unFollow",body);
  }

  getUserById(id){

    console.log("profile",id);
    
    return this.http.get("http://localhost:3000/user/"+id);
  }

  getMyAllFriendsById(currentUser){

    console.log("myFriends",currentUser);
    return this.http.get("http://localhost:3000/user/get-friend/"+currentUser);
  }

  uploadFile(file: FileList, data, changeType){
    console.log(data);
    let formData = new FormData();
    formData.append('change', changeType);
    formData.append('userId', data);
    formData.append("uploadFile", file[0]);
    return this.http.post('http://localhost:3000/user/file-upload', formData);
  }
  update(detail){

    console.log("detail",detail);

    return this.http.post("http://localhost:3000/user/updatedata",detail);

  }
}
