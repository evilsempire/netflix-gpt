import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { auth } from '../utils/firebase';
import { addUser, removeUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';
import { NETFLIX_LOGO } from '../utils/constants';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(state => state.user);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(addUser({ id: user.uid, email: user.email, displayName: user.displayName, photoURL: user.photoURL}))
        navigate('/browse');
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, []);

  const signOutUser = () => {
    signOut(auth).then(() => {
    }).catch((error) => {
      // An error happened.
      navigate("/error");
    });
  }

  return (
    <div className='flex absolute w-full bg-gradient-to-b from-black z-10 justify-between'>
        <img 
            className='mx-10 pt-2 w-44'
            src={NETFLIX_LOGO}
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