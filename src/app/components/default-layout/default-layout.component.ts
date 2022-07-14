import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from 'src/app/models/contact';
import { User } from 'src/app/models/user';
import { ContactsService } from 'src/app/services/contacts.service';
import { SwalService } from 'src/app/services/swal.service';
import { UsersService } from 'src/app/services/users.service';


@Component({
  selector: 'app-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.css']
})
export class DefaultLayoutComponent implements OnInit {

  user!: User;
  contact!:Contact

  constructor(
    private contactService: ContactsService,
    private usersService: UsersService,private route:ActivatedRoute,
   private swal:SwalService,private contactsService:ContactsService,private router:Router) {
  }
  ngOnInit(): void {
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

    this.route.queryParamMap.subscribe(
      params =>{
        const id = params.get('id');
        if(id){
          this.contactsService.GetContact(id)
          .subscribe(
            response =>{
              this.contact = response;
            }
          )
        }
      }
    )

  }   
  logout(){
    debugger;
    this.contactService.UpdateStatus(this.user.id, false).subscribe(()=>{
      this.router.navigate(['login']);
    });
  }
  deleteUser(user:User,contact:Contact){
    // this.swal.warningBeforeDelete(user,contact);

    // this.contactsService.DeleteContact(contact.id)
    // .subscribe(()=>{
    //   this.usersService.DeleteUser(user.id)
    //   .subscribe(() =>{
    //     this.router.navigate(['login']);
    //   })
    // })

    this.contactsService.DeleteContact(contact.id)
    .subscribe(() =>{

      this.router.navigate(['login']);
    })

    this.usersService.DeleteUser(user.id)
    .subscribe(()=>{
        this.router.navigate(['login']);
      })
    }
  }
