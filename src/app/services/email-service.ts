import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  sendEmailVerification(email: string): Observable<any> {
    console.log(`Sending verification email to ${email}`);
    return of({ success: true });
  }
}
