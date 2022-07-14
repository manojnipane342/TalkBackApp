import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Contact } from '../models/contact';
import { User } from '../models/user';
import { ContactsService } from './contacts.service';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class SwalService implements OnInit{

  constructor(private usersService:UsersService,
    private router:Router,private contactsService:ContactsService) { }
  ngOnInit(): void {
    
  }



    success(){
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Signup Succssfull!',
        showConfirmButton: false,
        timer: 1500
      })
    }
      warningBeforeDelete(user:User,contact:Contact){
        // Swal.fire({  
        //   title: 'Are you sure?',  
        //   text: `you want to delete user ${user.userName}`,  
        //   icon: 'warning',  
        //   showCancelButton: true,  
        //   confirmButtonText: 'Yes, delete it!',  
        //   cancelButtonText: 'No, keep it',
        //   confirmButtonColor: '#3085d6',
        //   cancelButtonColor: '#d33',
         
        // })    .then((result) => {  
        //   if (result.value) {  
          
        //  const a = this.usersService.DeleteUser(user.id)
        //   .subscribe(
        //     () =>{
        //       if(a){
              
        //       this.contactsService.DeleteContact(contact.id)
        //       .subscribe((res)=>{
        //         this.contactsService.contact.id = res.id
        //         this.router.navigate(['login']);
        //       }); 
        //     }
        //     }
        //   )

        this.contactsService.DeleteContact(contact.id)
        .subscribe(()=>{
          this.usersService.DeleteUser(user.id)
          .subscribe(() =>{
            this.router.navigate(['login']);
          })
        })



        //     Swal.fire(  
        //       'Deleted!',  
        //       'Your account has been deleted',  
        //       'success'  
        //     )  
        //   } else if (result.dismiss === Swal.DismissReason.cancel) {  
        //     Swal.fire(  
        //       'Cancelled',  
        //       'Your account has not been deleted',  
        //       'error'  
        //     )  
        //   }  
        // })  
    
      }


      warning(){
        Swal.fire({
          position: 'center',
          icon: 'warning',
          title: 'The password field is empty!',
          showConfirmButton: false,
          timer: 1500
        })
      }
    }