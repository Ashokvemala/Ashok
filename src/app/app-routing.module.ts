import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';


const routes: Routes = [
  // {path:"home",component:HomeComponent},
  { path: 'home', loadChildren: () => import('./home/home/home.module').then(m => m.HomeModule) },
  { path: 'about', loadChildren: () => import('./about/about/about.module').then(m => m.AboutModule) },
  // {path:"about",component:AboutComponent},
  {path:"",redirectTo:"home",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
