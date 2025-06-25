import { useEffect, useState } from "react";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function DialogFavorite() {

    const [isLoading, setIsLoading] = useState(true);

    function handlerIsLoading() {
        return setTimeout(() => {
            setIsLoading(false);
        }, 10);
    }

    useEffect(() => {
        const clear = handlerIsLoading();

        return () => {
            clearTimeout(clear);
        }
    }, []);

    return (
        <div className={`fixed z-[99] flex justify-center items-center inset-0 w-full h-full ${isLoading ? 'scale-[1.2]' : 'scale-100'}`}>
            <div className={`${isLoading ? '' : 'scale-[3] opacity-0'} bg-rose-400/[.2] w-[65px] h-[65px] flex rounded-full`}>
                <FontAwesomeIcon icon={faHeart} className={`text-3xl m-auto text-rose-500`} />
            </div>
        </div>
    )
}

export default DialogFavorite
