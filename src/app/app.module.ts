import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPermissionsModule, NgxPermissionsService } from 'ngx-permissions';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { LoadPermissionService } from './load-permission.service';
export function permissionsFactory(loadpService: LoadPermissionService, ngxPermissionService: NgxPermissionsService){
  return () =>{
    return loadpService.loadPermission().then((data)=>{
      ngxPermissionService.loadPermissions(data);
      return true;
    })
  }
}


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,AppRoutingModule,
HttpClientModule,    NgxPermissionsModule.forRoot()
  ],
  providers: [{
    provide: APP_INITIALIZER,
  useFactory: permissionsFactory,
    deps:[LoadPermissionService, NgxPermissionsService],
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
