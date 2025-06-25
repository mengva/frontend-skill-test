import { useEffect, useState } from "react"

function Loading() {
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
        <div className={`fixed z-[99] inset-0 w-full h-full ${isLoading ? 'scale-[1.2]' : 'scale-100'} bg-slate-600/80`}>
            <div className="flex w-full h-full">
                <div className={`sm:w-[450px] w-[95%] m-auto bg-slate-100 rounded-[2rem] py-6 flex ${isLoading ? 'translate-y-5 opacity-0' :  ''}`}>
                    <div className='loader mx-auto'></div>
                </div>
            </div>
        </div>
    )
}

export default Loading
