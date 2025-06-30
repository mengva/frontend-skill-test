import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { carouselImageList } from '../util/CarouselImages';
import { useEffect, useRef, useState, useCallback, useContext } from 'react';
import Image from './Image';
import { UserThemeContext } from '../router/Router';

function CarouselImage() {

    const {theme} = useContext(UserThemeContext) as never;
    
    const imageIndex = useRef(0);
    const containerImageElem = useRef<HTMLDivElement>(null);

    const [width, setWidth] = useState(window.innerWidth);
    const [getImageIndex, setGetImageIndex] = useState(0);

    // Function to handle carousel change
    const handlerChangeCarousel = useCallback((step: number) => {
        const total = carouselImageList.length;
        imageIndex.current = (imageIndex.current + step + total) % total;
        setGetImageIndex(imageIndex.current);

        if (containerImageElem.current) {
            containerImageElem.current.style.transform = `translateX(-${imageIndex.current * width}px)`;
        }
    }, [width]);

    // Function to handle window resize
    const handleResize = useCallback(() => {
        const newWidth = window.innerWidth;
        setWidth(newWidth);

        if (containerImageElem.current) {
            containerImageElem.current.style.width = `${newWidth * carouselImageList.length}px`;
            containerImageElem.current.style.transform = `translateX(-${imageIndex.current * newWidth}px)`;
        }
    }, []);

    useEffect(() => {
        handleResize(); // Set initial width & transform

        window.addEventListener("resize", handleResize);

        const interval = setInterval(() => {
            handlerChangeCarousel(1);
        }, 5000);

        return () => {
            window.removeEventListener("resize", handleResize);
            clearInterval(interval);
        };

    }, [handleResize, handlerChangeCarousel]);

    // Handle direct dot click
    const handlerClick = (index: number) => {
        imageIndex.current = index;
        setGetImageIndex(index);

        if (containerImageElem.current) {
            containerImageElem.current.style.transform = `translateX(-${index * width}px)`;
        }
    };

    return (
        <div className="w-full lg:h-[45rem] max-lg:aspect-[4/3] bg-cyan-600 relative">
            {/* Left Arrow */}
            <button
                type="button"
                onClick={() => handlerChangeCarousel(-1)}
                className={`z-[1] absolute left-0 top-1/2 -translate-y-1/2 text-slate-500 shadow-md cursor-pointer w-[35px] md:w-[40px] h-[80px] md:h-[100px] hover:w-[65px] ${theme === 'dark' ? 'active:bg-slate-900 outline-none border-none bg-slate-900 hover:bg-slate-800' : 'active:bg-slate-300 outline-none border-none bg-slate-100 hover:bg-slate-200'} rounded-r-[50px]`}
            >
                <FontAwesomeIcon icon={faArrowLeft} className='text-xl' />
            </button>

            {/* Right Arrow */}
            <button
                type="button"
                onClick={() => handlerChangeCarousel(1)}
                className={`z-[1] absolute right-0 top-1/2 -translate-y-1/2 text-slate-500 shadow-md cursor-pointer w-[35px] md:w-[40px] h-[80px] md:h-[100px] hover:w-[65px] ${theme === 'dark' ? 'active:bg-slate-900 outline-none border-none bg-slate-900 hover:bg-slate-800' : 'active:bg-slate-300 outline-none border-none bg-slate-100 hover:bg-slate-200'} rounded-l-[50px]`}
            >
                <FontAwesomeIcon icon={faArrowRight} className='text-xl' />
            </button>

            {/* Image Container */}
            <div className='relative w-full h-full inset-0'>
                <div
                    ref={containerImageElem}
                    style={{
                        scrollBehavior: "smooth",
                        transition: "transform 1s ease",
                        width: `${width * carouselImageList.length}px`
                    }}
                    className="h-full flex absolute inset-0"
                >
                    {carouselImageList.map((image, index) => (
                        <div key={index} style={{ width: `${width}px` }} className="h-full">
                            <Image isSrc={true} src={image} className="w-full h-full object-cover hue-rotate-15 bg-cover shadow-[inset_0_0_1000px]" />
                        </div>
                    ))}
                </div>

                {/* Dots */}
                <div className="w-full gap-x-2 flex justify-center absolute z-[2] bottom-2">
                    {carouselImageList.map((_, index) => (
                        <div
                            key={index}
                            onClick={() => handlerClick(index)}
                            className={`w-[20px] h-[20px] cursor-pointer rounded-full ${index === getImageIndex ? 'bg-[#cf3bed] scale-[1.2]' : 'bg-slate-400'}`}
                        ></div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default CarouselImage;
