import { useState, useEffect } from "react";

export const useMediaQuery = (query) => {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        const media = window.matchMedia(query);
        if (media.matches !== matches) {
            setMatches(media.matches);
        }
        media.onchange = () => {
            setMatches(media.matches);
        };
    }, [matches, query]);

    return matches;
};
