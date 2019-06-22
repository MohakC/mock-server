import { NgModule } from '@angular/core';

import * as component from './';

const ngModules = [

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
