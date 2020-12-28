import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { firebase } from '../environments/environment'
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { FormsModule } from '@angular/forms';
import {AuthService} from '../app/service/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';
@NgModule({
  declarations: [
    AppComponent
  ],


  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    AngularFireModule.initializeApp(firebase),
    AngularFireAuthModule,
    AngularFireMessagingModule,
    AngularFireStorageModule,
    FormsModule
  ],
  providers: [
    AngularFirestore,
    AuthService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
