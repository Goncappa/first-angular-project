import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'clients',
    loadChildren: () =>
      import('./clients/client.module').then((m) => m.ClientModule)
  },
  {
    path: 'motifs',
    loadChildren: () =>
      import('./outbound/template.module').then((m) => m.TemplateModule)
  },
  {
    path: 'count',
    loadChildren: () =>
      import('./outbound/template.module').then((m) => m.TemplateModule)
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
