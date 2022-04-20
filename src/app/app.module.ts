import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { LayoutsModule } from './layouts/layouts.module';
import { authReducer, projectReducer, taskReducer, userReducer } from './store/reducers';

@NgModule( {
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot( {
      tasks: taskReducer,
      projects: projectReducer,
      auth: authReducer,
      user: userReducer
    } ),
    EffectsModule.forRoot( [] ),
    HttpClientModule,
    LayoutsModule,
  ],
  providers: [],
  bootstrap: [ AppComponent ]
} )
export class AppModule {
}
