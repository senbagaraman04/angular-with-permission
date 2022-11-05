import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPermissionsGuard, NgxPermissionsModule } from 'ngx-permissions';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
    {
        path: '',
        canActivate: [AuthGuard],
        children:[
            {
                path:'about', component: AboutComponent, canActivate:  [NgxPermissionsGuard],
                data:{
                    permissions: {
                        only: ['DEVELOPER']
                    }
                }
            },
            {
                path:'home', component:HomeComponent
            }
        ]
    }
]
@NgModule({
  declarations: [
  
  ],
  imports: [
   RouterModule.forRoot(routes)
  ],
  providers: [],
   exports:[RouterModule]
})
export class AppRoutingModule { }