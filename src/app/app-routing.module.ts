import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FullComponent } from './layouts/full/full.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { NoticeComponent } from './notice/notice.component';
import { VacancyComponent } from './vacancy/vacancy.component';
import { GkComponent } from './gk/gk.component';
import { GkContentComponent } from './gk-content/gk-content.component';
import { NewsDetailComponent } from './news/news-detail/news-detail.component';
import { UpdateNewsComponent } from './news/update-news/update-news.component';
import { InsertNewsComponent } from './news/insert-news/insert-news.component';
import { NoticeDetailComponent } from './notice/notice-detail/notice-detail.component';
import { UpdateNoticeComponent } from './notice/update-notice/update-notice.component';
import { InsertNoticeComponent } from './notice/insert-notice/insert-notice.component';
import { AuthGuard } from './services/auth.guard';
import { LoginComponent } from './login/login.component';

export const Approutes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'starter',
        loadChildren: './starter/starter.module#StarterModule'
      },
      { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
      { path: 'login', component: LoginComponent},
      { path: 'news', component: NewsComponent , canActivate: [AuthGuard] },
      { path: 'news/detail/:id', component: NewsDetailComponent, canActivate: [AuthGuard] },
      { path: 'news/edit/:id', component: UpdateNewsComponent, canActivate: [AuthGuard] },
      { path: 'news/insert', component: InsertNewsComponent, canActivate: [AuthGuard] },
      { path: 'notice', component: NoticeComponent, canActivate: [AuthGuard] },
      { path: 'notice/detail/:id', component: NoticeDetailComponent, canActivate: [AuthGuard] },
      { path: 'notice/update/:id', component: UpdateNoticeComponent, canActivate: [AuthGuard] },
      { path: 'notice/insert', component: InsertNoticeComponent, canActivate: [AuthGuard] },
      { path: 'vacancy', component: VacancyComponent, canActivate: [AuthGuard] },
      { path: 'gk', component: GkComponent, canActivate: [AuthGuard] },
      { path: 'content', component: GkContentComponent, canActivate: [AuthGuard] },
      {
        path: 'component',
        loadChildren: './component/component.module#ComponentsModule',
        canActivate: [AuthGuard]
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/starter',
    canActivate: [AuthGuard]
  }
];
