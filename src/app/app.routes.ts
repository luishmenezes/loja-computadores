import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalhesProdutoComponent } from './produtos/detalhes-produto/detalhes-produto.component';

export const routes: Routes = [
    { path: 'produtos', loadChildren: () => import('./produtos/produtos.module').then(m => m.ProdutosModule) },
    {path: "", redirectTo: "produtos", pathMatch:"full"},
    {path: 'id:', component: DetalhesProdutoComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AprendendoRoutingModule { }
