import { useState, useEffect } from "react";
import matchmedia from "matchmedia-polyfill";

//don't return the mediaQuery object!
//calling setState WILL re-render the function
//but as mediaQuery points to the same object, React will not bother to commit updates to the DOM
//because it thinks that there are no updates
//but if mediaQuery state is a boolean, then React knows that it has changed and will commit updates to the DOM

//@params - query: string - must be a media query like (min-width:300px) or (max-width:500px)
const useMediaQuery = query => {
  const mql = "matchMedia" in window ? window.matchMedia(query) : matchmedia;
  const [mediaQuery, setMediaQuery] = useState(mql.matches);
  useEffect(() => {
    const onChange = () => setMediaQuery(mql.matches);
    mql.addEventListener("change", onChange);
  }, [mql]);
  return mediaQuery;
};

export default useMediaQuery;
