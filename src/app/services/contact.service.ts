import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Mail } from '../models/contact.model';

const URL = `https://jerodev.up.railway.app/api/mail/contact`;

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  mail: Mail;

  constructor(private http: HttpClient) {
    this.mail = new Mail();
  }

  sendMail(mail: Mail): any {
    return this.http.post(URL, { body: mail });
  }
}
