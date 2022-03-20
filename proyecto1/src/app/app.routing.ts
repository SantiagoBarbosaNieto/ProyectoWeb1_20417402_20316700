import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AutenticacionComponent } from './components/autenticacion/autenticacion.component';

const routes = [
  {path: '', component: AutenticacionComponent}
]


@NgModule(
  {
    declarations: [],
    imports: [
      RouterModule.forRoot(routes)

    ],
    exports:
    [
        RouterModule
    ]
  })
export class AppRoutingModule 
{

}