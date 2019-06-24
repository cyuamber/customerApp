import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatSnackBar } from '@angular/material';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-account-input',
  templateUrl: './account-input.component.html',
  styleUrls: ['./account-input.component.less']
})
export class AccountInputComponent implements OnInit {
  constructor(private snackBar: MatSnackBar) { }
  ifLoggin: boolean = true;
  initName: string = "";
  disabledInputButton: boolean = false;
  // 必须要导入ReactiveFormsModule模块，才能使formControl生效
  emptyInputControl = new FormControl('', [
    Validators.required,
  ]);
  matcher = new MyErrorStateMatcher();
  ngOnInit() {
    let iflogin = window.sessionStorage.getItem('username');
    console.log(iflogin, '======用户是否登陆======')
    this.ifLoggin = iflogin ? true : false;
  }
  handleLogin(name: string) {
    if (name !== "") {
      this.openSnackBar('登录成功', '确定')
      window.sessionStorage.setItem('username', name);
    } else {
      this.openSnackBar('登录失败', '确定')
    }

  }
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
