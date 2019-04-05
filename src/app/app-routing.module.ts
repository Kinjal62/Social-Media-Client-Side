import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HeaderComponent} from './header/header.component';
import  {LoginComponent} from './login/login.component';
import { ProfileComponent} from './profile/profile.component';
import {SignupComponent} from './signup/signup.component';
import  {MywallComponent} from './mywall/mywall.component';
import  {MyprofileComponent} from './myprofile/myprofile.component';
import {MyconnectionComponent} from './myconnection/myconnection.component';
import {ChatComponent} from './chat/chat.component';
import {PostComponent} from './post/post.component';
import  {AllpostComponent} from './allpost/allpost.component';
import {SearchComponent} from './search/search.component';
import {FeedsComponent} from './feeds/feeds.component';
import {ResetpasswordComponent} from './resetpassword/resetpassword.component';









const routes: Routes = [
	{path:"", pathMatch:"full", redirectTo:"logIn"},
	{path: 'hedar' , component:HeaderComponent},
	{path: 'logIn', component:LoginComponent},
	{path: 'profile', component:ProfileComponent},
	{path: 'signUp', component:SignupComponent},
	{path: 'mywall', component:MywallComponent},
	{path: 'myprofile', component:MyprofileComponent},
	{path: 'myconnection', component:MyconnectionComponent},
	{path: 'chat', component:ChatComponent},
	{path: 'post', component:PostComponent},
	{path: 'allpost',component:AllpostComponent},
	{path: 'search',component:SearchComponent},
	{path: 'feeds',component:FeedsComponent},
	{path: 'resetpassword',component:ResetpasswordComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
