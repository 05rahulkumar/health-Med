import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  submitForm() {
    console.log('Form submitted!', this.formData);
    // Add logic to send form data to backend or perform any other action
  }
}


