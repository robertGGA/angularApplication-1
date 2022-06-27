import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from '@guards/main-page/main-page.component';
import { HeaderComponent } from '@components/header/header.component';
import { FooterComponent } from '@components/footer/footer.component';
import {IconComponent} from '@components/ui/icon/icon.component';

@NgModule({
	declarations: [
		AppComponent,
		MainPageComponent,
		HeaderComponent,
		FooterComponent,
		IconComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {

}
