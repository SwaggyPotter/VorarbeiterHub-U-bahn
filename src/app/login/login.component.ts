import { Component } from '@angular/core';
import { getDatabase, ref, set } from "firebase/database";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { firebaseConfig } from '../firebaseConfig';
import { collection, doc, setDoc, getDoc } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { Router } from '@angular/router';

// Initialize Firebase
const app = initializeApp(firebaseConfig);



// Initialize Cloud Firestore and get a reference to the service


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(private router: Router) {
    this.loadData()
  }

  async loadData() {
    const db = getFirestore(app);
    const docRef = doc(db, "cities", "SF");
    const docSnap = await getDoc(docRef);
    console.log(docSnap)
  }

  onLoginButtonClick() {
    this.router.navigate(['/landingPage']);
  }
}
