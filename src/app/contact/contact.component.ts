import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../services/contact.service';
import { Mail } from '../models/contact.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  contact: FormGroup = this.fb.group({
    username: [
      'Prueba Jero Angular',
      [Validators.required, Validators.minLength(2)],
    ],
    email: ['jerogassan@gmail.com', [Validators.required, Validators.email]],
    subject: [
      'Prueba Jero Angular',
      [Validators.required, Validators.minLength(2)],
    ],
    content: [
      'Prueba Jero Angular',
      [Validators.required, Validators.minLength(2)],
    ],
  });

  sendMail: boolean = false;
  // waiting: boolean = false;
  sendedMail: boolean = false;

  constructor(
    private fb: FormBuilder,
    private contactService: ContactService
  ) {}

  ngOnInit(): void {}

  isntValid(input: string) {
    return (
      this.contact.controls[input].errors &&
      this.contact.controls[input].touched
    );
  }

  send() {
    if (this.contact.invalid) {
      this.contact.markAllAsTouched();
      return;
    }

    this.contact.value.language = localStorage.getItem('language');

    const content: Mail = this.contact.value;
    this.contactService.sendMail(content).subscribe(async (response: any) => {
      this.sendMail = true;
      // if (!response) this.waiting = true;
      if (await response) {
        // this.waiting = false;
        this.sendedMail = true;
      }
      return await response;
    });

    this.contact.reset();
  }
}
