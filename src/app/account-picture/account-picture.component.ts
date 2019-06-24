import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { AccountService } from '../account.service';

@Component({
  selector: 'app-account-picture',
  templateUrl: './account-picture.component.html',
  styleUrls: ['./account-picture.component.less']
})
export class AccountPictureComponent implements OnInit {
  picturePath = ""
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private accountService: AccountService

  ) { }

  ngOnInit() {
    this.getAvatarLink();

  }
  getAvatarLink(): void {
    // route.snapshot 是一个路由信息的静态快照，抓取自组件刚刚创建完毕之后。
    // paramMap 是一个从 URL 中提取的路由参数值的字典。
    const id = this.route.snapshot.paramMap.get('id');

    this.accountService.getPersonPicture(id).subscribe(pic => this.picturePath = pic);
  }
  goBack() {
    this.location.back();
  }
}
