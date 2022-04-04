import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RepeatPipe } from './repeat.pipe';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { Languages, LanguageToken } from './languages';
import { LoggerService } from './services/logger.service';
import { HighlightDirective } from './highlight.directive';
import { FormsDemoComponent } from './forms-demo/forms-demo.component';
import { AuthWrapperComponent } from './auth-wrapper/auth-wrapper.component';
import { SecondComponent } from './second/second.component';
import { AppRoutingModule } from './app.routing.module';

@NgModule({
  declarations: [
    AppComponent,
    AuthWrapperComponent,
    RepeatPipe,
    HighlightDirective,
    FormsDemoComponent,
    SecondComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AuthModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [LoggerService, { provide: LanguageToken, useValue: Languages }],
  bootstrap: [AppComponent],
})
export class AppModule {}
