import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MatMenuModule } from '@angular/material/menu';



@NgModule( {
  declarations: [
    NavbarComponent,
    ToolbarComponent
  ],
  exports: [
    NavbarComponent,
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatMenuModule
  ]
})
export class LayoutsModule { }
