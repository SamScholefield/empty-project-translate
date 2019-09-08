import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './container/header.component';
import { HeaderLangSwitchComponent } from './components/header-lang-switch/header-lang-switch.component';

@NgModule({
  declarations: [HeaderComponent, HeaderLangSwitchComponent],
  imports: [CommonModule],
  exports: [HeaderComponent, HeaderLangSwitchComponent],
})
export class HeaderModule {}
