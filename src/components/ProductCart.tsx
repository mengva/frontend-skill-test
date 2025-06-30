/* eslint-disable @typescript-eslint/no-unsafe-function-type */
import { faXmark, faCheck, faCancel, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCallback, useContext, useRef, useState, } from "react";
import ProductCartItem from "./ProductCartItem";
import Dialog from "./Dialog";
import EmptyProduct from "./EmptyProduct";
import DialogCongratulation from "./DialogCongratulation";
import { UserThemeContext } from "../router/Router";

interface ProductCartDto {
    isTranslate: boolean,
    setIsTranslate: Function
}

const products = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function ProductCart({ isTranslate, setIsTranslate }: ProductCartDto) {

    const { theme } = useContext(UserThemeContext) as never;
    const container = useRef<HTMLDivElement>(null);

    const [isShowDialog, setIsShowDialog] = useState(false);
    const [isCongratulation, setIsCongratulation] = useState(false);
    const [title, setTitle] = useState('Checkout Successfully.');

    function onCloseModel(event: never) {
        if (event['target'] === container.current) {
            setIsTranslate((prev: boolean) => !prev)
        }
    }

    const handlerToggleIsShowDialog = () => {
        setIsShowDialog((prev: boolean) => !prev);
    }

    function handlerShowDialogRemove(id: number) {
        console.log(id);
        handlerToggleIsShowDialog();
    }

    const handlerClose = useCallback(() => {
        handlerToggleIsShowDialog();
    }, []);

    const handlerConfirm = useCallback(() => {
        handlerToggleIsShowDialog();
        handlerToggleIsCongratulation();
    }, []);

    const handlerToggleIsCongratulation = () => {
        setTitle("Remove Product Cart Successfully.")
        setIsCongratulation(prev => !prev);
    }

    const handlerCheckOut = () => {
        setTitle('Checkout Successfully.');
        setIsCongratulation(prev => !prev);
    }

    return (
        <>
            <div ref={container} onClick={onCloseModel} className={`fixed overflow-hidden w-full h-full z-10 top-0 left-0 bg-slate-500/[.5] ${isTranslate ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                <div className={`sm:w-[450px] w-full absolute top-0 right-0 ${theme === 'dark' ? 'bg-slate-900' : 'bg-slate-50'} cart-scrolling h-full ${isTranslate ? 'translate-x-0' : 'translate-x-full'}`}>
                    <div className="w-full h-full pb-[80px] overflow-y-auto absolute inset-0">
                        <div className={`flex justify-start items-center w-full h-[60px] z-[2] px-1 sticky top-0 ${theme === 'dark' ? 'bg-slate-900' : 'bg-slate-50'}`}>
                            <button type="button" onClick={() => setIsTranslate((prev: boolean) => !prev)} className='cursor-pointer rounded-full w-[50px] h-[50px] bg-slate-400/[.2] hover:bg-slate-400/[.4] flex justify-center items-center mr-auto'>
                                <FontAwesomeIcon icon={faXmark} className="text-rose-500 text-2xl" />
                            </button>
                            <div className="absolute left-1/2 -translate-x-1/2">
                                <h1 className='text-2xl text-[#cf3bed] font-semibold'>My Cart</h1>
                            </div>
                        </div>
                        <div className="p-5">
                            {products.length > 0 ? products.map((_, index) => {
                                return <ProductCartItem key={index} handlerShowDialogRemove={handlerShowDialogRemove} />
                            }) : <EmptyProduct title={"Your cart empty"} icon={faShoppingCart} />
                            }
                        </div>
                    </div>
                    <div className={`absolute bottom-0 right-0 w-full h-[80px] px-5 flex justify-between items-center ${theme === 'dark' ? 'bg-slate-900' : 'bg-slate-200'}`}>
                        <div className="flex items-center h-full w-full">
                            <div className={`text-xl ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'} font-semibold`}>Total Price: <span className="text-[#cf3bed]">$123.123</span></div>
                        </div>
                        <button onClick={handlerCheckOut} type="button" className='cursor-pointer w-[280px] h-[50px] bg-[#1e639f] hover:bg-[#3888cf] rounded-full flex justify-center items-center mr-auto'>
                            <FontAwesomeIcon icon={faCheck} className="text-slate-100 text-2xl" />
                            <span className="text-lg text-slate-100 ml-1">Checkout</span>
                        </button>
                    </div>
                </div>
            </div>
            {
                isShowDialog &&
                    <Dialog
                        title={"Want to remove this item?"}
                        iconClose={faCancel}
                        iconConfirm={faCheck}
                        onClose={handlerClose}
                        onConfirm={handlerConfirm} />
            }
            {

                isCongratulation &&
                    <DialogCongratulation title={title} setIsCongratulation={handlerToggleIsCongratulation} icon={faCheck} iconClassName={`text-[50px] text-center mx-auto text-[#cf3bed]`} />
            }
        </>
    )
}

export default ProductCart
