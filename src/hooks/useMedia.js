import { useState, useEffect } from "react";

const SCREEN_SIZES = {
    MOBILE: "(max-width: 575px)",
    TABLET: "(min-width: 576px) and (max-width: 991px)",
    DESKTOP: "(min-width: 992px)"
};

const useMedia = () => {
    const [isMobile, setIsMobile] = useState(
        window.matchMedia(SCREEN_SIZES.MOBILE).matches
    );
    const [isTablet, setIsTablet] = useState(
        window.matchMedia(SCREEN_SIZES.TABLET).matches
    );
    const [isDesktop, setIsDesktop] = useState(
        window.matchMedia(SCREEN_SIZES.DESKTOP).matches
    );

    const getMediaSize = () => {
        setIsMobile(window.matchMedia(SCREEN_SIZES.MOBILE).matches);
        setIsTablet(window.matchMedia(SCREEN_SIZES.TABLET).matches);
        setIsDesktop(window.matchMedia(SCREEN_SIZES.DESKTOP).matches);
    };

    useEffect(() => {
        const mediaQueryLists = Object.values(SCREEN_SIZES).map(
            (query) => window.matchMedia(query)
        );

        const handleMediaChange = () => {
            getMediaSize();
        };

        mediaQueryLists.forEach((mediaQueryList) => {
            mediaQueryList.addEventListener("change", handleMediaChange);
        });

        return () => {
            mediaQueryLists.forEach((mediaQueryList) => {
                mediaQueryList.removeEventListener("change", handleMediaChange);
            });
        };
    }, []);

    return { isMobile, isTablet, isDesktop };
};

export default useMedia;