import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { WebHeaderComponent } from './web-header/web-header.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'main-header',
        component: HomeComponent, 
      },
      { path: '', redirectTo: 'main-header', pathMatch: 'full' },
      { path: '**', redirectTo: 'main-header', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
   