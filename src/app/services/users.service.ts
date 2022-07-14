import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  
  public user!:User;
  errorss:string[] = []

  
  private baseUrl = environment.baseApiUsersUrl;
  private usersUrl = environment.usersUrl;
  private login = environment.login;
  private register = environment.register;

  constructor(private http:HttpClient) { }


  GetAllUsers():Observable<User[]>{
    return this.http.get<User[]>(this.baseUrl + this.usersUrl)
  }

  GetUserById(id: string):Observable<User>{
    return this.http.get<User>(this.baseUrl + this.usersUrl + '/' + id)
  }
  
  DeleteUser(id: string):Observable<User>{
    return this.http.delete<User>(this.baseUrl + this.usersUrl + '/' + id)
  }

    Register(user:User) :Observable<User>{
      let httpOptions = {
        headers: new HttpHeaders({'Content-Type':'application/json'})
      };
     return this.http.post<User>(this.baseUrl + this.register,user,httpOptions);
    }

    Login(user:User) :Observable<User>{
      let httpOptions = {
        headers: new HttpHeaders({'Content-Type':'application/json'})
      };
     return this.http.post<User>(this.baseUrl + this.login,user,httpOptions)
    }

  UpdateUser(id:string,user:User):Observable<User>{
    let httpOptions = {
      headers: new HttpHeaders({'Content-Type':'application/json'})
    };
    return this.http.put<User>(this.baseUrl + this.usersUrl + '/' + id , user, httpOptions)
  }

  GetUserByName(userName:string):Observable<User>{
    
    return this.http.get<User>(this.baseUrl + this.usersUrl + '/' + userName);
  }

}