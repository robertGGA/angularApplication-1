import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from '@pages/main-page/main-page.component';
import { AboutPageComponent } from '@pages/about-page/about-page.component';
import { LoginPageComponent } from '@pages/login-page/login-page.component';
import { BlogPageComponent } from '@pages/blog-page/blog-page.component';
import { PricingPageComponent } from '@pages/pricing-page/pricing-page.component';

const routes: Routes = [{ path: '', component: MainPageComponent },
	{ path: 'about', component: AboutPageComponent },
	{ path: 'login', component: LoginPageComponent },
	{ path: 'blog', component: BlogPageComponent },
	{ path: 'pricing', component: PricingPageComponent }];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
