import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about/about-us.component';
import { RegisterComponent } from './components/register/register.component';
import { ContactComponent } from './components/contact/contact.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'about-us',
    component: AboutUsComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
      path: '**',
      pathMatch: 'full',
      component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
