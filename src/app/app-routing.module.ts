import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PriceComponent } from './price/price.component';

const routes: Routes = [
  {path:"home",component: HomeComponent,
    children: [
      { path: ':price', component: PriceComponent},
    ]
  },
  {
    path:"",redirectTo:"/home/300",pathMatch:"full"
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
