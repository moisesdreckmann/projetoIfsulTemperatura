import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAi7GQIIyPsthD8Ky0GrCsaXoZFtHxXgcc",
    authDomain: "monitordetemperatura-af862.firebaseapp.com",
    databaseURL: "https://monitordetemperatura-af862-default-rtdb.firebaseio.com",
    projectId: "monitordetemperatura-af862",
    storageBucket: "monitordetemperatura-af862.appspot.com",
    messagingSenderId: "654889534441",
    appId: "1:654889534441:web:f3120cb38b51321a0a8178"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;