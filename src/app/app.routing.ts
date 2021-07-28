import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {
      path: '',
      pathMatch: 'full',
      redirectTo: 'dashboard'
    },
    {
      path: 'dashboard',
      loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashBoardModule)
    }
  ];
  
  @NgModule({
    imports: [
    RouterModule.forRoot(routes)
    ],
    declarations: [],
    exports: [RouterModule]
  })
  export class RoutingModule {
  }