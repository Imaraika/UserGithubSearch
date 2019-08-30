import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SearchFormComponent } from './search-form/search-form.component';
import {RepositoriesComponent} from './repositories/repositories.component';


const routes: Routes = [
    {path: 'users', component: SearchFormComponent},
    {path: 'repository', component: RepositoriesComponent},
    {path: '', redirectTo: '/users', pathMatch: 'full'},



];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class RoutingModule { }