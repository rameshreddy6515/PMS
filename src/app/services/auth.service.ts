import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  userInfo: BehaviorSubject<string> = new BehaviorSubject('test@test.com');

  login(email: string, password: string): boolean {
    ///  Conectiviti from backends is needed
    // Pending
    this.userInfo.next(email); // Alert
    return true;
  }

  signup(email: string, password: string) {
    // pending

    return true;
  }

  logout() {
    // Backend communication

    this.userInfo.next('');
    return true;
  }
}
