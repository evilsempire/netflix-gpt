import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { auth } from '../utils/firebase';
import { addUser, removeUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';
import { LANGUAGES, NETFLIX_LOGO } from '../utils/constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSearch } from '@fortawesome/free-solid-svg-icons';
import { toggleSearchPageView } from '../utils/gptSearchSlice';
import { setLanguage } from '../utils/configSlice';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(state => state.user);
  const showSearchPageView = useSelector(state => state.search.showSearchPageView);

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

  const toggleSearchPage = () => {
    dispatch(toggleSearchPageView())
  }

  const changeLanguageConfig = (e) => {
    dispatch(setLanguage(e.target.value))
  }

  return (
    <div className='flex absolute w-full bg-gradient-to-b from-black z-10 justify-between'>
        <img 
            className='mx-10 pt-2 w-44'
            src={NETFLIX_LOGO}
            alt='logo'
        />

        {user && <div className='flex p-2'>
          <select className='h-6 mt-5 py' onChange={e => changeLanguageConfig(e)}>
          {LANGUAGES.map(({key, value}) => <option key={key} value={key}>{value}</option>)}
          </select>
          <button onClick={toggleSearchPage} className='text-white px-2 font-bold'><FontAwesomeIcon icon={showSearchPageView? faHome :faSearch} className='mr-2 text-2xl'/></button>
          <img className='w-12 h-12 mt-2 rounded-full' src={user.photoURL} alt='avatar'/>
          <button className='text-white font-bold p-2' onClick={signOutUser}>Sign out</button>
        </div>}
    </div>
  )
}

export default Header