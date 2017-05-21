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
      authorFirstName: ['', Validators.required],
      authorLastName: ['', Validators.required],
      authorEmailAddress: ['', Validators.required],
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

}
