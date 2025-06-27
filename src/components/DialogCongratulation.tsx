/* eslint-disable @typescript-eslint/no-unsafe-function-type */
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";

interface DialogCongratulationDto {
    title: string;
    iconClassName: string;
    icon: IconProp;
    setIsCongratulation: Function;
}

function DialogCongratulation({ title, iconClassName, setIsCongratulation, icon }: DialogCongratulationDto) {

    const [isLoading, setIsLoading] = useState(true);
    const [isSuccess, setIsSuccess] = useState(false);

    function handlerIsLoading() {
        return setTimeout(() => {
            setIsLoading(false);
        }, 10);
    }

    function handlerCloseCongratulation() {
        return setTimeout(() => {
            setIsCongratulation();
        }, 1800);
    }

    function handlerIsSuccess() {
        setIsSuccess(prev => !prev);
        return setTimeout(() => {
            setIsSuccess(prev => !prev);
        }, 800);
    }

    useEffect(() => {
        const clear = handlerIsLoading();
        const clear1 = handlerCloseCongratulation();
        const clear2 = handlerIsSuccess();

        return () => {
            clearTimeout(clear);
            clearTimeout(clear1);
            clearTimeout(clear2);
        }
    }, []);

    return (
        <div className={`fixed z-[99] flex inset-0 w-full h-full ${isLoading ? 'scale-[1.2]' : 'scale-100'} bg-slate-600/80`}>
            <div className={`sm:w-[550px] w-[95%] m-auto bg-slate-100 rounded-[3rem] px-6 py-10 ${isLoading ? 'translate-y-5 opacity-0' : ''}`}>
                {
                    isSuccess ?
                        <div className={`${isSuccess ? 'scale-100' : 'scale-[.5] translate-y-10'} w-[100px] h-[100px] grid place-content-center mb-5 rounded-full mx-auto`}>
                            <FontAwesomeIcon icon={icon} className={iconClassName} />
                        </div> :
                        <div className={`w-[100px] h-[100px] mb-5 rounded-full mx-auto loader`}></div>
                }
                {
                    isSuccess &&
                    <div className='sm:text-3xl text-[26px] text-slate-700 text-center'>
                        {title}
                    </div>
                }
            </div>
        </div>
    )
}

export default DialogCongratulation
