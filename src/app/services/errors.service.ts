import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorsService {

  errorsArray:string[] = []

  constructor() { }


  errors(e:any){
    if (e.error) {
        this.errorsArray = [];
        this.errorsArray.push(e.error);
      }

      if (e.error?.errors?.Password[0]) {
        this.errorsArray = [];
        this.errorsArray.push(e.error?.errors?.Password[0]);
        
      } 
      if(e.error?.errors?.Password[1]){
        this.errorsArray.push(e.error?.errors?.Password[1]);
      }

      if (e.error?.errors?.UserName[0]) {
        this.errorsArray = [];
        this.errorsArray.push(e.error?.errors?.UserName[0]);
      }
      
      if(e.error?.errors?.UserName[1]){
        this.errorsArray.push(e.error?.errors?.UserName[1]);
      }

  }

  contactErrors(e:any){
    if (e?.error?.errors?.DisplayName[0]) {
      this.errorsArray = [];
      this.errorsArray.push(e?.error?.errors?.DisplayName[0]);

    }
    if (e?.error?.errors?.DisplayName[1]) {
      this.errorsArray.push(e?.error?.errors?.DisplayName[1]);

    }
  }

}
