import { signOut } from 'firebase/auth';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { auth } from '../utils/firebase';
import { removeUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(state => state.user);

  const signOutUser = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      dispatch(removeUser());
      navigate("/");
    }).catch((error) => {
      // An error happened.
      navigate("/error");
    });
  }

  return (
    <div className='flex absolute w-full bg-gradient-to-b from-black z-10 justify-between'>
        <img 
            className='mx-10 pt-2 w-44'
            src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
            alt='logo'
        />

        {user && <div className='flex p-2'>
          <img className='w-12 h-12 mt-2 ' src={user.photoURL} alt='avatar'/>
          <button className='text-white font-bold p-2' onClick={signOutUser}>Sign out</button>
        </div>}
    </div>
  )
}

export default Header