import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DynamicFormComponent } from './components/shared/dynamic-form/dynamic-form.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ModalComponent } from './components/modal/modal.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { WrapperComponent } from './components/shared/ui/wrapper/wrapper.component';

@NgModule({
  declarations: [
    AppComponent,
    DynamicFormComponent,
    NavigationComponent,
    SidebarComponent,
    ModalComponent,
    NavbarComponent,
    WrapperComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
