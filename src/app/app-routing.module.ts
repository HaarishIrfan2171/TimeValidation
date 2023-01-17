import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimeComponent } from './timecomponent/timeComponent';

const routes: Routes = [{
  path: 'time',
  component: TimeComponent
},
{
  path: '**',
  redirectTo: 'time'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
