import {
  Component,
  ChangeDetectionStrategy,
  ViewChild,
  TemplateRef,
} from '@angular/core';
import {
  MatCalendar,
  MatCalendarCellCssClasses,
} from '@angular/material/datepicker';
import { MatDialog } from '@angular/material/dialog';
import { Moment } from 'moment';
import { AppointmentsListComponent } from './appointments-list/appointments-list.component';
export interface DateAppointment {
  date: Date;
}
@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss'],
})
export class AppointmentsComponent {
  @ViewChild('calendar')
  calendar!: MatCalendar<Moment>;
  selectedDate!: Moment;
  constructor(public dialog: MatDialog) {}

  dates = [
    { date: '2021-12-01', text: 'one text' },
    { date: '2021-12-20', text: 'another text' },
  ];
  arrayOfDays = [
    new Date('2021-12-01'),
    new Date('2021-12-20'),
    new Date('2021-12-21'),
  ];
  datesToBeHighlighted: Date = new Date('2021-12-01');
  ngOninit() {}
 
  dateClass() {
 
    return (date: Date): MatCalendarCellCssClasses => {
      if (
        date.getMonth() == new Date().getMonth() &&
        date.getFullYear() == new Date().getFullYear()
      ) {
        if (date.getDate() == new Date().getDate()) {
          return 'today-date';
        } else if (
          date.getDate() <= new Date().getDate() + 6 &&
          date.getDate() > new Date().getDate()
        ) {
          
          return 'special-date';
        } else {
          return '';
        }
      } else {
        return '';
      }
    };
   
     
    
  }
  getChangedValue(e: any) {
    console.log(e.getDate());
const dialogRef = this.dialog.open(AppointmentsListComponent, {
            width: '500px',
            height:'500px',
            data:  {date: e.getFullYear()+'-'+e.getMonth()+'-'+e.getDate()},
          });
  }
}
