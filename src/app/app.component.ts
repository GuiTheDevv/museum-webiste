import { Component } from '@angular/core';
import { Firestore, setDoc, doc } from '@angular/fire/firestore';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'My Angular App';

  constructor(
    private firestore: Firestore,
    private snackBar: MatSnackBar 
  ) {}

  addEmails(email: string) {
    const ref = doc(this.firestore, 'emails', email);
    const emailData = { email: email };
    return setDoc(ref, emailData)
      .then(() => {
        this.snackBar.open('Thank You! Email added successfully', '', {
          duration: 3000, 
        });
      })
      .catch((error) => {
        console.error('Error adding email:', error);
      });
  }
}
