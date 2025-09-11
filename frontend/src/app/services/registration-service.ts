import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  private filePath = 'assets/users.json'; // mock storage for now

  constructor(private http: HttpClient) { }

  registerUser(user: any): Observable<any> {
    console.log('Saving user registration information:', user);
    return of({ success: true, user });
  }
}
