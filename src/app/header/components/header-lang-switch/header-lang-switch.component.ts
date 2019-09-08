import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header-lang-switch',
  templateUrl: './header-lang-switch.component.html',
  styleUrls: ['./header-lang-switch.component.scss'],
})
export class HeaderLangSwitchComponent implements OnInit {
  @Input()
  currentLang: string;
  @Output()
  changeLang: EventEmitter<any> = new EventEmitter();
  DE = false;
  EN = true;
  constructor(private langService: TranslateService) {}

  ngOnInit() {}

  requestChangeLang(language: string) {
    console.log('event emitted:', language);
    this.currentLang = language;
    this.changeLang.emit(language);
    this.DE = !this.DE;
    this.EN = !this.EN;
  }
}
