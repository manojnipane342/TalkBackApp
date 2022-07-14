import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Contact } from 'src/app/models/contact';
import { User } from 'src/app/models/user';
import { ContactsService } from 'src/app/services/contacts.service';
import { ErrorsService } from 'src/app/services/errors.service';
import { SwalService } from 'src/app/services/swal.service';
import { UsersService } from 'src/app/services/users.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {
 signupForm: FormGroup = new FormGroup({}); 
   constructor(private formBuilder:FormBuilder
    ,private router:Router,private usersService:UsersService
    ,private swal:SwalService,public errorsService:ErrorsService,
     private contactsService:ContactsService) { }


  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      userName:[''],
      password:[''],
      displayName:[''],
    });
}
  

  signUp(){
    debugger;
    this.usersService.Register(this.signupForm.value)
    .subscribe((user: User) => {
      let contact = Object.assign({}, this.signupForm.value);
      contact.userId = user.id
    this.contactsService.AddContact(contact)
    .subscribe(() => {
      this.swal.success();
      this.signupForm.reset();
      this.router.navigate(['login']);
    })
    },(e)=> {
      this.errorsService.errors(e);
    })
  }
 
}
