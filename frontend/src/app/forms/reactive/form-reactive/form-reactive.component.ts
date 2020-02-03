import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-form-reactive',
  templateUrl: './form-reactive.component.html',
  styleUrls: ['./form-reactive.component.css']
})
export class FormReactiveComponent implements OnInit {
  genders = ['male', 'female'];
  signUpForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.signUpForm = new FormGroup({
      username: new FormControl('default username', [
        Validators.required, 
        this.forbiddenUsernames, 
        Validators.pattern(/^[a-zA-Z\- ]+$/)
      ]),
      email: new FormControl(null,[Validators.required, Validators.email], this.forbiddenEmails),
      gender: new FormControl('male'),
      passwordGroup: new FormGroup({
        password:  new FormControl(null,[Validators.required]),
        password2:  new FormControl(null,[Validators.required]),
      }),
      hobbies: new FormArray([])
    });
    console.log(this.signUpForm)

    // this.signUpForm.valueChanges.subscribe(values => console.log(values))
    // this.signUpForm.statusChanges.subscribe(values => console.log(values))
  }

  onSubmit(){
    console.log(this.signUpForm)
    if(this.signUpForm.valid){
      this.signUpForm.reset()
    }
  } 

  addHobby(){
    (this.signUpForm.get('hobbies') as FormArray).push(new FormControl(null, Validators.required))
  }

  forbiddenUsernames(control: FormControl): {[key:string]: boolean}{
      const forbiddenNames = ['bob'];
      if(forbiddenNames.includes(control.value)){
        return {'forbiddenName': true};
      }
      return null
  }

  forbiddenEmails(control: FormControl): Promise<any> | Observable<any>{
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
          if(control.value === 'test@email.com'){
            resolve({'forbiddenEmail': true});
          }else{
            resolve(null)
          }
      }, 3000);
    })
    return promise;
  }
}
