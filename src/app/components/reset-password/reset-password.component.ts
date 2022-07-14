import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { ErrorsService } from 'src/app/services/errors.service';
import { SwalService } from 'src/app/services/swal.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({});
  user!:User;
  
  visible:boolean = true;
  changetype:boolean =true;


  constructor(private formBuilder:FormBuilder
    ,private router:Router,private usersService:UsersService
    ,private route:ActivatedRoute,private swal:SwalService,
    public errorsService:ErrorsService ) { }

    ngOnInit(): void {
      this.loginForm = this.formBuilder.group({
        userName:[''],
        password:['']
      });
  
      
      this.route.queryParamMap.subscribe(
        params =>{
          const id = params.get('id');
          if(id){
            this.usersService.GetUserById(id)
            .subscribe(
              response =>{
                this.user = response;
              }
            )
          }
        }
      )
    }

    updateUser() {
      this.usersService.UpdateUser(this.user?.id, this.user)
      .subscribe(() => {
          this.swal.success();
          this.router.navigate(['login']);
        },(e)=> {
          
          this.errorsService.errors(e);
      })
    }

      viewpass(){
        const input = document.getElementById('InputPassword') as HTMLInputElement | null;
        const value = input?.value;
        
        if(value?.length === 0){
           this.swal.warning();
        }
        else{
          this.visible = !this.visible;
          this.changetype = !this.changetype;
        }
      }
    
    } 
