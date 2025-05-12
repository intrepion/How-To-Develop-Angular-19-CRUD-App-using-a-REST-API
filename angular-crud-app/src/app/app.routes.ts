import { Routes } from '@angular/router';
import { IndexComponent } from './project/index/index.component';
import { ShowComponent } from './project/show/show.component';
import { CreateComponent } from './project/create/create.component';
import { EditComponent } from './project/edit/edit.component';
 
export const routes: Routes = [
    { path: '', redirectTo: 'project/index', pathMatch: 'full'},
    { path: 'project', redirectTo: 'project/index', pathMatch: 'full'},
    { path: 'project/index', component: IndexComponent },
    { path: 'project/:id/show', component: ShowComponent },
    { path: 'project/create', component: CreateComponent },
    { path: 'project/:id/edit', component: EditComponent } 
];
