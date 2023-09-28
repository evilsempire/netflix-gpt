import React from 'react'
import GPTSearchBar from './GPTSearchBar'
import GPTMovieSuggessions from './GPTMovieSuggessions'
import {NETFLIX_BACKGROUND} from "../utils/constants";

const GPTSearchPage = () => {
  return (
    <div>
      <div className="fixed -z-10">
        <img
          src={NETFLIX_BACKGROUND}
          alt="netflix-background"
        />
      </div>
      <GPTSearchBar />
      <GPTMovieSuggessions />
    </div>
  )
}

export default GPTSearchPage