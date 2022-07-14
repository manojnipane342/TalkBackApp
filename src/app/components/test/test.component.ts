import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
 
  constructor(){}
  ngOnInit(): void {
  }
  name = 'Angular 5';
  password: string = '';
  c_password: string = '';
  toggle1: boolean = false;
  toggle2: boolean = false;

  changeType(input_field_password:any, num:any){
    if(input_field_password.type=="password")
      input_field_password.type = "text";
    else
      input_field_password.type = "password";

    if(num == 1)
      this.toggle1 = !this.toggle1;
    else
      this.toggle2 = !this.toggle2;
  }


    
}
