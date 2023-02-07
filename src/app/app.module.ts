import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostModule } from './post/post.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, PostModule,
    AppRoutingModule, FormsModule, ReactiveFormsModule, HttpClientModule, CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
