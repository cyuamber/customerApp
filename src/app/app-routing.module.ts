import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountListComponent } from './accounts-list/accounts.component';
import { AccountPictureComponent } from './account-picture/account-picture.component';

const routes: Routes = [
  { path: '', redirectTo: '/accountlist', pathMatch: 'full' },
  { path: 'accountlist', component: AccountListComponent },
  { path: 'accountpic', component: AccountPictureComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
