import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AutenticacionComponent } from './components/autenticacion/autenticacion.component';
import { ComprasComponent } from './components/compras/compras.component';
import { TiendaComponent } from './components/tienda/tienda.component';

const routes = [
  {path: '', component: AutenticacionComponent},
  {path: 'tienda', component: TiendaComponent},
  {path: 'compras', component: ComprasComponent}
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