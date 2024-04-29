import { HttpClient } from '@angular/common/http'
import { Injectable, inject } from '@angular/core';
import { User } from '../../user/user.model';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public http = inject(HttpClient);

  public userURL = 'http://localhost:3000/users';

  private user$ = this.http.get<User[]>(this.userURL);

  public users = toSignal(this.user$, { initialValue: [] as User [] })

  constructor() { }
}
