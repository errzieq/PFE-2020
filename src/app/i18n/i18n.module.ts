import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateCacheModule, TranslateCacheSettings, TranslateCacheService } from 'ngx-translate-cache';

@NgModule({
  imports: [
    HttpClientModule,
    //configured TranslateModule to use the HttpClient to load translations
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: translateLoaderFactory,
        deps: [HttpClient]
      }
    }),

    TranslateCacheModule.forRoot({
      cacheService: {
        provide: TranslateCacheService,
        useFactory: translateCacheFactory,
        deps: [TranslateService, TranslateCacheSettings]
      },
      cacheMechanism: 'Cookie' //'Cookie' as a place to store the selected language.
    })

  ],

  //exporte TranslateModule as well to make the pipe transform available in the AppModule and in HTML templates
  exports: [TranslateModule]
})
export class I18nModule {
  constructor(translate: TranslateService , translateCacheService: TranslateCacheService) {
   /* translate.addLangs(['en', 'ru']); //available languages 
    const browserLang = translate.getBrowserLang(); //get the browser’s default language.
    translate.use(browserLang.match(/en|ru/) ? browserLang : 'en'); //use the browser’s default language.
  */
 translateCacheService.init();
 translate.addLangs(['en', 'ru']);
 const browserLang = translateCacheService.getCachedLanguage() || translate.getBrowserLang();
 translate.use(browserLang.match(/en|ru/) ? browserLang : 'en');
  }
}

export function translateLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);  
}

export function translateCacheFactory(
  translateService: TranslateService,
  translateCacheSettings: TranslateCacheSettings
) {
  return new TranslateCacheService(translateService, translateCacheSettings);
}