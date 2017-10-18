import { ProductService } from './products/product.service';
import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template: `
    <div>
      <h1>{{pageTitle}}</h1>
      <pm-products></pm-products>
    </div>
  `,
  providers: [ ProductService ]
})
export class AppComponent {
  pageTitle = 'Acme Product Management';
}
