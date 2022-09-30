import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  language = 'es';
  translation = this.translate.getBrowserLang() || this.language;
  myStyle: object = {};
  myParams: object = {};
  width = 100;
  height = 100;

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang(this.translation);
    this.translate.use(this.translation);
  }

  ngOnInit() {}
}
