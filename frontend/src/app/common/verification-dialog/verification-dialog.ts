import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-verification-dialog',
  imports: [MatButtonModule, MatDialogModule],
  templateUrl: './verification-dialog.html',
  styleUrl: './verification-dialog.css'
})
export class VerificationDialog {

}
