import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { LayoutsModule } from './layouts/layouts.module';
import { authReducer, projectReducer, taskReducer } from './store/reducers';
import { AuthEffect, ProjectEffect, TaskEffect } from './store/effects';
import { ApiInterceptor } from './shared/interceptors/api.interceptor';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { TaskService } from './pages/tasks/services/task.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { AuthService } from './services';
import { SharedModule } from './shared/shared.module';
import { MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';

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
      ProjectEffect,
      AuthEffect
    ] ),
    HttpClientModule,
    LayoutsModule,
    AngularFireModule.initializeApp(environment.firebase),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    SharedModule,
    MatNativeDateModule
  ],
  providers: [
    AuthService,
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' }
  ],
  bootstrap: [ AppComponent ]
} )
export class AppModule {
}
