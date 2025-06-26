import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faUser, faSun, faMoon, faSearch } from "@fortawesome/free-solid-svg-icons";
import { useLocation, useNavigate } from 'react-router-dom';
import Image from './Image';
import { useEffect, useState } from 'react';
import Cookie from "js-cookie";
import ProductCart from './ProductCart';
import UserAuth from './UserAuth';

function AppBar() {

    const navigate = useNavigate();
    const location = useLocation();
    
    const liClassName = "relative ml-auto w-14 h-14 hover:-translate-y-[1px] rounded-full flex justify-center items-center bg-slate-400/[.2] hover:bg-slate-400/[.4] cursor-pointer";
    const iconClassName = "text-2xl text-slate-100 cursor-pointer";

    const [isTranslate, setIsTranslate] = useState(false);
    const [isUserAuth, setIsUserAuth] = useState(false);

    const [resize, setResize] = useState(window.innerWidth);
    const [isDarkMode, setIsDarkMode] = useState(Cookie.get('isDarkMode'));

    function handlerResize() {
        window.addEventListener("resize", () => {
            setResize(window.innerWidth);
        });
    }    
    
    function handlerChangeIsDarkMode() {
        setIsDarkMode((isDarkMode === "false").toString());
        Cookie.set("isDarkMode", `${isDarkMode}`);
    }
    
    const handlerIsUserAuth = () => {
        setIsUserAuth(prev => !prev);
    }
    
    useEffect(() => {
        handlerResize();

        window.addEventListener("resize", handlerResize);

        return () => {
            window.removeEventListener("resize", handlerResize);
        }
    }, []);

    return (
        // 1e639f, 196c62
        <>
            <header style={{ background: `linear-gradient(45deg, #196c62 60%, #1e639f)` }} className="w-full h-[70px] z-10 shadow-xl sticky top-0 left-0">
                <div className={`flex justify-between items-center h-full mx-auto px-5`}>
                    <div className='flex items-center'>
                        <div onClick={() => navigate('/')} className="text-2xl font-medium w-[100px] h-[60px]">
                            <Image isSrc={true} src={'https://ecommerce-platforms.com/wp-content/uploads/2021/11/hero-2.png'} className='w-full h-full object-cover animation-image' />
                        </div>
                        {
                            resize > 920 ? <span className='ml-5 text-3xl title-appbar'>E-commerce</span> : ''
                        }
                    </div>
                    <ul className="flex gap-x-5">
                        {
                            resize > 720 && location.pathname === "/" ? <li className='my-auto w-[auto] h-[50px] bg-slate-300 hover:-translate-y-[1px] flex items-center rounded-3xl overflow-hidden'>
                                <button type="button" className='w-[50px] h-[50px] flex bg-slate-300'>
                                    <FontAwesomeIcon icon={faSearch} className='text-[#289157] m-auto text-xl' />
                                </button>
                                <input type="search" className='px-5 h-full w-full bg-slate-300 outline-none text-lg caret-[#cf3bed] text-[#cf3bed]' placeholder='Search...' />
                            </li> : ''
                        }
                        <li onClick={handlerChangeIsDarkMode} className={liClassName}>
                            {
                                isDarkMode === "false" ?
                                    <FontAwesomeIcon icon={faSun} className={iconClassName} />
                                    :
                                    <FontAwesomeIcon icon={faMoon} className={iconClassName} />
                            }
                        </li>
                        <li onClick={() => setIsTranslate(prev => !prev)} className={liClassName}>
                            <FontAwesomeIcon icon={faCartShopping} className={iconClassName} />
                            <p className="absolute top-0 -right-3 w-auto px-2 h-6 bg-[#cf3bed] rounded-full cursor-pointer text-nowrap flex justify-center items-center text-slate-100">+5</p>
                        </li>
                        <li onClick={handlerIsUserAuth} className={liClassName}>
                            <FontAwesomeIcon icon={faUser} className={iconClassName} />
                        </li>
                    </ul>
                </div>
            </header>
            <ProductCart isTranslate={isTranslate} setIsTranslate={setIsTranslate} />
            {
                isUserAuth &&
                    <UserAuth handlerIsUserAuth={handlerIsUserAuth}/>
            }
        </>
    )
}

export default AppBar
