import { useEffect, useState } from "react";

function getMatches(query: string) {
  // Environments without matchMedia (e.g. jsdom) behave like the widest layout.
  if (typeof window === "undefined" || typeof window.matchMedia !== "function") {
    return true;
  }

  return window.matchMedia(query).matches;
}

export function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(() => getMatches(query));

  useEffect(() => {
    if (typeof window.matchMedia !== "function") {
      return;
    }

    const mediaQueryList = window.matchMedia(query);
    const handleChange = () => setMatches(mediaQueryList.matches);

    handleChange();
    mediaQueryList.addEventListener("change", handleChange);
    return () => mediaQueryList.removeEventListener("change", handleChange);
  }, [query]);

  return matches;
}
