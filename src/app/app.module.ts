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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { AuthGuard } from './services/auth.guard';
import { TokenInterceptorService } from './token-interceptor.service';
import {MatDialogModule} from '@angular/material/dialog';
import { LogoutComponent } from './logout/logout.component';
import { MessageComponent } from './message/message.component';
import { FacebookLoginProvider, GoogleLoginProvider, SocialAuthServiceConfig, SocialLoginModule } from 'angularx-social-login';

const fbLoginOptions = {
  scope: 'pages_messaging,pages_messaging_subscriptions,email,pages_show_list,manage_pages',
  //scope: 'pages_messaging,pages_messaging_subscriptions,email,pages_show_list',
  return_scopes: true,
  enable_profile_selector: true,
  version: "v2.11" // this line added.
};

const googleLoginOptions = {
  scope: 'profile email'
};
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
    ChangepasswordComponent,
    LogoutComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,    SocialLoginModule,
    AppRoutingModule, FormsModule,RouterModule,MatTabsModule,MatSelectModule,HttpClientModule,ReactiveFormsModule,MatDialogModule,
    BrowserAnimationsModule,MatCardModule,MatSidenavModule,MatInputModule, LayoutModule, MatToolbarModule, MatButtonModule, MatIconModule, MatListModule,MatTableModule,MatCheckboxModule,MatFormFieldModule,
    RouterModule.forRoot([
     {path:'Login',component:LoginComponent},
     {path:'message',component: MessageComponent },
        {path:'Register',canActivate: [AuthGuard],component:RegisterComponent},
        {path:':userId/Sidenav', canActivate: [AuthGuard],component:SidenavComponent},
        {path:'Forget',canActivate: [AuthGuard],component:ForgetComponent},
        {path:'Chat',canActivate: [AuthGuard],component:ChatComponent},
        {path:'Contact',canActivate: [AuthGuard],component:ContactComponent},
        {path:'Contact1',canActivate: [AuthGuard],component:Contact1Component},
        {path:'changepassword',canActivate: [AuthGuard],component: ChangepasswordComponent},
      
       { path: '**', redirectTo: 'Login' }
        
    ])
  ],
  providers: [ { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true },
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '574316266130-f6ila19i8htdr87v2mq62fpoegd6q570.apps.googleusercontent.com', googleLoginOptions
            )
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('125112632754235', fbLoginOptions)
          }
        ]
      } as SocialAuthServiceConfig,
    }, ],
  bootstrap: [AppComponent]
})
export class AppModule { }
