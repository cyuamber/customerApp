import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatChipsModule, MatBadgeModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountListComponent } from './accounts-list/accounts.component';
import { AccountDetailComponent } from './account-detail/account-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AccountPictureComponent } from './account-picture/account-picture.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountListComponent,
    AccountDetailComponent,
    MessagesComponent,
    AccountPictureComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    MatButtonModule,
    MatChipsModule,
    MatBadgeModule
  ],
  exports: [MatButtonModule, MatChipsModule, MatBadgeModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
