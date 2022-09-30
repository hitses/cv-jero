export class Mail {
  constructor(
    username = '',
    email = '',
    subject = '',
    content = '',
    language = ''
  ) {
    this.username = username;
    this.email = email;
    this.subject = subject;
    this.content = content;
    this.language = language;
  }
  username: string;
  email: string;
  subject: string;
  content: string;
  language: string;
}
