import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, timeInterval } from 'rxjs';
import { AppointmentDetails } from '../models/AppointmentDetail';
import { Customer } from '../models/Customer';
import { Employee } from '../models/employee';
import { Notes } from '../models/Notes';

@Injectable({
  providedIn: 'root',
})
export class AppointmentService {
  constructor(private http: HttpClient) {}
  private loadAppointmentata!: AppointmentDetails[];

  getAllAppointment(): AppointmentDetails[]{
  this.http
  .get<AppointmentDetails[]>('http://localhost:8081/schedular/getAppointments')
  .subscribe((res: AppointmentDetails[])  => {
    this.loadAppointmentata = res;
    console.log(this.loadAppointmentata)
  });
  return this.loadAppointmentata;
}


}
