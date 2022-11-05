import { Component, OnInit } from '@angular/core';
import { NgxPermissionsService } from 'ngx-permissions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor (private ngxPermissionService: NgxPermissionsService) {
    
  }
  ngOnInit(): void {
   this.ngxPermissionService.loadPermissions(['ADMIN']);
  }
  title = 'angularpermission';

  
}
