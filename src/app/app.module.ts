import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatChipsModule,
  MatBadgeModule,
  MatInputModule,
  MatFormFieldModule,
  MatSnackBarModule,
  MatTableModule
} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountListComponent } from './accounts-list/accounts.component';
import { AccountDetailComponent } from './account-detail/account-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AccountPictureComponent } from './account-picture/account-picture.component';
import { AccountInputComponent } from './account-input/account-input.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountListComponent,
    AccountDetailComponent,
    MessagesComponent,
    AccountPictureComponent,
    AccountInputComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatChipsModule,
    MatBadgeModule,
    MatInputModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatTableModule
  ],
  exports: [MatButtonModule, MatChipsModule, MatBadgeModule, MatInputModule, MatFormFieldModule, MatSnackBarModule, MatTableModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
