import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'main', component: AppComponent },
];


@NgModule({
    imports: [
        AppComponent,
        LoginComponent
    ],
    declarations: []
})
export class AppRoutingModule { }