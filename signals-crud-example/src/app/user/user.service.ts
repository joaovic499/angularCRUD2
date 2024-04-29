import { HttpClient } from '@angular/common/http';
import { Injectable} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { User } from '../../user/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}

  public userUrl = 'http://localhost:3000/users';

  private users$ = this.http.get<User[]>(this.userUrl);

  public users = toSignal(this.users$, { initialValue: [] as User[] });
}
