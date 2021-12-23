import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTabsModule } from '@angular/material/tabs';

import { DatePipe } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { InboxComponent } from './inbox/inbox.component';
import { RouterModule, Routes } from '@angular/router';
import { NotesComponent } from './notes/notes.component';
import { SentComponent } from './notes/sent/sent.component';
import { AllitemsComponent } from './notes/allitems/allitems.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { ReplyComponent } from './notes/reply/reply.component';
import { CloseComponent } from './notes/close/close.component';
import { LoginComponent } from './auth/login/login.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { DeleteComponent } from './notes/delete/delete.component';
import { AppointmentsListComponent } from './appointments/appointments-list/appointments-list.component';
import { ComposeComponent } from './notes/compose/compose.component';
import { RegisterComponent } from './auth/register/register.component';
import { ChangePasswordComponent } from './auth/change-password/change-password.component';
import { MatRadioModule } from '@angular/material/radio';
import { Ng2TelInputModule } from 'ng2-tel-input';
import { PostloginComponent } from './auth/postlogin/postlogin.component';
import { PostRegisterComponent } from './auth/post-register/post-register.component';

const routes: Routes = [
  {
    path: 'inbox',
    component: InboxComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'postlogin',
    component: PostloginComponent,
  },
  {
    path: 'post-register',
    component: PostRegisterComponent,
  },
  {
    path: 'notes',
    component: NotesComponent,
  },
  {
    path: 'notes/inbox',
    component: SentComponent,
  },
  {
    path: 'appointment',
    component: AppointmentsComponent,
  },
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    InboxComponent,
    NotesComponent,
    SentComponent,
    AllitemsComponent,
    ComposeComponent,
    AppointmentsComponent,
    AppointmentsListComponent,
    ReplyComponent,
    CloseComponent,
    DeleteComponent,
    LoginComponent,
    RegisterComponent,
    ChangePasswordComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatListModule,
    MatTabsModule,
    MatSidenavModule,
    MatTableModule,
    MatRadioModule,
    MatCardModule,
    MatCheckboxModule,
    MatPaginatorModule,
    MatSortModule,
    HttpClientModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgbModule,
    Ng2TelInputModule,
    RouterModule.forRoot(routes),
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
