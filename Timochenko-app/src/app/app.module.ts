import { BrowserModule, HammerModule, HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, LOCALE_ID, CUSTOM_ELEMENTS_SCHEMA, Injectable  } from '@angular/core';
import { AppRoutingModule } from './app-routing.module'; 
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {NgsRevealModule} from 'ngx-scrollreveal';

import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

import { LoaderComponent } from './loader/loader.component';
import { AppComponent } from './app.component';
import { MainModule } from './main/main.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ImageLoaderComponent } from './components/image-loader/image-loader.component';
import { MouseStyleComponent } from './components/mouse-style/mouse-style.component';

import { ChillPageComponent } from './pages/chill-page/chill-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { LitPageComponent } from './pages/lit-page/lit-page.component';
import { PalmeirasPageComponent } from './pages/palmeiras-page/palmeiras-page.component';

registerLocaleData(localePt);

import Hammer from 'hammerjs';
import { HeaderComponent } from './components/header/header.component';
import { ReebokPageComponent } from './pages/reebok-page/reebok-page.component';
import { SennaPageComponent } from './pages/senna-page/senna-page.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { BlankComponent } from './components/blank/blank.component';
import { VideoPlayerComponent } from './components/video-player/video-player.component';
import { RevealScrollComponent } from './components/reveal-scroll/reveal-scroll.component';
import { ParallaxDirective } from './directives/parallax.directive';

// Swiper ngx
import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
 
const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};

// Slick JS  https://kenwheeler.github.io/slick/
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { PageFooterComponent } from './components/page-footer/page-footer.component';
import { CarouselComponent } from './components/carousel/carousel.component';

 
@Injectable()
export class MyHammerConfig extends HammerGestureConfig {
  overrides = <any>{
    swipe: { direction: Hammer.DIRECTION_ALL },
  }
}

@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent,
    ImageLoaderComponent,
    MouseStyleComponent,
    ChillPageComponent, 
    AboutPageComponent, 
    LitPageComponent, 
    PalmeirasPageComponent, HeaderComponent, ReebokPageComponent, SennaPageComponent, PageHeaderComponent, BlankComponent, VideoPlayerComponent, RevealScrollComponent, ParallaxDirective, PageFooterComponent, 
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MainModule,
    NgbModule,
    HammerModule,
    NgsRevealModule,
    SlickCarouselModule,
    SwiperModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: "pt-br"},
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: MyHammerConfig
    },
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
  ],
  bootstrap: [AppComponent],  
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
