import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PhysicianService } from 'src/app/services/Physician/physician.service';
import { Physician } from '../Physician';


@Component({
  selector: 'app-physicians',
  templateUrl: './physicians.component.html',
  styleUrls: ['./physicians.component.scss']
})
export class PhysiciansComponent implements OnInit {

  public signupForm!: FormGroup

  physician: Physician = new Physician();

  roles = [
    { id: 1, value: 'Physician' },
    { id: 2, value: 'Nurse' },
    { id: 3, value: 'Admin' }];


  // titles = [
  //   { id: 1, value: 'Mr.' },
  //   { id: 2, value: 'Mrs.' }];

  // titles: string[] = ['Mr.', 'Mrs.'];
  // favoritetitle!: string;


  constructor(private formBuilder: FormBuilder, public physicianService: PhysicianService) { }

  ngOnInit(): void { }

  onClear() {
    this.physicianService.form.reset();
  }

  onSubmit() {
    if (this.physicianService.form.valid) {
      this.physicianService.addDoctor(this.physicianService.form.value).subscribe(data => {
        console.log(this.physician);
      },
        error => console.log(error))
    }
    this.physicianService.form.reset();
  }
}
