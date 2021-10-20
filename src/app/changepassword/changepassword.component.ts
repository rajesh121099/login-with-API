import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Classuser } from '../classuser';
import { UsersService } from '../users-service.service';
import { ProfileService } from '../profile-service.service';
@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {
  checked = false;
  changePassword: FormGroup;
  cust = new Classuser();

 
  userData!: Classuser;


  constructor(
    private auth: UsersService ,
    public profileService: ProfileService,
    private router: Router,
    //private spinner: NgxSpinnerService,
   // private toastr: ToastrService
   )
    {
     
     
      this.changePassword = new FormGroup({
        email: new FormControl('', Validators.required,),
        oldPassword: new FormControl('', Validators.required),
        newPassword: new FormControl('', Validators.required),
        confirmPassword: new FormControl('', Validators.required)
         
         
         
      });
      this.changePassword.controls['email'].disable();
      this.retrieveUserProfile();
    }

    retrieveUserProfile(): void {
    //  this.spinner.show();
      this.profileService.retrieveUserProfile().subscribe( res => {
        this.userData = res.data;
       // this.spinner.hide();
        this.changePassword.patchValue(res.data)
      })
    }
  OnSubmit() {
    if (this.changePassword.valid) {
      return this.changePassword.value;
    }
  }

  submitChangePassword() {
    this.auth.changePassword(this.changePassword.value)
      .subscribe(
        res => {
            //this.toastr.info(res.status,'Reset Password');
            this.router.navigate(['/'])
        },
        err => {
         // this.toastr.info('Some error while trying to rest your password. Please contact the support team.','Reset Password')
          console.log(err);
        }
      )
  }

  ngOnInit(): void {
  }

}

 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 

