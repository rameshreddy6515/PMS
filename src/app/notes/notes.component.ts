import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSidenav } from '@angular/material/sidenav';
import { ComposeComponent } from './compose/compose.component';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})


export class NotesComponent implements OnInit {
  @ViewChild('sidenav')
  sidenav!: MatSidenav;
  public isMenubar:boolean=true; 
  public isInbox:boolean=false; 
  public isSentbox:boolean=true;
  createNote(): void {
    const dialogRef = this.dialog.open(ComposeComponent, {
      width: '300px',
      data: {name: 'shweta', animal: 'this.animal'},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      //this.animal = result;
    });
  }

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  showInbox(){
    console.log("inbox");
  this.isInbox=false;
  this.isSentbox=true;
  }
  showSentbox(){
    console.log("sentbox");
    this.isInbox=true;
    this.isSentbox=false;
    }
   
}
function Compose(Compose: any, arg1: { width: string; data: { name: string; animal: string; }; }) {
  throw new Error('Function not implemented.');
}

