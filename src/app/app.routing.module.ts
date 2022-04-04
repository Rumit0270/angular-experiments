import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './auth.guard';
import { SecondComponent } from './second/second.component';
import { FormsDemoComponent } from './forms-demo/forms-demo.component';

const routes: Routes = [
  { path: '', component: FormsDemoComponent },
  { path: 'second', component: SecondComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class AppRoutingModule {}
