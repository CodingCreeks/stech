import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './core/core.module#CoreModule' },
  { path: 'industries', loadChildren: './industries/industries.module#IndustriesModule' },
  { path: 'services', loadChildren: './services/services.module#ServicesModule' },
  { path: 'ourSolutions', loadChildren: './our-solutions/our-solutions.module#OurSolutionsModule' },
  { path: 'about', loadChildren: './about/about.module#AboutModule' },
  { path: 'terms', loadChildren: './terms/terms.module#TermsModule' },
  { path: 'privacy', loadChildren: './privacy/privacy.module#PrivacyModule' },
  { path: 'careers', loadChildren: './careers/careers.module#CareersModule' },
  { path: 'contact', loadChildren: './contact/contact.module#ContactModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { useHash: true }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
