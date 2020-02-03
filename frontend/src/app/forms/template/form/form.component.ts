import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
   @ViewChild('form') form: NgForm;

  selectDefault = '2';
  select;
  constructor() { }

  ngOnInit() {
  }

  onSubmit(form : NgForm){
    console.log('submit ', form)

    // set all
    /*    
    this.form.setValue({
      username:'username',
      password:'password',
      select: '1',
      valueGroup:{
        value:'v',
        value2:'v2',
      }
    })
    */

    // set specific values
    this.form.form.patchValue({
      username:'username',
      password:'password',
    })

    // this.form.reset();
    // this.form.reset({username:'...'});
  }

}
