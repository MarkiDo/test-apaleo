import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { UsersService } from './users.service';
import { provideHttpClient } from '@angular/common/http';


@NgModule({
  declarations: [UsersComponent],
  imports: [
    CommonModule,
    UsersRoutingModule
  ],
  providers: [
    UsersService,
    provideHttpClient()
  ]
})
export class UsersModule { }
