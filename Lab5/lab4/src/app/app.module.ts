import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';

import { ProductAlertsComponent } from './product-alerts/product-alerts.component';

import { ProductListComponent } from './product-list/product-list.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ViewCategoriesComponent } from './view-categories/view-categories.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule, HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
    RouterModule.forRoot([
      {path: '', component: ProductListComponent},
      {path: 'categories/:categoryId', component: ProductListComponent},

    ]),
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ViewCategoriesComponent,


  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
