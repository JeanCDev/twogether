import {
  Auth,
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  browserSessionPersistence,
  createUserWithEmailAndPassword,
  User,
  setPersistence
} from "firebase/auth";

export default class Authenticator {
  private auth: Auth;
  private provider: GoogleAuthProvider;

  constructor() {
    this.auth = getAuth();
    this.provider = new GoogleAuthProvider();
  }

  async createUser(email: string, password: string) {
    setPersistence(this.auth, browserSessionPersistence).then(() => {
      createUserWithEmailAndPassword(this.auth, email, password)
        .then((/* userCredential */) => {
          //const user = userCredential.user;
        })
        .catch((/* error */) => {
          /* const errorCode = error.code;
          const errorMessage = error.message; */
        });
    });
  }

  validateLogin(callBack : (user: User|null) => void) {
    try {
      this.auth.onAuthStateChanged((user: User | null) => {
        callBack(user);
      });
    } catch(err) {
      console.log(err);
    }
  }

  loginWithGoogle(): Promise<null | User> {
    return setPersistence(this.auth, browserSessionPersistence).then(() => signInWithPopup(this.auth, this.provider)
      .then((result) => {
        //const credential = GoogleAuthProvider.credentialFromResult(result);
        //const token = credential?.accessToken;
        const user = result.user;

        return user;
      }).catch((/* error */) => {
        /* const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error); */

        return null;
      }));
  }
}