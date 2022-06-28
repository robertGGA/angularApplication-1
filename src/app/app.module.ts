import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from '@pages/main-page/main-page.component';
import { HeaderComponent } from '@components/header/header.component';
import { FooterComponent } from '@components/footer/footer.component';
import { IconComponent } from '@components/ui/icon/icon.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AnimatedLinkComponent } from '@components/ui/links/animated-link/animated-link.component';
import { LoginPageComponent } from '@pages/login-page/login-page.component';
import { AboutPageComponent } from '@pages/about-page/about-page.component';
import { PricingPageComponent } from './pages/pricing-page/pricing-page.component';
import { BlogPageComponent } from './pages/blog-page/blog-page.component';

@NgModule({
	declarations: [
		AppComponent,
		MainPageComponent,
		HeaderComponent,
		FooterComponent,
		IconComponent,
		AnimatedLinkComponent,
		LoginPageComponent,
		AboutPageComponent,
  PricingPageComponent,
  BlogPageComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {

}
