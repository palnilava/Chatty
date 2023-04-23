
import React from 'react'
import { GoogleOutlined,FacebookFilled } from "@ant-design/icons";
// import { signInWithGoogle,signInWithFacebook } from "../firebase";
import {auth} from '../firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
// import { Typewriter } from 'react-simple-typewriter';
const googleProvider = new firebase.auth.GoogleAuthProvider();
const FacebookProvider = new firebase.auth.FacebookAuthProvider();
export default function  Login() {
  return (
    // <div id="login-page">
    //     <div id="login-card">
    //        <h2> Welcome to Chatty</h2>

    //         <div className='login-button google'
    //         onClick={()=> auth.signInWithPopup(googleProvider)}>
    //             <GoogleOutlined/> Sign in with Google
    //         </div>
    //         <br/> <br/>

    //         <div className='login-button facebook'
    //          onClick={()=> auth.signInWithPopup(FacebookProvider)}>
    //             <FacebookOutlined/> Sign in with FB
    //         </div>
    //     </div>
    // </div>

    <div  id="login-page">
      <div className="screen">
      <div className="screen__content">
        {/* <h2 className='login_header'> Welcome to Chatty</h2> */}
        <div className='login_header'>
        {/* <span style={{fontWeight: '500',fontSize: "31px", textAlign: 'center', marginBottom: '1px', color: '#5e55a4',fontFamily: "'Poppins', sans-serif" }}>
        <Typewriter 
             words= {['Welcome to ', 'Chat with ']}
            loop={0}
            cursor
            cursorStyle='|'
            typeSpeed={30}
            deleteSpeed={50}
            delaySpeed={250}
          />
          </span>  */}
          <h2>Welcome to Chatty</h2>
          </div>
        <div className='login-button google'
        onClick={()=> auth.signInWithPopup(googleProvider)}>
            <GoogleOutlined/> Sign in with Google
        </div>
        <br/> <br/>

        <div className='login-button facebook'
         onClick={()=> auth.signInWithPopup(FacebookProvider)}>
            <FacebookFilled /> Sign in with FB
        </div>

  <div className="screen__background">
    <span className="screen__background__shape screen__background__shape4"></span>
    <span className="screen__background__shape screen__background__shape3"></span>
    <span className="screen__background__shape screen__background__shape2"></span>
    <span className="screen__background__shape screen__background__shape1"></span>
  </div>
</div>
</div>
</div>
  );
}




