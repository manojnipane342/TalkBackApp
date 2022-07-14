import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ErrorsService } from 'src/app/services/errors.service';
import { SwalService } from 'src/app/services/swal.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  forgotForm: FormGroup = new FormGroup({});

  constructor(private formBuilder:FormBuilder
    ,private router:Router,private usersService:UsersService
    ,private swal:SwalService,public errorsService:ErrorsService) { }

  ngOnInit(): void {
    this.forgotForm = this.formBuilder.group({
      userName:[''],
    });
  }

  forgotPassword(){
    this.usersService.GetUserByName(this.forgotForm.value.userName)
    .subscribe(res=> {
      if(res.userName === this.forgotForm.value.userName){
        this.swal.success();
        this.router.navigate(['resetPassword'], {queryParams: {id: res.id}})
      }
      
    },(e)=>{ 
      this.errorsService.errors(e);
    });

      // if(this.forgotForm.value.userName.trim().length === 0){
      //   this.errorsService.errorsArray = [];
      //   this.errorsService.errorsArray.push('fdlfdk;fs');
      // } 
      // if(e?.error?.errors?.DisplayName[0]){
      //     this.errorsService.errorsArray = [];
      //     this.errorsService.errorsArray.push('fdlfdk;fs');
      //   }  
    }
  }
