import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  name="";
  age = 0;
  email ="";

  @Output() myEvent = new EventEmitter();   

  FireNow(){
    this.myEvent.emit({name:this.name , age:+this.age , email:this.email})
  }

}
