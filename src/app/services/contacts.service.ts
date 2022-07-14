import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { contactsEnvironment } from 'src/environments/environment';
import { Contact } from '../models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  private baseUrl = contactsEnvironment.baseApiContactsUrl;
  private ContactsUrl = contactsEnvironment.contactsUrl;
  
  public contact!:Contact;

   constructor(private http:HttpClient) { }

  GetAllContacts():Observable<Contact[]>{
    return this.http.get<Contact[]>(this.baseUrl + this.ContactsUrl)
  }

  GetContact(id: string):Observable<Contact>{
    return this.http.get<Contact>(this.baseUrl + this.ContactsUrl + '/' + id)
  }
  
  DeleteContact(id: string):Observable<Contact>{
    return this.http.delete<Contact>(this.baseUrl + this.ContactsUrl + '/' + id)
  }
  AddContact(contact:Contact) :Observable<Contact>{
    let httpOptions = {
      headers: new HttpHeaders({'Content-Type':'application/json'})
    };
    return this.http.post<Contact>(this.baseUrl + this.ContactsUrl,contact,httpOptions);
  }

  UpdateContact(id:string,contact:Contact):Observable<Contact>{
    let httpOptions = {
      headers: new HttpHeaders({'Content-Type':'application/json'})
    };
    return this.http.put<Contact>(this.baseUrl + this.ContactsUrl + '/' + id , contact, httpOptions)
  }
  UpdateStatus(userid:string,status:boolean):Observable<boolean>{
    return this.http.get<boolean>(this.baseUrl + this.ContactsUrl + `/updatestatus/?userid=${userid}&status=${status}`)
  }

}
