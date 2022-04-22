import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { LayoutsModule } from './layouts/layouts.module';
import { authReducer, projectReducer, taskReducer } from './store/reducers';
import { ProjectEffect, TaskEffect } from './store/effects';
import { ApiInterceptor } from './shared/interceptors/api.interceptor';

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
    } ),
    EffectsModule.forRoot( [
      TaskEffect,
      ProjectEffect
    ] ),
    HttpClientModule,
    LayoutsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptor,
      multi: true
    }
  ],
  bootstrap: [ AppComponent ]
} )
export class AppModule {
}
