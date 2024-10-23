import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent implements OnInit {
  constructor(private usersSerice: UsersService) {}
  public ngOnInit(): void {
    this.usersSerice.getUsers().subscribe((v) => console.log(v));
  }
}
