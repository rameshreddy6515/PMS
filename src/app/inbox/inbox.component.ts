import { Component, OnInit,Input} from '@angular/core';
import { enableProdMode} from '@angular/core';
import { Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { AppointmentDetails } from '../models/AppointmentDetail';
import { Customer } from '../models/Customer';
import { TablesService } from '../services/tablesService';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss']
})
export class InboxComponent implements OnInit {
  public todayDate= new Date();
public isShowFilterInput=false;
  sortedData!: AppointmentDetails[];
  public displayedColumns: string[] = ['meetingTitle', 'description', 'physician', 'date', 'time', 'editHistory','button'];
  public dataSource!: AppointmentDetails[];
  constructor(public service:TablesService){

  }

  // sortData(sort: Sort) {
  //   const data = this.service.loadAppointmentData().slice();
  //   if (!sort.active || sort.direction === '') {
  //     this.dataSource = data;
  //     return;
  //   }

  //   this.dataSource = data.sort((a, b) => {
  //     const isAsc = sort.direction === 'asc';
  //     switch (sort.active) {
  //       case 'meetingTitle':
  //         return compare(a.meetingTitle, b.meetingTitle, isAsc);
  //         case 'description':
  //           return compare(a.description, b.description, isAsc);
  //         case 'physician':
  //           return compare(a.physician, b.physician, isAsc);
  //         case 'date':
  //           return compareDate(a.date, b.date, isAsc);
  //       default:
  //         return 0;
  //     }
  //   });
  // }

  ngOnInit(): void {
    //this.dataSource = this.service.loadAppointmentData();
    console.log(this.dataSource);
  }


}
function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
function compareDate(a: Date, b: Date , isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}