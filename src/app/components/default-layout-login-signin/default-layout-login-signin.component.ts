import { Component, OnInit } from '@angular/core';
import { ErrorsService } from 'src/app/services/errors.service';

@Component({
  selector: 'app-default-layout-login-signin',
  templateUrl: './default-layout-login-signin.component.html',
  styleUrls: ['./default-layout-login-signin.component.css']
})
export class DefaultLayoutLoginSigninComponent implements OnInit {

  constructor(private errorService:ErrorsService) { }

  ngOnInit(): void {
    this.errorService.errorsArray = [];
  }

}
