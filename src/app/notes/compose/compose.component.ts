import {
  Component,
  EventEmitter,
  Inject,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Notes } from 'src/app/models/Notes';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NotesService } from 'src/app/services/notes.service';
import { DatePipe } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-compose',
  templateUrl: './compose.component.html',
  styleUrls: ['./compose.component.scss'],
})
export class ComposeComponent implements OnInit {
  @Output() sendLoginForm = new EventEmitter<void>();
 public selectedReceieverType: string="Physician";
  public form!: FormGroup;
  public message!: string;
  public urgencyLevel!: string;
  public receiverDesignation!: string;
  public receiverName!: string;
  public namesList!: string[];
  messageValidator: FormControl =  new FormControl('', [Validators.required]);
  urgencyValidator: FormControl =  new FormControl('', [Validators.required]);
  receiverDesignationValidator: FormControl =  new FormControl('', [Validators.required]);
  receiverNameValidator: FormControl =  new FormControl('', [Validators.required]);

  constructor(
    public datepipe: DatePipe,
    private service: NotesService,
    public dialogRef: MatDialogRef<ComposeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Notes
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      message: new FormControl(this.message, [Validators.required]),
      urgencyLevel: new FormControl(this.urgencyLevel, [Validators.required]),
      receiverDesignation: new FormControl(this.receiverDesignation, [
        Validators.required,
      ]),
      receiverName: new FormControl(this.receiverName, [Validators.required]),
    });
  }
  sendNote() {

    if(this.form.invalid){
      alert("Enter Valid Data");
      return;
  }
    console.log(this.form.value.message);
    console.log(this.form.value.urgencyLevel);
    console.log(this.form.value.receiverDesignation);
    console.log(this.form.value.receiverName);
    var current_date = new Date();
    let current_time: string | null = this.datepipe.transform(current_date, 'shortTime');
    if (current_time != null) {
      this.service.addNote(
        new Notes(
          this.form.value.message,
          this.form.value.receiverName,
          this.form.value.receiverDesignation,
          'shweta',
          'Nurse',
          'Awaiting response',
          this.form.value.urgencyLevel,
          current_date,
          current_time,
          'Active'
        )
      );
    }
    this.dialogRef.close();
    window.location.reload();
  }

  getEmployeeList(){
    console.log("getList"+this.selectedReceieverType);
  // console.log(this.service.getEmpList(this.selectedReceieverType));
   //this.namesList=names;
    //console.log(this.namesList);
  }

}
