import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router} from '@angular/router';
import { Contact } from 'src/app/models/contact';
import { User } from 'src/app/models/user';
import { ErrorsService } from 'src/app/services/errors.service';
import { SwalService } from 'src/app/services/swal.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({});
  user!:User;
  contact!:Contact;

  constructor(private formBuilder:FormBuilder
    ,private router:Router,
     private usersService:UsersService
    ,private swal:SwalService,public errorsService:ErrorsService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userName:[''],
      password:['']
    });

  }

  login(){
    this.usersService.Login(this.loginForm.value)
    .subscribe(res=> {
      this.swal.success();
        this.loginForm.reset();
        this.router.navigate(['contact'], {queryParams: {id: res.id}})
    
      },(e)=>{
        this.errorsService.errors(e);
      });
    }
}