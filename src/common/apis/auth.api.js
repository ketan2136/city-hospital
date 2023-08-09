import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from "../../fireBase";

export const singupAPI = (values) => {
    console.log(values);
    return new Promise ((resolve, reject) => {
        
    })
    try {
        createUserWithEmailAndPassword(auth, values.email, values.phone)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
                onAuthStateChanged(auth, (user) => {
                    sendEmailVerification(auth.currentUser)
                        .then(() => {
                            // Email verification sent!

                            // ...
                        })
                        .catch((error) => {
                            const errorCode = error.code;
                            const errorMessage = error.message;
                            // ..

                        });
                })
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..

            });
    } catch (error) {
        console.log(error);
    }
}