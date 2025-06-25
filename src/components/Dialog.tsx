/* eslint-disable @typescript-eslint/no-unsafe-function-type */
import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";

interface DialogDto {
    title: string;
    iconClose: IconProp;
    iconConfirm: IconProp;
    onClose: Function;
    onConfirm: Function;
}

function Dialog({ title, iconClose, iconConfirm, onClose, onConfirm }: DialogDto) {

    const [isLoading, setIsLoading] = useState(true);

    const containerElem = useRef<HTMLDivElement>(null)

    function handlerIsLoading() {
        return setTimeout(() => {
            setIsLoading(false);
        }, 10);
    }

    function handlerClose(event: React.FormEvent) {
        if (event['target'] === containerElem.current) {
            onClose();
        }
    }

    const handlerConfirm = () => {
        onConfirm();
    }

    useEffect(() => {
        const clear = handlerIsLoading();

        return () => {
            clearTimeout(clear);
        }
    }, []);

    return (
        <>
        <div ref={containerElem} onClick={handlerClose} className={`fixed z-[99] flex inset-0 w-full h-full ${isLoading ? 'scale-[1.2]' : 'scale-100'} bg-slate-600/80`}>
            <div className={`sm:w-[550px] w-[95%] m-auto bg-slate-100 rounded-[3rem] px-6 py-10 ${isLoading ? 'translate-y-5 opacity-0' : ''}`}>
                <div className='sm:text-3xl text-[26px] text-slate-700 text-center font-semibold'>
                    {title}
                </div>
                <div className="flex gap-x-2 mt-8">
                    <button onClick={() => onClose()} type="button" className='cursor-pointer w-[280px] h-[50px] sm:h-[55px] bg-[#cf3bed] hover:bg-[#b535cf] rounded-2xl flex justify-center items-center mr-auto'>
                        <FontAwesomeIcon icon={iconClose} className="text-slate-100 text-2xl" />
                        <span className="text-lg text-slate-100 ml-1">Close</span>
                    </button>
                    <button onClick={handlerConfirm} type="button" className='cursor-pointer w-[280px] h-[50px] sm:h-[55px] bg-[#1e639f] hover:bg-[#3888cf] rounded-2xl flex justify-center items-center mr-auto'>
                        <FontAwesomeIcon icon={iconConfirm} className="text-slate-100 text-2xl" />
                        <span className="text-lg text-slate-100 ml-1">Confirm</span>
                    </button>
                </div>
            </div>
        </div>
        </>
    )
}

export default Dialog
