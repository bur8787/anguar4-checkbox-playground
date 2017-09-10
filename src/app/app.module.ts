import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms'

import { AppComponent } from './app.component';

import { ModalModule } from 'ngx-modialog';
import { BootstrapModalModule } from 'ngx-modialog/plugins/bootstrap';

import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { ModalTestComponent } from './modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalTestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ModalModule.forRoot(),
    ButtonsModule.forRoot(),
    BootstrapModalModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[ModalTestComponent]
})
export class AppModule { }
