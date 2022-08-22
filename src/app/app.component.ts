import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  UserForma=new FormGroup(
    {
      userName:new FormControl('', [Validators.required, Validators.minLength(5)]),
      password:new FormControl('',Validators.required)
    }
  );


  GetLoginUser()
  {
    console.log(this.UserForma.value);
  }
}
