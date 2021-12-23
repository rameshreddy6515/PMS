import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NotesService } from 'src/app/services/notes.service';
import { AllitemsComponent, selectedRow } from '../allitems/allitems.component';

@Component({
  selector: 'app-reply',
  templateUrl: './reply.component.html',
  styleUrls: ['./reply.component.scss']
})
export class ReplyComponent implements OnInit {
  idRowSelected!: number;
  replyform: FormGroup = new FormGroup({});
  constructor(private service:NotesService,public dialogRef: MatDialogRef<AllitemsComponent>,  @Inject(MAT_DIALOG_DATA) public data: selectedRow) {  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit(): void {
    this.idRowSelected=this.data.id;
    this.replyform = new FormGroup(
      {​​​​​​ response: new FormControl('',[Validators.required]),
      }
  );
 
  }

  submitReply(){
    if(this.replyform.invalid){
      alert("Enter Valid Data");
      return;
  }
 console.log(this.replyform);
 let response = this.replyform.value.response;
 console.log(response);
 this.service.updateResponse(this.idRowSelected,response);
 this.dialogRef.close();
  }
  

}
