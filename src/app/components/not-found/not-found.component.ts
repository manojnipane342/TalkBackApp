import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

  user!:User;
  constructor(private usersService:UsersService,private route:ActivatedRoute) { }

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
  }


}
