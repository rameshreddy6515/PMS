import { ChangeDetectorRef, Component, OnDestroy, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy  {
  @ViewChild('sidenav')
  sidenav!: MatSidenav;
  title = 'hospital-management';
  public isShowSidebar:boolean=true;
  public isMenuOpened=true;

  public ngOnDestroy(): void {
    this.sidenav.close();
  }
  }
 
