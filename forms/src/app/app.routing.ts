import { Routes, RouterModule} from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { AuthorViewAllComponent } from './components/author/author.view.all.component';

const appRoutes: Routes = [
    { path: '', component: ReactiveFormComponent},
    { path: 'authors', component: AuthorViewAllComponent }
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);