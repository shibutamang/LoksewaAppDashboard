import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import {NgxPaginationModule} from 'ngx-pagination';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';

import { FullComponent } from './layouts/full/full.component';

import { NavigationComponent } from './shared/header-navigation/navigation.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { BreadcrumbComponent } from './shared/breadcrumb/breadcrumb.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

import { Approutes } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './services/auth.guard';
import { SpinnerComponent } from './shared/spinner.component';
import { HomeComponent } from './home/home.component';
import { GkComponent } from './gk/gk.component';
import { GkContentComponent } from './gk-content/gk-content.component';
import { LoginComponent } from './login/login.component';
import { NewsComponent } from './news/news.component';
import { NewsDetailComponent } from './news/news-detail/news-detail.component';
import { InsertNewsComponent } from './news/insert-news/insert-news.component';
import { UpdateNewsComponent } from './news/update-news/update-news.component';
import { NoticeComponent } from './notice/notice.component';
import { InsertNoticeComponent } from './notice/insert-notice/insert-notice.component';
import { UpdateNoticeComponent } from './notice/update-notice/update-notice.component';
import { NoticeDetailComponent } from './notice/notice-detail/notice-detail.component';
import { VacancyComponent } from './vacancy/vacancy.component';
import { UpdateVacancyComponent } from './vacancy/update-vacancy/update-vacancy.component';
import { InsertVacancyComponent } from './vacancy/insert-vacancy/insert-vacancy.component';
import { environment } from '../environments/environment';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  wheelSpeed: 2,
  wheelPropagation: true
};

@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent,
    FullComponent,
    NavigationComponent,
    BreadcrumbComponent,
    SidebarComponent,
    HomeComponent,
    GkComponent,
    GkContentComponent,
    LoginComponent,
    NewsComponent,
    NewsDetailComponent,
    InsertNewsComponent,
    UpdateNewsComponent,
    NoticeComponent,
    InsertNoticeComponent,
    UpdateNoticeComponent,
    NoticeDetailComponent,
    VacancyComponent,
    UpdateVacancyComponent,
    InsertVacancyComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(Approutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    PerfectScrollbarModule,
    ToastrModule.forRoot(),
    NgxPaginationModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    },
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
