import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component'; // Importando o HomeComponent
import { QuizzComponent } from './components/quizz/quizz.component'; // Importando o QuizzComponent

const routes: Routes = [
  { path: '', component: HomeComponent },  // Rota para a página inicial
  { path: 'quizz', component: QuizzComponent }  // Rota para o quiz
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  // Registrando as rotas no módulo
  exports: [RouterModule]  // Exportando o RouterModule para uso nos componentes
})
export class AppRoutingModule { }
