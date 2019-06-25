import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as ngMaterial from '@angular/material';
import * as component from './';

const ngModules = [
  ngMaterial.MatToolbarModule,
  ngMaterial.MatCardModule
];

const ALL_COMPONENTS = [
  component.HeaderComponent,
  component.HttpListComponent,
  component.BodyComponent
];

@NgModule({
  declarations: [
    ALL_COMPONENTS
  ],
  imports: [
    ngModules,
    CommonModule
  ],
  exports: [
    ALL_COMPONENTS,
    ngModules
  ]
})

export class ComponentsModule {
}
