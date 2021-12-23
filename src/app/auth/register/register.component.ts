import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { PostRegisterComponent } from '../post-register/post-register.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  selectedTitle: string = '';
  userRegister: FormGroup = new FormGroup({});
  hide = false;
  titles: string[] = ['Mr.', 'Mrs. ', 'Ms.'];

  constructor(private router: Router, private dialogRef: MatDialog) {}

  ngOnInit(): void {
    this.userRegister = new FormGroup({
      titleName: new FormControl(null, [Validators.required]),
      firstName: new FormControl([]),
      lastName: new FormControl([]),
      email: new FormControl([]),
      dob: new FormControl([]),
      contactNumber: new FormControl([]),
      password: new FormControl([]),
      confirmPassword: new FormControl([]),
    });
  }

  onRegister() {
    // let title: string = this.userRegister.value.title;
    let firstName: string = this.userRegister.value.firstName;
    let lastName: string = this.userRegister.value.lastName;
    let email: string = this.userRegister.value.email;
    let dob: string = this.userRegister.value.dob;
    let contactNumber: string = this.userRegister.value.contactNumber;
    let password: string = this.userRegister.value.password;
    let confirmPassword: string = this.userRegister.value.confirmPassword;
    console.log('firstName = ' + firstName);
    console.log('lastName = ' + lastName);
    console.log('email = ' + email);
    console.log('dob = ' + dob);
    console.log('contactNumber = ' + contactNumber);
    console.log('password = ' + password);
    console.log('confirmPassword' + confirmPassword);
    this.dialogRef.closeAll();
    // const modalRef = this.modalService.open(ModalContentComponent);
    this.router.navigate(['/post-register']);
    //this.dialogRef.open(PostRegisterComponent, {});
  }
}
