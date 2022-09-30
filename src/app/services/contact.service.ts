import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';
import { Mail } from '../models/contact.model';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  mail: Mail;

  constructor(private http: HttpClient) {
    this.mail = new Mail();
  }

  sendMail(mail: Mail): any {
    return this.http.post(environment.url, { body: mail });
  }
}
