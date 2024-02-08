import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  myForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.myForm = this.formBuilder.group({
      name: ['', [Validators.required, this.firstLetterCapValidator]],
      email: ['', [Validators.required, Validators.email]],
      stuff: ['', [Validators.required, this.allCapsValidator]],
    });
  }

  get nameControl() {
    return this.myForm.get('name');
  }

  get emailControl() {
    return this.myForm.get('email');
  }

  get stuffControl() {
    return this.myForm.get('stuff');
  }

  // custom Validator to capitalize the first letter of each word
  firstLetterCapValidator(control: FormControl) {
    const value = control.value as string;
    if (!value) {
      return null; // If the value is empty, return null (no error)
    }
    const words = value.split(' ');
    const capitalizedWords = words.map(
      (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    );
    const newValue = capitalizedWords.join(' ');
    return newValue !== value ? { firstLetterCap: true } : null;
  }

  // custom Validator to ensure text is in all caps
  allCapsValidator(control: FormControl) {
    const value = control.value as string;
    return value === value.toUpperCase() ? null : { allCaps: true };
  }

  nameControlHasError(error: string) {
    const control = this.nameControl;
    return (
      control && control.hasError(error) && (control?.dirty || control?.touched)
    );
  }

  emailControlHasError(error: string) {
    const control = this.emailControl;
    return (
      control && control.hasError(error) && (control?.dirty || control?.touched)
    );
  }

  stuffControlHasError(error: string) {
    const control = this.stuffControl;
    return (
      control && control.hasError(error) && (control?.dirty || control?.touched)
    );
  }

  onSubmit() {
    if (this.myForm.valid) {
      console.log(this.myForm.value); // Logging form content
    } else {
      console.log('Form is invalid');
    }
  }
}
