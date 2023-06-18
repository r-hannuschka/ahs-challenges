import { Component, Signal  } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { UserService } from './user.service';
import { User } from '@api/users';

@Component({
  selector: 'app-users-list',
  templateUrl: 'list.html',
  standalone: true,
  imports: [CommonModule]
})
export class UsersListComponent {

  users: Signal<User[] | undefined>

  constructor(
    private readonly userService: UserService
  ) {
    this.users = toSignal(this.userService.fetchUsers())
  }
}
