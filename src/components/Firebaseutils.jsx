// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword,onAuthStateChanged,signInWithEmailAndPassword, signOut,
    signInWithPopup, GoogleAuthProvider

} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBz9oiRT9VisWTBy55RqFJFfKxngnIdFTQ",
  authDomain: "learning-firebase-1399c.firebaseapp.com",
  projectId: "learning-firebase-1399c",
  storageBucket: "learning-firebase-1399c.appspot.com",
  messagingSenderId: "953789895272",
  appId: "1:953789895272:web:2643f6fdeb18dbd59561dd",
  measurementId: "G-80V7TN7CTF"
};

// Initialize Firebase
const myApp = initializeApp(firebaseConfig);
export const auth = getAuth(myApp);

export const signUp = (email,password)=>{
    createUserWithEmailAndPassword(auth, email, password)
  .then(async (userCredential) => {
    // Signed up 
    // console.log({userCredential});
    const user = userCredential.user;
    // console.log({user});

    const token = await user.getIdToken()
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

    console.log({errorCode,errorMessage});
    // ..
  });
}


export const logIn = (email,password)=>{
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
}

export const logWithGoogle = ()=>{
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
    .then(async (result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const googleToken = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
    const firebaseToken = await  user.getIdToken()
      // IdP data available using getAdditionalUserInfo(result)
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
}

export const logOut = ()=>{
    signOut(auth).then(() => {
        // Sign-out successful.
    
      }).catch((error) => {
        // An error happened.
        console.log(error);
      });
}


onAuthStateChanged(auth, async (user) => {
    console.log("Auth state changed");
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;
      console.log({uid});
      console.log({user});
      const token = await user.getIdToken();
      // ...
    } else {
      // User is signed out
      // ...
      console.log("Sign-out successful");
    }
  });
// const analytics = getAnalytics(app);









// Import the functions you need from the SDKs you need


// function App() {

//   const [email, setEmail] = useState("")


//   return (
//     <>
//    <div>Sign Up</div>
//    <input className="input" type="text"onChange={(e)=>{setEmail(e.target.value)}}  placeholder="email" />
//    <input className="input" type="text" placeholder="password" />
//    <button className="btn" onClick={()=>signUp(email, "password")}> Sign Up Email Password</button>
//    <button className="btn" onClick={()=>logIn(email, "password")}> Sign In with Email Password</button>
//    <button className="btn" onClick={()=>logWithGoogle()}> SignIn With Google</button>
//    <button className="btn" onClick={()=>logOut()}> Sign Out</button>
       
//     </>
//   )
// }

// export default App

