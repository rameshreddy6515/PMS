import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Observer, of, timeInterval } from 'rxjs';
import { AppointmentDetails } from '../models/AppointmentDetail';
import { Customer } from '../models/Customer';
import { Employee } from '../models/employee';
import { Notes } from '../models/Notes';


@Injectable({
  providedIn: 'root',
})
export class NotesService {
  constructor(private http: HttpClient) {}
  private loadNotesata: Notes[]=[]
  namesList!: string[];
updateResponse(id:number,responseVal:String){
  const body =responseVal ;
  this.http
  .put('http://localhost:8081/inbox/updateReply/'+id,body)
  .subscribe()
}
updateStatus(id:number,responseVal:String){
  const body =responseVal ;
  this.http
  .put('http://localhost:8081/inbox/updateStatus/'+id,body)
  .subscribe()
}
addNote(responseVal:Notes){
  const body =responseVal ;
  this.http
  .post('http://localhost:8081/inbox/addNote/',body)
  .subscribe(res =>{
    console.log(res)
  })
}
// getEmpList(responseVal:String): Observable<string[]> {
 
//   const body =responseVal ;
//   console.log(body);
//   this.http
//   .get('http://localhost:8081/data/getempnamesbasedonrole/'+body)
//   .subscribe((res): Observer<string[]>=>{
//     return null;

    
//   })
 
// }
}
