import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
<<<<<<< HEAD
import { AddTaskComponent } from './components/add-task/add-task.component';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/footer/footer.component';

const appRoutes: Routes = [
  { path: '', component: TasksComponent },
  { path: 'about', component: AboutComponent },
];
=======
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
>>>>>>> ecdb19a03251e23d960e6e066a08bf2c0580c5e4

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    TasksComponent,
<<<<<<< HEAD
    TaskItemComponent,
    AddTaskComponent,
    AboutComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
=======
    TaskItemComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
>>>>>>> ecdb19a03251e23d960e6e066a08bf2c0580c5e4
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}