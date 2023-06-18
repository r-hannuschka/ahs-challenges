import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '@api/users';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class UserService {

  constructor(private readonly httpClient: HttpClient) { }

  fetchUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>('/api/users')
  }
}
