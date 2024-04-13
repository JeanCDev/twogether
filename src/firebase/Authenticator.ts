import {
  Auth,
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  User
} from "firebase/auth";

export default class Authenticator {
  private auth: Auth;
  private provider: GoogleAuthProvider;

  constructor(){
    this.auth = getAuth();
    this.provider = new GoogleAuthProvider();
  }

  createUser(email: string, password: string) {
    createUserWithEmailAndPassword(this.auth, email, password)
      .then((/* userCredential */) => {
        //const user = userCredential.user;
      })
      .catch((/* error */) => {
        /* const errorCode = error.code;
        const errorMessage = error.message; */
      });
  }

  loginWithGoogle(): Promise<null | User> {
    return signInWithPopup(this.auth, this.provider)
      .then((result) => {
        //const credential = GoogleAuthProvider.credentialFromResult(result);
        //const token = credential?.accessToken;
        const user = result.user;

        localStorage.setItem('userData', JSON.stringify(user));

        return user;
      }).catch((/* error */) => {
        /* const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error); */

        return null;
      });
  }
}