import { useState, useEffect } from "react";

const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);

    const handleChange = () => {
      setMatches(mediaQuery.matches);
    };

    // Set initial value
    setMatches(mediaQuery.matches);

    // Add listener for changes
    mediaQuery.addListener(handleChange);

    // Clean up
    return () => {
      mediaQuery.removeListener(handleChange);
    };
  }, [query]);

  return matches;
};

export default useMediaQuery;
