import { useContext, useEffect, useState } from "react"
import ProductItem from "./ProductItem";
import Loading from "./Loading";
import Axios from "../config/Axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { UserThemeContext } from "../router/Router";

function Products() {

    const {theme} = useContext(UserThemeContext) as never;
    const [products, setProducts] = useState([]);
    const [resize, setResize] = useState(window.innerWidth);

    const fetchProduct = async () => {
        try {
            const { data } = await Axios.get("/products");
            setProducts(data?.products);
        } catch (error: ErrorEvent | unknown) {
            throw new Error("faild to fetching", error);
        }
    }

    function handlerResize() {
        window.addEventListener("resize", () => {
            setResize(window.innerWidth);
        });
    }

    useEffect(() => {
        handlerResize();

        window.addEventListener("resize", handlerResize);

        return () => {
            window.removeEventListener("resize", handlerResize);
        }
    }, []);

    useEffect(() => {
        fetchProduct();
    }, []);

    return (
        <>
            <div className="max-w-[1600px] mx-auto mt-16">
                <div className="text-center text-4xl font-bold text-[#cf3bed] underline">Our products</div>

                {
                    resize < 720 &&
                        <div className="p-5 mt-10">
                            <div className={`${theme === 'dark' ? 'bg-slate-800' : 'bg-slate-300'} my-auto w-[auto] h-[60px] hover:-translate-y-[1px] flex items-center rounded-3xl overflow-hidden`}>
                                <button type="button" className={`w-[60px] h-[60px] flex ${theme === 'dark' ? 'bg-slate-800 hover:bg-slate-700' : 'bg-slate-300'}`}>
                                    <FontAwesomeIcon icon={faSearch} className='text-[#289157] m-auto text-xl' />
                                </button>
                                <input type="search" className={`px-5 h-full w-full ${theme === 'dark' ? 'bg-slate-800 hover:bg-slate-700' : 'bg-slate-300'} outline-none text-lg caret-[#cf3bed] text-[#cf3bed]`} placeholder='Search something...' />
                            </div>
                        </div>
                }

                <div className="w-full mt-16">
                    <div className="p-5 grid 2xl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5">
                        {
                            products.length ? products.map((product, index) => {
                                return <ProductItem
                                    key={index}
                                    product={product}
                                />
                            }) : <Loading />
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Products;
