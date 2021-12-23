import { SelectionModel } from '@angular/cdk/collections';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Notes } from 'src/app/models/Notes';
import { NotesService } from 'src/app/services/notes.service';
import { CloseComponent } from '../close/close.component';
import { DeleteComponent } from '../delete/delete.component';
import { ReplyComponent } from '../reply/reply.component';
export interface selectedRow {
  id: number;
}
enum CheckBoxType { APPLY_FOR_JOB, MODIFY_A_JOB, NONE };
@Component({
  selector: 'app-allitems',
  templateUrl: './allitems.component.html',
  styleUrls: ['./allitems.component.scss'],
})
export class AllitemsComponent implements OnInit {
  check_box_type = CheckBoxType;
  currentlyChecked!: CheckBoxType;


  public todayDate = new Date();
  public isShowFilterInput = false;
  selectedNotes!: Notes[];

  replyButton: boolean = true;
  closeButton: boolean = true;
  deleteButton: boolean = true;
  sortedData!: Notes[];
  checked = false;
  //selection = new SelectionModel < Notes > (true, []);  
  public displayedColumns: string[] = [
    'id',
    'message',
    'senderName',
    'senderType',
    'urgencyLevel',
    'date',
    'time',
  ];
  dataSource = new MatTableDataSource<Notes>();
  selectedId!: number;
  constructor(private http: HttpClient, public dialog: MatDialog,private service:NotesService) {}

  ngOnInit(): void {
    this.refresh();
  }
  refresh() {
    this.http
      .get<Notes[]>('http://localhost:8081/inbox/getreceivednotes/E9')
      .subscribe((res: Notes[]) => {
        this.dataSource = new MatTableDataSource(res);
      });
  }
  operationRow(id:number){
    console.log(id);
this.selectedId=id;
  }
  onChangeOfSelect(ev:any) {
console.log(this.checked);
    if (this.checked) {
      this.replyButton = false;
      this.closeButton = false;
      this.deleteButton = false;
    }
  }
  replyCall() {
    console.log('reply' + this.checked);
    //const numSelected = this.selection.selected;  
    if (this.checked) {
      const dialogRef = this.dialog.open(ReplyComponent, {
        width: '300px',
        data: { id: this.selectedId},
      });

      dialogRef.afterClosed().subscribe((result) => {
        console.log('The dialog was closed');
        window.location.reload();
      });
    }
  }
  closeCall() {
   this.service.updateStatus(this.selectedId,'Close');
   window.location.reload();
  }
  deleteCall() {
    console.log('delete');
    this.service.updateStatus(this.selectedId,'Delete');
    window.location.reload();
  }
   selectCheckBox(targetType: CheckBoxType) {
    // If the checkbox was already checked, clear the currentlyChecked variable
    if(this.currentlyChecked === targetType) {
      this.currentlyChecked = CheckBoxType.NONE;
      return;
    }
    this.checked=true;
    this.currentlyChecked = targetType;
  }
}
