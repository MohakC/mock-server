import { NgModule } from '@angular/core';

import * as ngMaterial from '@angular/material';
import * as component from './';

const ngModules = [
  ngMaterial.MatToolbarModule
];

const ALL_COMPONENTS = [
  component.HeaderComponent
];

@NgModule({
  declarations: [
    ALL_COMPONENTS
  ],
  imports: [
    ngModules
  ],
  exports: [
    ALL_COMPONENTS,
    ngModules
  ]
})

export class ComponentsModule {
}
