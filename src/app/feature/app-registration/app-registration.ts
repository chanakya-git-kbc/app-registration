import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { RegistrationService } from '../../services/registration-service';
import { HttpClient } from '@angular/common/http';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { VerificationDialog } from '../../common/verification-dialog/verification-dialog';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatDialogModule
  ],
  templateUrl: './app-registration.html',
  styleUrl: './app-registration.css'
})
export class AppRegistration {
  constructor(private fb: FormBuilder,
    private registrationService: RegistrationService,
    private http: HttpClient,
    private dialog: MatDialog,
    private router: Router) {
    this.formRegisterFields();
    this.http.get<Country[]>('countries.json').subscribe(data => {
      this.countries = data;
    });
  }

  registrationForm!: FormGroup;
  selectedCountry: string = '';
  selectedState: string = '';
  countries: Country[] = [];

  get states(): State[] {
    const country = this.countries.find(c => c.code === this.selectedCountry);
    return country ? country.states : [];
  }

  private formRegisterFields() {
    this.registrationForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      dob: ['', Validators.required],
      address1: ['', Validators.required],
      address2: [''],
      city: ['', Validators.required],
      state: ['', Validators.required],
      country: ['', Validators.required],
      zip: ['', [Validators.required, Validators.pattern(/^[0-9]{5}$/)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, { validators: this.passwordMatchValidator });
  }

  passwordMatchValidator(control: AbstractControl) {
    const pass = control.get('password')?.value;
    const confirm = control.get('confirmPassword')?.value;
    return pass === confirm ? null : { mismatch: true };
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      this.registrationService.registerUser(this.registrationForm.value).subscribe(() => {
        const dialogRef = this.dialog.open(VerificationDialog);

        dialogRef.afterClosed().subscribe(() => {
          this.router.navigate(['/login']);
        });
      });
    }
  }
}
