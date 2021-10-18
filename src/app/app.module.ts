import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import { SidenavComponent } from './sidenav/sidenav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import { ChatComponent } from './chat/chat.component';
import { ContactComponent } from './contact/contact.component';
import {MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { Contact1Component } from './contact1/contact1.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgetComponent } from './forget/forget.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RouterModule, ActivatedRoute } from '@angular/router';
import {MatTabsModule} from '@angular/material/tabs';
import { MatSelectModule}  from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { AuthGuard } from './services/auth.guard';


@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    ChatComponent,
    ContactComponent,
    Contact1Component,
    LoginComponent,
    RegisterComponent,
    ForgetComponent,
    ChangepasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule,RouterModule,MatTabsModule,MatSelectModule,HttpClientModule,ReactiveFormsModule,
    BrowserAnimationsModule,MatCardModule,MatSidenavModule,MatInputModule, LayoutModule, MatToolbarModule, MatButtonModule, MatIconModule, MatListModule,MatTableModule,MatCheckboxModule,MatFormFieldModule,
    RouterModule.forRoot([
      {path:'',component:LoginComponent},
        {path:'Login',component:LoginComponent},
        {path:'Register',component:RegisterComponent},
        {path:'Sidenav',component:SidenavComponent},
        {path:'Forget',component:ForgetComponent},
        {path:'Chat',component:ChatComponent},
        {path:'Contact',component:ContactComponent},
        {path:'Contact1',component:Contact1Component},
        {path:'changepassword',component: ChangepasswordComponent,canActivate: [AuthGuard]},
    ])
  ],
  providers: [AuthGuard ],
  bootstrap: [AppComponent]
})
export class AppModule { }
