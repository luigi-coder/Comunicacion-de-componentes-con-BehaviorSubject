import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { PageContactoComponent } from './pages/page-contacto/page-contacto.component';
import { PageQuienesSomosComponent } from './pages/page-quienes-somos/page-quienes-somos.component';
import { ColorService } from './services/color.service';



@NgModule({
  declarations: [
    PageHomeComponent,
    PageContactoComponent,
    PageQuienesSomosComponent
  ],
  exports: [
    PageHomeComponent,
    PageContactoComponent,
    PageQuienesSomosComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    ColorService
  ]
})
export class PorPaginasModule { }
