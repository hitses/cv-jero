import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  lang: string = 'en';

  constructor(private translate: TranslateService) {
    this.translate.use(
      localStorage.getItem('language') ||
        this.translate.getBrowserLang() ||
        this.lang
    );
  }

  changeLang(lang: string) {
    localStorage.setItem('language', lang);
    this.translate.use(lang);
  }
}
