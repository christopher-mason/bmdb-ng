import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NoComponentDefinedComponent } from './core/no-component-defined/no-component-defined.component';
import { ActorCreateComponent } from './feature/actor/actor-create/actor-create.component';
import { ActorListComponent } from './feature/actor/actor-list/actor-list.component';
import { MovieCreateComponent } from './feature/movie/movie-create/movie-create.component';
import { MovieListComponent } from './feature/movie/movie-list/movie-list.component';


const routes: Routes = [
 { path: '', redirectTo: 'movie-list', pathMatch: 'full'},
 { path: 'movie-list', component: MovieListComponent },
 { path: 'movie-create', component: MovieCreateComponent },
 { path: 'actor-list', component: ActorListComponent },
 { path: 'actor-create', component: ActorCreateComponent },
 { path: '**', component: NoComponentDefinedComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
