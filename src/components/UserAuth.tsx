/* eslint-disable @typescript-eslint/no-unsafe-function-type */
import { useEffect, useRef, useState } from "react";
import { faSignIn, faUser } from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

function UserAuth({ handlerIsUserAuth }: { handlerIsUserAuth: Function }) {

  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  const container = useRef<HTMLDivElement>(null);

  function handlerIsLoading() {
    return setTimeout(() => {
      setIsLoading(false);
    }, 10);
  }

  function handlerRedirect(path: string) {
    navigate(path);
    handlerIsUserAuth();
  }

  function handlerClose(event: React.FormEvent){
    if(event.target === container.current){
      handlerIsUserAuth();
    }
  }

  useEffect(() => {
    const clear = handlerIsLoading();

    return () => {
      clearTimeout(clear);
    }
  }, []);

  return (
    <div ref={container} onClick={handlerClose} className={`fixed z-[99] inset-0 w-full h-full px-6 py-10 ${isLoading ? 'opacity-0' : 'opacity-1'}`}>
      <ul className={`${isLoading ? 'translate-y-10 scale-75' : 'translate-y-0'} w-[280px] h-auto bg-white absolute top-[70px] right-2 py-2 rounded-xl shadow-md`}>
        {/* 196c62, cf3bed */}
        <li>
          <Button
            type={'button'}
            className={'bg-slate-100 h-[65px] w-full hover:bg-[#196c62] hover:text-slate-100 flex cursor-pointer justify-start text-lg px-4 w-fullflex gap-1 items-center text-slate-500'}
            iconClassName={'text-xl mr-1'}
            handlerSubmit={() => handlerRedirect("/profile")}
            title={"Profile"}
            icon={faUser}
            isShowIcon={true}
            isShowTitle={true}
          />
        </li>
        <li>
          <Button
            type={'button'}
            className={'bg-slate-100 h-[65px] w-full hover:bg-[#196c62] hover:text-slate-100 flex cursor-pointer justify-start text-lg px-4 w-fullflex gap-1 items-center text-slate-500'}
            iconClassName={'text-xl mr-1'}
            handlerSubmit={() => handlerRedirect("/login")}
            title={"Login"}
            icon={faSignIn}
            isShowIcon={true}
            isShowTitle={true}
          />
        </li>
      </ul>
    </div>
  )
}

export default UserAuth
