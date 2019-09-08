# Angular 8 internationalization using ngx-translate

## Objectives

- create a basic Angular 8 application using the Angular CLI
- install the ngx-translate library
- obtain the user locale from the browser
- initilise the 'TranslateService'
- create .json translation files
- implement a user language selector
- translate static text
- translate text with variables
- use nested .json objects

In this article I intend to reinforce my own learning by providing a guide to using ngx-translate with Angular 8. I will not go into full detail of everything ngx-translate is capable of merely demonstrate my own way of working with it.

### 1. Create a basic Angular 8 application using the Angular CLI

`ng new basic-project-translate --style=scss --routing=true`

### 2. Install the ngx-translate library

Install the core library

`npm install @ngx-translate/core --save`

Additionally, as I will be loading .json definition files over http:

`npm install @ngx-translate/http-loader --save`

### 3. Setup project to use ngx-translate

app.module.ts

<pre><code>import {HttpClientModule, HttpClient} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

//add this to module imports
TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
</code></pre>
