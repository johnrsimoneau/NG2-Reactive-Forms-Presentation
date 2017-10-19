import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  // Form & form fields vars
  bookForm: FormGroup;
  
  bookTitle: AbstractControl;
  authorFirstName: AbstractControl;
  authorLastName: AbstractControl;
  authorEmailAddress: AbstractControl;
  genre: AbstractControl;
  bookRead: AbstractControl;

  // Validation vars
  bookTitleMaxLength: number = 10;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {
    this.bookForm = this.fb.group({
      bookTitle: ['', Validators.compose([
        Validators.required,
        Validators.maxLength(this.bookTitleMaxLength)
      ])],
      authorFirstName: ['', Validators.compose([
        Validators.required,
        this.alphaOnlyValidator
      ])],
      authorLastName: ['', Validators.compose([
        Validators.required,
        this.alphaOnlyValidator
      ])],
      authorEmailAddress: ['', Validators.compose([
        Validators.required,
        this.emailValidator
      ])],
      genre: ['', Validators.required],
      bookRead: [false]
    });
    this.bookTitle = this.bookForm.controls['bookTitle'];
    this.authorFirstName = this.bookForm.controls['authorFirstName'];
    this.authorLastName = this.bookForm.controls['authorLastName'];
    this.authorEmailAddress = this.bookForm.controls['authorEmailAddress'];
    this.genre = this.bookForm.controls['genre'];
    this.bookRead = this.bookForm.controls['bookRead'];
  }

  emailValidator(control: FormControl): { [s: string]: boolean } {
    if (!control.value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
        return { invalidEmail: true };
    }
  }

  alphaOnlyValidator(control: FormControl): {[s: string]: boolean} {
    if (control.value.match(/\d+/g)) {
      return { containsNumbers: true };
    }
  }

}
