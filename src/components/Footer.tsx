import { faCheck, faEnvelope, faLanguage, faMessage, faPhone, faSignIn, faUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "./Image"
import Button from "./Button"
import { useContext, useRef, useState } from "react"
import Input from "./Input"
import DialogCongratulation from "./DialogCongratulation"
import { emailFormatter } from "../util/EmailFormatter"
import { UserThemeContext } from "../router/Router"

function Footer() {

  const { theme } = useContext(UserThemeContext) as never;
  const [email, setEmail] = useState("");
  const [isCongratulation, setIsCongratulation] = useState(false);
  const [isSubmitError, setIsSubmitError] = useState(false);
  const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);

  const useEmail = useRef(email);
  const useEmailElm = useRef<HTMLInputElement>(null);

  const handlerChangeInputEmailValue = (value: string) => {
    useEmail.current = value;
    setEmail(value);
  };

  function handlerSubmit() {
    if (!useEmail.current || !emailFormatter.test(email)) {
      useEmailElm.current?.focus();
      setIsCongratulation(false);
      handlerIsSubmitAndIsSuccess(false);
      return;
    }

    handlerSuccess();
  }

  function handlerSuccess() {
    setIsCongratulation(true);
    handlerIsSubmitAndIsSuccess(true);
    setEmail('');
    useEmail.current = '';
  }

  const handlerIsSubmitAndIsSuccess = (isSuccess: boolean) => {
    setIsSubmitError(!isSuccess);
    setIsSubmitSuccess(isSuccess);

    if (!isSuccess) return;

    const clear = setTimeout(() => {
      setIsSubmitError(false);
      setIsSubmitSuccess(false);
    }, 50);

    return () => clearTimeout(clear);
  }

  const handlerToggleIsCongratulation = () => {
    setIsCongratulation(prev => !prev);
  }

  return (
    <>
      <footer className={`${theme === 'dark' ? 'bg-slate-950' : 'bg-slate-100'} mt-16 w-full px-5 md:px-10`}>
        <div className="py-20">
          <div className="max-w-[1600px] mx-auto">
            <div className="grid gap-y-16 xl:grid-cols-4 md:grid-cols-2">
              <div className={`w-full max-md:border-b-[1px] ${theme === 'dark' ? 'max-md:border-b-slate-600' : 'max-md:border-b-slate-400'} max-md:pb-5`}>

                <div className="flex gap-x-4 mb-4">
                  <FontAwesomeIcon icon={faMessage} className={`text-xl ${theme === 'dark' ? 'text-[#30baaa]' : 'text-[#196c62]'}`} />
                  <span className={`text-xl ${theme === 'dark' ? 'text-[#30baaa]' : 'text-[#196c62]'} font-semibold`}>Contact with me!</span>
                </div>

                <div className="flex gap-x-4 mb-4">
                  <FontAwesomeIcon icon={faPhone} className={`text-xl ${theme === 'dark' ? 'text-[#30baaa]' : 'text-[#196c62]'}`} />
                  <span className={`text-xl ${theme === 'dark' ? 'text-[#30baaa]' : 'text-[#196c62]'} font-semibold`}>+8562057364321</span>
                </div>

                <div className="flex gap-x-4 mb-16">
                  <FontAwesomeIcon icon={faEnvelope} className={`text-xl ${theme === 'dark' ? 'text-[#30baaa]' : 'text-[#196c62]'}`} />
                  <span className={`text-xl ${theme === 'dark' ? 'text-[#30baaa]' : 'text-[#196c62]'} font-semibold`}>mengvaprogamemin@gmail.com</span>
                </div>

              </div>

              <div className={`w-full max-md:border-b-[1px] ${theme === 'dark' ? 'max-md:border-b-slate-600' : 'max-md:border-b-slate-400'} max-md:pb-5`}>

                <div className="flex gap-x-4 mb-4">
                  <FontAwesomeIcon icon={faUser} className={`text-xl ${theme === 'dark' ? 'text-[#30baaa]' : 'text-[#196c62]'}`} />
                  <span className={`text-xl ${theme === 'dark' ? 'text-[#30baaa]' : 'text-[#196c62]'} font-semibold`}>Personal</span>
                </div>

                <ul>
                  <li className={`${theme === 'dark' ? 'text-slate-300' : 'text-slate-600'} mb-2 text-md font-semibold`}>Name: mengva chuepor</li>
                  <li className={`${theme === 'dark' ? 'text-slate-300' : 'text-slate-600'} mb-2 text-md font-semibold`}>Age: 21</li>
                  <li className={`${theme === 'dark' ? 'text-slate-300' : 'text-slate-600'} mb-2 text-md font-semibold`}>Address: Dongdok, xaithani, vientiane capital</li>
                </ul>

                <div className="flex gap-x-4 mt-10">
                  <button type="button" className="google-animate w-[50px] h-[50px] grid place-content-center rounded-full">
                    <Image isSrc={true} src={"https://image.similarpng.com/file/similarpng/very-thumbnail/2020/06/Logo-google-icon-PNG.png"} className={`w-full h-full object-cover object-center`} />
                  </button>
                  <button type="button" className="github-animate w-[50px] h-[50px] grid place-content-center rounded-full">
                    <Image isSrc={true} src={"https://cdn-icons-png.flaticon.com/512/25/25231.png"} className={`w-full h-full object-cover object-center`} />
                  </button>
                  <button type="button" className="facebook-animate w-[50px] h-[50px] grid place-content-center rounded-full">
                    <Image isSrc={true} src={"https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png"} className={`w-full h-full object-cover object-center`} />
                  </button>
                </div>

              </div>

              <div className={`w-full max-md:border-b-[1px] ${theme === 'dark' ? 'max-md:border-b-slate-600' : 'max-md:border-b-slate-400'} max-md:pb-5`}>

                <div className="flex gap-x-4 mb-4">
                  <FontAwesomeIcon icon={faLanguage} className={`text-xl ${theme === 'dark' ? 'text-[#30baaa]' : 'text-[#196c62]'}`} />
                  <span className={`${theme === 'dark' ? 'text-[#30baaa]' : 'text-[#196c62]'} text-xl font-semibold`}>Language</span>
                </div>

                <div className="mb-4">
                  <h1 className={`text-xl ${theme === 'dark' ? 'text-[#30baaa]' : 'text-[#196c62]'} font-semibold underline`}>Frontend</h1>
                </div>

                <ul className="pl-5">
                  <li style={{ listStyleType: "circle" }} className={`${theme === 'dark' ? 'text-slate-300' : 'text-slate-600'} mb-2 text-md font-semibold`}>Basic: HTML, CSS AND JAVASCRIPT</li>
                  <li style={{ listStyleType: "circle" }} className={`${theme === 'dark' ? 'text-slate-300' : 'text-slate-600'} mb-2 text-md font-semibold`}>Library: TailwindCSS, Bootstrap,...</li>
                  <li style={{ listStyleType: "circle" }} className={`${theme === 'dark' ? 'text-slate-300' : 'text-slate-600'} mb-2 text-md font-semibold`}>Framework: Vue.js, React.js,...</li>
                </ul>

                <div className="mb-4">
                  <h1 className={`${theme === 'dark' ? 'text-[#30baaa]' : 'text-[#196c62]'} text-xl font-semibold underline`}>Backend</h1>
                </div>

                <ul className="pl-5">
                  <li style={{ listStyleType: "circle" }} className={`${theme === 'dark' ? 'text-slate-300' : 'text-slate-600'} mb-2 text-md font-semibold`}>Node.js, Express.js, Nest.js</li>
                </ul>

                <div className="mb-4">
                  <h1 className={`${theme === 'dark' ? 'text-[#30baaa]' : 'text-[#196c62]'} text-xl font-semibold underline`}>Database</h1>
                </div>

                <ul className="pl-5">
                  <li style={{ listStyleType: "circle" }} className={`${theme === 'dark' ? 'text-slate-300' : 'text-slate-600'} mb-2 text-md font-semibold`}>Mysql, Postgresql, Laragon,...</li>
                </ul>

                <div className="mb-4">
                  <h1 className={`${theme === 'dark' ? 'text-[#30baaa]' : 'text-[#196c62]'} text-xl font-semibold underline`}>Design UX/UI, Tools, Testing</h1>
                </div>

                <ul className="pl-5">
                  <li style={{ listStyleType: "circle" }} className={`${theme === 'dark' ? 'text-slate-300' : 'text-slate-600'} mb-2 text-md font-semibold`}>Figma, Github, Postman...</li>
                </ul>

              </div>

              <div className={`w-full max-md:border-b-[1px] ${theme === 'dark' ? 'max-md:border-b-slate-600' : 'max-md:border-b-slate-400'} max-md:pb-5`}>

                <div className="flex gap-x-4 mb-4">
                  <FontAwesomeIcon icon={faUser} className={`text-xl ${theme === 'dark' ? 'text-[#30baaa]' : 'text-[#196c62]'}`} />
                  <h1 className={`text-xl ${theme === 'dark' ? 'text-[#30baaa]' : 'text-[#196c62]'} font-semibold`}>Signin With Me.</h1>
                </div>

                <Input
                  className={`w-full h-[60px] rounded-2xl mt-4 border-none outline-none px-5 caret-[#cf3bed] text-lg text-[#cf3bed] ${theme === 'dark' ? 'bg-slate-800 hover:bg-slate-700 caret-slate-300 text-slate-300' : 'bg-white hover:bg-slate-50 caret-slate-600 text-slate-600'}`}
                  readOnly={false}
                  disable={false}
                  type={'email'}
                  value={useEmail}
                  name={'email'}
                  placeholder={'email...'}
                  id={'email'}
                  autoCompleted={'on'}
                  setInputValue={handlerChangeInputEmailValue}
                  useInput={useEmailElm}
                  isSubmitError={isSubmitError}
                  isSubmitSuccess={isSubmitSuccess}
                />

                <Button
                  type={'button'}
                  className={'h-[55px] w-full mt-5 rounded-2xl bg-[#cf3bed] hover:bg-[#b535cf] text-xl text-slate-100 hover:-translate-y-[1px]'}
                  iconClassName={'text-xl mr-1'}
                  handlerSubmit={handlerSubmit}
                  title={"Singin"}
                  icon={faSignIn}
                  isShowIcon={true}
                  isShowTitle={true}
                />

              </div>
            </div>
          </div>
        </div>
        <p className={`${theme === 'dark' ? 'text-slate-300' : 'text-slate-500'} text-center pb-5`}>Copyright © 2025</p>
      </footer>
      {
        isCongratulation &&
        <DialogCongratulation title={'Congratulation?'} setIsCongratulation={handlerToggleIsCongratulation} icon={faCheck} iconClassName={`text-[50px] text-center mx-auto text-[#cf3bed]`} />
      }
    </>
  )
}

export default Footer
