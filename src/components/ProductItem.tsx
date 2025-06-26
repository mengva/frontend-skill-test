import Image from "./Image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faHeart, faCheck } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import DialogFavorite from "./DialogFavorite";
import DialogCongratulation from "./DialogCongratulation";

interface ProductItemDto {
    product: never;
}

function ProductItem({ product }: ProductItemDto) {

    const [isFavorite, setIsFavorite] = useState(false);
    const [isShowFavorite, setIsShowFavorite] = useState(false);
    const [isCongratulation, setIsCongratulation] = useState(false);
    const [count, setCount] = useState(0);

    const handlerToggleFavorite = () => {
        setIsFavorite(prev => !prev);
        if (!isShowFavorite) {
            setIsShowFavorite(prev => !prev);
            const clear = setTimeout(() => {
                setIsShowFavorite(prev => !prev);
            }, 500);
            return () => clearTimeout(clear);
        }
    }

    const handlerAddToCart = () => {
        setIsCongratulation(prev => !prev);
        setCount(prev => prev + 1);
    }

    return (
        <>
            <div className="bg-slate-50 hover:bg-slate-100 rounded-3xl hover:shadow-sm relative">
                <div className="absolute top-2 right-2 z-[2]">
                    <button type="button" onClick={handlerToggleFavorite} className={`${isFavorite ? "bg-rose-400/[.2] hover:bg-rose-400/[.4]" : "bg-slate-400/[.2] hover:bg-slate-400/[.4]"} cursor-pointer w-[45px] h-[45px] rounded-full grid place-content-center`}>
                        <FontAwesomeIcon icon={faHeart} className={`${isFavorite ? 'text-rose-500' : 'text-slate-500'} text-2xl`} />
                    </button>
                </div>
                <div className="aspect-[5/4] cursor-pointer">
                    <Image isSrc={true} className={"w-full h-full object-cover object-center"} src={product["images"][0]} />
                </div>
                <div className="p-5">
                    <div className="text-lg text-slate-800 mb-1">{product['title']}</div>
                    <div className="text-[#cf3bed] text-lg mb-1">${product['price']}</div>
                    <div className="flex justify-between items-center">
                        <div className="text-md text-slate-600">stock: {product['stock']}</div>
                        <div className="w-[45px] h-[45px]">
                            <Image isSrc={true} className={"w-full h-full object-cover object-center"} src={product['thumbnail']} />
                        </div>
                    </div>
                    <div className="mt-2">
                        {/* b17b2e bb8437*/}
                        <button onClick={handlerAddToCart} type="button" className="w-full relative h-[50px] bg-[#289157] hover:bg-[#2e935c] rounded-2xl text-lg font-medium text-slate-100">
                            <FontAwesomeIcon icon={faShoppingCart} />
                            <p className="inline-block ml-1">Add To Cart</p>
                            {
                                count > 0 ?
                                <p className="absolute -top-2 -right-2 w-auto px-2 h-6 bg-[#cf3bed] rounded-full cursor-pointer text-nowrap flex justify-center items-center text-slate-100">+{count}</p> : ''
                            }
                        </button>
                    </div>
                </div>
            </div>
            {
                isShowFavorite && isFavorite &&
                    <DialogFavorite />
            }
            {

                isCongratulation &&
                    <DialogCongratulation title={'Add Product To Cart Successfully.'} setIsCongratulation={() => setIsCongratulation(prev => !prev)} icon={faCheck} iconClassName={`text-[50px] text-center mx-auto text-[#cf3bed]`} />
            }
        </>
    )
}

export default ProductItem
