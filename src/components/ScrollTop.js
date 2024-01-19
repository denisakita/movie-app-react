import {useLocation} from "react-router-dom";
import {useEffect} from "react";


export function ScrollTop() {
    const {pathname} = useLocation();

    useEffect(() => {
        window.scroll(0, 0);
    }, [pathname]);

    return null
}
