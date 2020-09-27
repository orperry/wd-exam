import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DOCUMENT} from '@angular/common';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(@Inject(DOCUMENT) public readonly doc: any, // browser document object (for reading cookie)
              public readonly http: HttpClient) { // HTTP client
  }

  isLoggedIn(): boolean {
    // is cookie set and equals to "login=1"
    return (this.doc.cookie.includes('login=1'));
  }

  login(email: string, password: string): void {
    console.log('send /login request to server with email and password as payload');
    this.http.post('/api/login', {email, password} as any).subscribe((res: any) => {
      console.log('response from server', res);
      if (!res.login) {
        window.alert('Unable to login');
      }
    });
  }

  logout(): void {
    // delete cookie (set expiration to the past)
    this.doc.cookie = 'login=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
  }

  getUsers(filter: string = ''): Observable<any> {
    console.log('fetch list of users with filter:', filter);
    const url = '/api/users?filter=' + filter;
    return this.http.get(url);
  }
}
