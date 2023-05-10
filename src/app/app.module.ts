import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about/about-us.component';
import { ContactComponent } from './components/contact/contact.component';
import { RegisterComponent } from './components/register/register.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './core/layout/navbar/navbar.component';
import { FooterComponent } from './core/layout/footer/footer.component';
import { LayoutModule } from './core/layout/layout.module';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    ContactComponent,
    RegisterComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    PageNotFoundComponent
  ]
})
export class AppModule { }
