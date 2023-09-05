import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { ContatosComponent } from './components/contatos/contatos.component';
import { LinksComponent } from './components/links/links.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent, children: [
      { path: 'sobre', component: SobreComponent },
      { path: 'contatos', component: ContatosComponent },
      { path: 'links', component: LinksComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
