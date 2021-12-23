import { Component, OnInit, ViewChild } from '@angular/core';
import { PhysicianService } from 'src/app/services/Physician/physician.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { PhysiciansComponent } from '../physicians/physicians.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-physician-list',
  templateUrl: './physician-list.component.html',
  styleUrls: ['./physician-list.component.scss']
})
export class PhysicianListComponent implements OnInit {
  displayedColumns: string[] = ['Employee ID', 'Employee Name', 'DOB', 'STATUS'];
  datasource: any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;


  searchKey: string = '';
  physicianList: any;
  event!: Event;
  constructor(private phyService: PhysicianService, private dialog: MatDialog) { }

  ngOnInit() {
    this.getListOfPhysician();
  }

  getListOfPhysician() {
    let resp = this.phyService.getAllPhysician();
    resp.subscribe((list) => {
      this.datasource = new MatTableDataSource(list);
      this.datasource.paginator = this.paginator;
    },
      error => {
        console.error(error);
      });
  }

  onSearchClear() {
    this.searchKey = "";
    this.applyFilter(this.event);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.datasource.filter = filterValue.trim().toLowerCase();
  }

  onCreate() {
    console.log("hii");
    const dialogConfig = new MatDialogConfig();
     dialogConfig.disableClose = false;
    dialogConfig.autoFocus = false;
    dialogConfig.width = "75%";
   // dialogConfig.height = "85%";
    this.dialog.open(PhysiciansComponent, dialogConfig);

  }

}
