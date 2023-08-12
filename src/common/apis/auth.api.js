import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from "../../fireBase";

export const singupAPI = (values) => {
    console.log(values);
    return new Promise((resolve, reject) => {

        createUserWithEmailAndPassword(auth, values.email, values.phone)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
                onAuthStateChanged(auth, (user) => {
                    sendEmailVerification(auth.currentUser)
                        .then(() => {
                            resolve({ massege: "Email verification sent!", user });

                            // ...
                        })
                        .catch((error) => {
                            const errorCode = error.code;
                            reject(errorCode);


                        });
                })
            })
            .catch((error) => {
                const errorCode = error.code;

                // ..

                console.log(errorCode);
                if (errorCode.localeCompare("auth/email-already-in-use") === 0) {
                    reject({massege:'already useing email'});
                } else if (errorCode.localeCompare("auth/network-request-failed") === 0) {
                    reject({massege:"please check your internet connection."});
                } else if (errorCode.localeCompare("auth/weak-password") === 0) {
                    reject({massege:"Your password is weak"})
                }
            });
    })
}

export const loginAPI = (values) => {
    return new Promise((resolve, reject) => {
        signInWithEmailAndPassword(auth, values.email, values.phone)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                if (user.emailVerified) {
                    resolve({ massege: 'login sucsecfuly' , user: user});
                    // localStorage.setItem("loginstatus", 'true');
                    // navigate('/')
                } else {
                    resolve({ massege: 'your email is not verification' });
                }
            })
            .catch((error) => {
                const errorCode = error.code;
                console.log(errorCode, '5555');

                if (errorCode.localeCompare("auth/wrong-password") === 0) {
                    reject({massege:"wrong password"})
                }
            });
    })
}

export const forgotAPI = (values) => {
    console.log(values);

    return new Promise((resolve, reject) => {
        sendPasswordResetEmail(auth, values.email)
            .then(() => {
                // Password reset email sent!
                // ..
                resolve({ massege: 'send email' });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
                if (errorCode.localeCompare("auth/user-not-found") === 0) {
                    reject({massege:"Not your account "})
                }
            });
    })


}

export const logoutAPI = (values) => {
    signOut(auth).then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      });
}