import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicFormService } from '../../../services/dynamic-form.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
})
export class DynamicFormComponent implements OnInit {
  dynamicForm!: FormGroup;
  formControls: any[] = []; // Replace 'any' with a more specific type if possible

  constructor(
    private formBuilder: FormBuilder,
    private dynamicFormService: DynamicFormService
  ) {}

  ngOnInit(): void {
    // Assume you have retrieved the user's permissions from your authentication service
    const userPermissions: string[] = ['admin', 'editor'];

    this.dynamicFormService.getFormControls(userPermissions).subscribe((controls) => {
      this.formControls = controls;
      this.initializeForm();
    });
  }

  initializeForm() {
    this.dynamicForm = this.formBuilder.group({});
    this.formControls.forEach(control => {
      const validators = control.type === 'input' ? Validators.required : null;
      this.dynamicForm.addControl(control.name, this.formBuilder.control(null, validators));
    });
  }

  onSubmit() {
    // Handle form submission logic
    console.log('Form submitted with values:', this.dynamicForm.value);
  }
}
