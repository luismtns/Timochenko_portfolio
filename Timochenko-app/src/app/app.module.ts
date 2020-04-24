import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, LOCALE_ID, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { AppRoutingModule } from './app-routing.module'; 
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

import { LoaderComponent } from './loader/loader.component';
import { AppComponent } from './app.component';
import { MainModule } from './main/main.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TiltModule } from "@ssv/ngx.tilt";

import { ImageLoaderComponent } from './components/image-loader/image-loader.component';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent,
    ImageLoaderComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MainModule,
    NgbModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: "pt-br"}
  ],
  bootstrap: [AppComponent],  
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
