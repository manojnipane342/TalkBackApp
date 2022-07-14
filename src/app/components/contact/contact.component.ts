import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Contact } from 'src/app/models/contact';
import { User } from 'src/app/models/user';
import { ContactsService } from 'src/app/services/contacts.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {


  contactForm: FormGroup = new FormGroup({});
  contacts: Contact[] = [];
  onlineUsers: Contact[] = [];
  offlineUsers: Contact[] = [];
  user!: User;

  constructor(private formBuilder: FormBuilder, private contactsService: ContactsService
    , private usersService: UsersService, private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      displayName: [''],
    });

    this.route.queryParamMap.subscribe(
      params => {
        const id = params.get('id');
        if (id) {
          this.usersService.GetUserById(id)
            .subscribe(
              response => {
                this.user = response;
                this.GetAllContacts();
              }
            )
        }
      }
    )
  }

  GetAllContacts() {
    this.contactsService.GetAllContacts()
      .subscribe({
        next: (contacts) => {
          this.contacts = contacts;
          this.onlineUsers = this.contacts.filter(a => a.status && a.userId != this.user.id);
          this.offlineUsers = this.contacts.filter(a => !a.status && a.userId != this.user.id);
        },
        error: (response) => {
          console.log(response);
        }
      })
  }

}
