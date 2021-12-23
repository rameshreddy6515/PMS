import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AppointmentDetails } from 'src/app/models/AppointmentDetail';
import { Notes } from 'src/app/models/Notes';
import { NotesService } from 'src/app/services/notes.service';
import { TablesService } from 'src/app/services/tablesService';
enum CheckBoxType {
  APPLY_FOR_JOB,
  MODIFY_A_JOB,
  NONE,
}

@Component({
  selector: 'app-sent',
  templateUrl: './sent.component.html',
  styleUrls: ['./sent.component.scss'],
})
export class SentComponent implements OnInit {
  check_box_type = CheckBoxType;
  currentlyChecked!: CheckBoxType;
  public todayDate = new Date();
  selectedId!: number;
  public isShowFilterInput = false;
  sortedData!: Notes[];
  checked = false;
  deleteButton: boolean = true;
  public displayedColumns: string[] = [
    'id',
    'message',
    'receiverName',
    'receiverType',
    'response',
    'urgencyLevel',
    'date',
    'time',
  ];

  dataSource = new MatTableDataSource<Notes>();
  constructor(private service: NotesService, private http: HttpClient) {}

  sortData(sort: Sort) {
    const data = this.dataSource;
    if (!sort.active || sort.direction === '') {
      console.log(this.dataSource);
      this.dataSource = data;
      return;
    }
  }

  ngOnInit(): void {
    this.refresh();
    console.log(this.todayDate);
  }
  refresh() {
    this.http
      .get<Notes[]>('http://localhost:8081/inbox/getsentnotes/E9')
      .subscribe((res: Notes[]) => {
        this.dataSource = new MatTableDataSource(res);
      });
  }

  operationRow(id: number) {
    console.log(id);
    this.selectedId = id;
  }
  onChangeOfSelect(ev: any) {
    console.log(this.checked);
    if (this.checked) {
      this.deleteButton = false;
    }
  }
  deleteCall() {
    console.log('delete');
    this.service.updateStatus(this.selectedId, 'Delete');
    window.location.reload();
  }
  selectCheckBox(targetType: CheckBoxType) {
    // If the checkbox was already checked, clear the currentlyChecked variable
    if (this.currentlyChecked === targetType) {
      this.currentlyChecked = CheckBoxType.NONE;
      return;
    }
    this.checked = true;
    this.currentlyChecked = targetType;
  }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
function compareDate(a: Date, b: Date, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
