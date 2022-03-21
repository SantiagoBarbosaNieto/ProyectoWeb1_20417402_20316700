import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AutenticacionComponent } from './components/autenticacion/autenticacion.component';
import { ComprasComponent } from './components/compras/compras.component';
import { TiendaComponent } from './components/tienda/tienda.component';
import { ProductoComponent } from './components/producto/producto.component';
import { VentasComponent } from './components/ventas/ventas.component';

const routes = [
  {path: 'login', component: AutenticacionComponent},
  {path: '', component: TiendaComponent},
  {path: 'compras', component: ComprasComponent},
  {path: 'ventas', component:VentasComponent},
  {path: 'anadir', component:ProductoComponent},
  {path: '**', component:TiendaComponent}
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