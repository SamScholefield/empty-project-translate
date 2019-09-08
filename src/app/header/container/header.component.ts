import { Component, OnInit, Output, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output()
  currentLang: string = 'EN';

  @Input()
  langChange: Event;
  constructor(private translate: TranslateService) {
    // use browserLang, or saved user settings to define default
    translate.setDefaultLang('en');
  }

  changeLang(language: string) {
    this.translate.use(language);
    this.currentLang = language;
  }

  ngOnInit() {
    console.log(navigator.language);
    // this.currentLang = navigator.language;
  }
}
