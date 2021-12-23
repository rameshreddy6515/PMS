import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AppointmentDetails } from 'src/app/models/AppointmentDetail';
import { AppointmentService } from 'src/app/services/appointment.service';
import { DateAppointment } from '../appointments.component';

@Component({
  selector: 'app-appointments-list',
  templateUrl: './appointments-list.component.html',
  styleUrls: ['./appointments-list.component.scss']
})
export class AppointmentsListComponent implements OnInit {
  listOfAppointments!: AppointmentDetails[];

  constructor(    public dialogRef: MatDialogRef<AppointmentsListComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DateAppointment,private service:AppointmentService) { }

  ngOnInit(): void {
    console.log(this.data.date);
    this.listOfAppointments = this.service.getAllAppointment();
    console.log(this.listOfAppointments)
  }

}
function MD_DIALOG_DATA(MD_DIALOG_DATA: any) {
  throw new Error('Function not implemented.');
}

