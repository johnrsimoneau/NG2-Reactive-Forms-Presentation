import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  
  // ^ short hand, instead of writing:
  // private _fb;
  // constructor(fb: FormBuilder) {
  //   this._fb = fb;
  // }

  ngOnInit() {
  }

}
