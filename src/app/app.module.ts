import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { DragAndDropModule } from 'angular-draggable-droppable';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { MywallComponent } from './mywall/mywall.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { MyconnectionComponent } from './myconnection/myconnection.component';
import { ChatComponent } from './chat/chat.component';
import { PostComponent } from './post/post.component';
import { AllpostComponent } from './allpost/allpost.component';
import { SearchComponent } from './search/search.component';
import { FeedsComponent } from './feeds/feeds.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { ChatService } from './chat.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    SignupComponent,
    ProfileComponent,
    MywallComponent,
    MyprofileComponent,
    MyconnectionComponent,
    ChatComponent,
    PostComponent,
    AllpostComponent,
    SearchComponent,
    FeedsComponent,
    ResetpasswordComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    DragAndDropModule 
  ],
  providers: [ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
