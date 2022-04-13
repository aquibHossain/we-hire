import { useEffect, useState } from "react";
import initializeFirebase from "../Firebase/Firebase.init"
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,onAuthStateChanged, getIdToken } from "firebase/auth";
import { GoogleAuthProvider,signInWithPopup,updateProfile } from "firebase/auth";


initializeFirebase();

const useFirebase=()=>{
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
   const [user,setUser]=useState({})
   const [error,setError]=useState('')
   const [isLoading,setIsLoading]=useState(true)
   const [admin,setAdmin]=useState(false)
    const [token,setToken]=useState('')

    const signInUser=(email,password,location,history)=>{
      setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const destination=location?.state?.from || "/";
    history.replace(destination)
    setError('')
  })
  .catch((error) => {
    setError(error.message);
  }).finally(()=>setIsLoading(false));
    }

    const signInGoogle=(location,history)=>{
        signInWithPopup(auth, provider)
        .then((result) => {
          const user=result.user
          saveUser(user.email,user.displayName,'PUT')
          const destination=location?.state?.from || "/";
              history.replace(destination)
              setError('')
        }).catch((error) => {
            setError(error.message);
          
        });
    }

    const signInFacebook=()=>{

    }

    const signUpUser=(email,password,name,history)=>{
      setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          setError('')
    const newUser={email,displayName:name}
    setUser(newUser)
    saveUser(email,name,'POST')
    updateProfile(auth.currentUser, {
        displayName: name
      }).then(() => { 
      }).catch((error) => {
      });
    history.replace('/')
        })
        .catch((error) => {
         setError(error.message);
        }).finally(()=>setIsLoading(false));
    }

    const logOutUser=()=>{
      setIsLoading(true)
        signOut(auth).then(() => {
            setUser({})
          }).catch((error) => {
            setError(error.message);
          }).finally(()=>setIsLoading(false));
    }

    const saveUser=(email,displayName,method)=>{
      const user={email,displayName}
      fetch('http://localhost:5000/users',{
        method:method,
        headers:{
          "content-type":'application/json'
        },
        body:JSON.stringify(user)
      })
      .then(res=>res.json())
      .then(data=>console.log(data))
   }

    useEffect(()=>{
       const unsubscribe= onAuthStateChanged(auth, (user) => {
            if (user) {
             setUser(user)
             getIdToken(user).then(idToken=>setToken(idToken))
            } else {
              setUser({})
              
            }
            setIsLoading(false)
          });
          return ()=>unsubscribe
    },[auth])

    useEffect(()=>{
      fetch(`http://localhost:5000/users/${user.email}`)
      .then(res=>res.json())
      .then(data=>{setAdmin(data.admin)
      console.log("admin",data.admin)})
      
    },[user.email])
   return{
           user,
           signInUser,
           signInGoogle,
           signInFacebook,
           signUpUser,
           logOutUser,
           error,
           isLoading,
           token,
          admin  
         }
}
export default useFirebase