import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/f85718e8-fc6d-4954-bca0-f5eaf78e0842/ea44b42b-ba19-4f35-ad27-45090e34a897/IN-en-20230918-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="netflix-background"
        />
      </div>

      <form className="absolute w-1/3 bg-black mx-auto my-44 left-0 right-0 bg-opacity-80 p-1 text-white m-4">
        <h1 className="font-bold text-4xl mx-12 my-10">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            name="Full Name"
            placeholder="Full Name"
            className="p-5 mx-12 mb-6 w-4/5 rounded-md bg-gray-600"
          />
        )}
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="p-5 mx-12 mb-6 w-4/5 rounded-md bg-gray-600"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="p-5 mx-12 mb-10  w-4/5 rounded-md bg-gray-600 "
        />
        <button className="bg-red-600 p-4 mx-12 w-4/5 font-bold rounded-md text-xl">
          Sign In
        </button>
        <p
          className="p-5 mx-12 my-10 cursor-pointer"
          onClick={toggleSignInForm}
        >
          {isSignInForm
            ? "New to Netflix? Sign up now."
            : "Already a Member? Sign in now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
