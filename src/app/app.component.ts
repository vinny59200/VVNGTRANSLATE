import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'VVTRANSLATE';

  param = { value: 'Vinny' };

  constructor(private translate: TranslateService) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.addLangs(['en', 'fr']);
    translate.setDefaultLang('en');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('en');
  }

  switch() {
    if (this.translate.getDefaultLang() === 'en') {
      this.translate.use('fr');
    } else {
      this.translate.use('en');
    }
  }
}
