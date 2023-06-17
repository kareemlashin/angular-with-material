import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './core/Material.module';
import { NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module';
import { providers } from './core/providers/providers';
import { translateConfigModule } from './core/Translate.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    translateConfigModule,
    SharedModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [
    ...providers
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
