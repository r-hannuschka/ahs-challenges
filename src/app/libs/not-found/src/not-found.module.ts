import { APP_INITIALIZER, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { notFoundAppInitializer } from './app-initializer';
import { Router } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [ CommonModule ],
  exports: [],
  providers: [{
    provide: APP_INITIALIZER,
    useFactory: (router: Router) => () => notFoundAppInitializer(router),
    deps: [Router],
    multi: true
  }],
})
export class PageNotFoundModule {}
