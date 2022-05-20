import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageContactoComponent } from './porPaginas/pages/page-contacto/page-contacto.component';
import { PageHomeComponent } from './porPaginas/pages/page-home/page-home.component';
import { PageQuienesSomosComponent } from './porPaginas/pages/page-quienes-somos/page-quienes-somos.component';

const routes: Routes = [

    {
        path: '',
        component: PageHomeComponent

    },
    {
        path: 'contacto',
        component: PageContactoComponent
    },
    {
        path: 'quienes-somos',
        component: PageQuienesSomosComponent
    },
    {
        path: '**',
        redirectTo: ''
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
