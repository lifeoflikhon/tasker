import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import * as auth from 'firebase/auth';
import { User } from '../models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData: any;

  constructor(
    private afs: AngularFirestore,
    private afAuth: AngularFireAuth,
    private router: Router,
    private ngZone: NgZone
  ) {
    // this.afAuth.authState.subscribe(user => {
    //   if (user) {
    //     this.userData = user;
    //     localStorage.setItem('user', JSON.stringify(this.userData));
    //     JSON.parse(localStorage.getItem('user'));
    //   } else {
    //     localStorage.setItem('user', null);
    //     JSON.parse(localStorage.getItem('user'));
    //   }
    // });
  }

  async signIn( email: string, password: string ) {
    try {
      let result = await this.afAuth.signInWithEmailAndPassword( email, password );
      this.ngZone.run( () => {
        this.router.navigate( [ 'dashboard' ] );
      } );
      this.setUserData( result.user );
      return result.user;
    } catch ( error ) {
      window.alert( error.message );
      return null;
    }
  }

  async signUp( email: string, password: string ) {
    try {
      let result = await this.afAuth.createUserWithEmailAndPassword( email, password );
      this.sendVerificationMail();
      this.setUserData( result.user );
    } catch ( error ) {
      window.alert( error.message );
    }
  }

  async sendVerificationMail() {
    let u = await this.afAuth.currentUser;
    await u.sendEmailVerification();
    this.router.navigate( [ 'verify-email-address' ] );
  }

  async forgotPassword( passwordResetEmail: string ) {
    try {
      await this.afAuth
        .sendPasswordResetEmail( passwordResetEmail );
      window.alert( 'Password reset email sent, check your inbox.' );
    } catch ( error ) {
      window.alert( error );
    }
  }

  googleAuth() {
    return this.authLogin(new auth.GoogleAuthProvider()).then((res: any) => {
      if (res) {
        this.router.navigate(['dashboard']);
      }
    });
  }

  async authLogin( provider: any ) {
    try {
      let result = await this.afAuth.signInWithPopup( provider );
      this.ngZone.run( () => {
        this.router.navigate( [ 'dashboard' ] );
      } );
      this.setUserData( result.user );
    } catch ( error ) {
      window.alert( error );
    }
  }

  setUserData(user) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified
    };
    return userRef.set(userData, {
      merge: true
    });
  }

  async signOut() {
    await this.afAuth.signOut();
    localStorage.removeItem( 'user' );
    this.router.navigate( [ 'sign-in' ] );
  }
}
