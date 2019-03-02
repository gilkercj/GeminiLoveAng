import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// ================== //
//  Material Imports  //
// ================== //

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';

// ================== //
//  Firebase Imports  //
// ================== //

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';

// =================== //
//  Component Imports  //
// =================== //

import { CardComponent } from './card/card.component';
import { MainComponent } from './main/main.component';


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatCardModule,
    MatSidenavModule,
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase, "geminilove"),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
