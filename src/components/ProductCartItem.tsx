/* eslint-disable @typescript-eslint/no-unsafe-function-type */
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "./Image";
import { memo, useContext, useEffect, useState } from "react";
import { UserThemeContext } from "../router/Router";

interface ProductCartItemDto { 
    handlerShowDialogRemove: Function,
}

function ProductCartItem({ handlerShowDialogRemove }: ProductCartItemDto) {

    const { theme } = useContext(UserThemeContext) as never;
    const [count, setCount] = useState(1 as number);
    const [totalPice, setTotalPrice] = useState(123.123 as number);
    const price = 123.12;

    
    const handlerIncrement = () => {
        setCount(prev => prev + 1);
    }
    
    const handlerDicrement = () => {
        if(count > 1){
            setCount(prev => prev - 1);
        }
    }

    useEffect(() => {
        setTotalPrice((price * count).toFixed(2) as unknown as number);
    }, [count]);

    return (
        <>
            <div style={{ userSelect: 'none' }} className={`show-btn-remove cursor-pointer relative grid grid-cols-3 mb-2 ${theme === 'dark' ? 'bg-slate-800 hover:bg-slate-700' : 'bg-slate-100 hover:bg-slate-200'} px-4 py-3 rounded-xl`}>
                <div onClick={() => handlerShowDialogRemove(1)} className="btn-remove absolute right-2 -top-10 opacity-0 pointer-events-none">
                    <p className='py-3 px-4 pb-2 bg-rose-600 hover:bg-rose-500 rounded-xl text-slate-100 cursor-pointer flex gap-1 items-center'>
                        <FontAwesomeIcon icon={faTrash} />
                        Remove
                    </p>
                </div>
                <div>
                    <Image isSrc={true} src={"https://www.shutterstock.com/image-photo/small-shopping-cart-on-laptop-260nw-2459651035.jpg"} className={"w-16 h-10 rounded-sm"} />
                    <p className={`mt-1 ${theme === 'dark' ? 'text-slate-300' : 'text-slate-600'}`}>Type: <span className='text-[#cf3bed]'>{"Shoes"}</span></p>
                </div>
                <div className='flex gap-1 justify-center items-center'>
                    <p onClick={handlerDicrement} className='min-w-10 min-h-10 flex justify-center items-center cursor-pointer bg-[#cf3bed] rounded-2xl text-slate-100 text-lg hover:bg-[#b535cf]'>-</p>
                    <p className='min-w-10 min-h-10 flex justify-center items-center cursor-pointer bg-[#289157] rounded-2xl text-slate-100 text-lg hover:bg-[#269d5b]'>{count}</p>
                    <p onClick={handlerIncrement} className='min-w-10 min-h-10 flex justify-center items-center cursor-pointer bg-[#1e639f] rounded-2xl text-slate-100 text-lg hover:bg-[#3888cf]'>+</p>
                </div>
                <div className='flex justify-end items-center'>
                    <p className={`mt-1 ${theme === 'dark' ? 'text-slate-300' : 'text-slate-600'}`}>Total: <span className='text-sky-500'>${totalPice}</span></p>
                </div>
            </div>
        </>
    )
}

export default memo(ProductCartItem);
