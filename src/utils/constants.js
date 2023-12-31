export const NETFLIX_BACKGROUND =
  "https://assets.nflxext.com/ffe/siteui/vlv3/f85718e8-fc6d-4954-bca0-f5eaf78e0842/ea44b42b-ba19-4f35-ad27-45090e34a897/IN-en-20230918-popsignuptwoweeks-perspective_alpha_website_medium.jpg";

export const NETFLIX_LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const AVATAR_API = "https://ui-avatars.com/api/?name=";

export const MOVIE_API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer " + process.env.REACT_APP_TMDB_API_KEY,
  },
};

export const TMDB_API = "https://api.themoviedb.org/3/movie/";

export const LANGUAGES = [
  {
    key: 'english', value: "English"
  },
  {
    key: 'hindi', value: "Hindi"
  },
  {
    key: 'marathi', value: "Marathi"
  },
  {
    key: 'japanese', value: "Japanese"
  }
]