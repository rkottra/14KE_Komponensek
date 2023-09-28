import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElerhetosegekComponent } from './elerhetosegek/elerhetosegek.component';
import { FooldalComponent } from './fooldal/fooldal.component';
import { TermekekComponent } from './termekek/termekek.component';

const routes: Routes = [
  
  {
    title     : 'Főoldal',
    path      : 'fooldal',
    component : FooldalComponent
  },
  {
    title     : 'Elérhetőségek',
    path      : 'elerhetosegek',
    component : ElerhetosegekComponent,
  },
  {
    title     : 'Termékek',
    path      : 'termekek',
    component : TermekekComponent
  },
  {
    path      : '**',
    redirectTo: 'fooldal'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
