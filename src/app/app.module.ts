import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { taskReducer } from './store/reducers/task.reducer';
import { TaskEffect } from './store/effects/task.effect';
import { SharedModule } from './shared/shared.module';
import { projectReducer } from './store/reducers/project.reducer';
import { ProjectEffects } from './store/effects/project.effect';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot( {
      tasks: taskReducer,
      projects: projectReducer
    } ),
    EffectsModule.forRoot( [ TaskEffect, ProjectEffects ] ),
    HttpClientModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
