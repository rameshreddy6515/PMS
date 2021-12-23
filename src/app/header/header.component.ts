import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../auth/login/login.component';
import { User } from '../models/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public isShowInput = false;
  constructor(private dialogRef: MatDialog) {}

  ngOnInit(): void {}
  public showInput(): void {
    this.isShowInput = true;
  }

  openLogin() {
    this.dialogRef.open(LoginComponent);
  }
}
