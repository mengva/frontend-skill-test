import { useContext, useEffect, useRef, useState } from 'react'
import { Link } from "react-router-dom";
import Button from './Button';
import { faCheck, faRegistered } from '@fortawesome/free-solid-svg-icons';
import Input from './Input';
import DialogCongratulation from './DialogCongratulation';
import { UserThemeContext } from '../router/Router';

function Signup() {

    const { theme } = useContext(UserThemeContext) as never;

    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [isCongratulation, setIsCongratulation] = useState(false);
    const [isSubmitError, setIsSubmitError] = useState(false);
    const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const useEmailValue = useRef<string>(email);
    const usePasswordValue = useRef<string>(password);
    const useUserNameValue = useRef<string>(userName);

    const useEmailElm = useRef<HTMLInputElement>(null)
    const usePasswordElm = useRef<HTMLInputElement>(null)
    const useUserNameElm = useRef<HTMLInputElement>(null)

    const handlerChangeInputUserNameValue = (value: string) => {
        useUserNameValue.current = value;
        setUserName(value);
    }

    const handlerChangeInputEmailValue = (value: string) => {
        useEmailValue.current = value;
        setEmail(value);
    }

    const handlerChangeInputPasswordValue = (value: string) => {
        usePasswordValue.current = value;
        setPassword(value);
    }

    const handlerCheckConditionInputEmpty = () => {

        if (!userName) {
            setIsCongratulation(false);
            useUserNameElm.current?.focus();
            handlerIsSubmitAndIsSuccess(false);
            return;
        }

        if (!email) {
            setIsCongratulation(false);
            useEmailElm.current?.focus();
            handlerIsSubmitAndIsSuccess(false);
            return;
        }

        if (!password) {
            setIsCongratulation(false);
            usePasswordElm.current?.focus();
            handlerIsSubmitAndIsSuccess(false);
            return;
        }

        setIsCongratulation(true);
        handlerIsSubmitAndIsSuccess(true);
        handlerResetInput();
    }

    const handlerSubmitForm = (event: React.FormEvent) => {
        event.preventDefault();
        handlerCheckConditionInputEmpty();
    }

    const handlerResetInput = () => {
        setUserName("");
        setEmail("");
        setPassword("");
        useUserNameValue.current = "";
        useEmailValue.current = "";
        usePasswordValue.current = "";
    }

    function handlerIsLoading() {
        return setTimeout(() => {
            setIsLoading(false);
        }, 10);
    }

    const handlerIsSubmitAndIsSuccess = (isSuccess: boolean) => {
        setIsSubmitError(!isSuccess);
        setIsSubmitSuccess(isSuccess);

        if (isSuccess) {
            const clear = setTimeout(() => {
                setIsSubmitError(false);
                setIsSubmitSuccess(false);
            }, 50);

            return () => clearTimeout(clear);
        }
    }

    useEffect(() => {
        const clear = handlerIsLoading();

        return () => {
            clearTimeout(clear);
        }
    }, []);

    return (
        <>

            <div className={`${isLoading ? 'scale-[1.2] opacity-0' : ''} w-full h-screen py-6 ${theme === 'dark' ? 'bg-slate-950' : 'bg-white'} fixed top-0 left-0`}>
                <div className="w-full h-screen fixed top-0 left-0 p-4">
                    <div className="w-full h-[50%] overflow-hidden rounded-xl shadow-sm bg-cover bg-[url('https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/signup-cover.jpg')]">
                        <div className="w-full h-full bg-gray-600/[.6] flex">
                            <div className="mx-auto mt-[6rem] text-center w-[450px]">
                                <h1 className={`drop-shadow-md lg:text-5xl text-4xl mb-4 font-bold ${theme === 'dark' ? 'text-slate-300' : 'text-white'}`}>Welcome!</h1>
                                <p className={`${theme === 'dark' ? 'text-slate-300' : 'text-white'} text-lg`}>Use these awesome forms to login or create new account in your project for free.</p>
                            </div>
                        </div>
                    </div>
                    <div className={`sm:w-[450px] w-[80%] absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 ${theme === 'dark' ? 'bg-slate-900' : 'bg-white'} px-6 py-10 shadow-xl rounded-[40px]`}>
                        <h1 className={`text-3xl text-center mb-8 font-semibold ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>Register With Me</h1>
                        <form onSubmit={handlerSubmitForm} className="w-full">
                            <label htmlFor="username" className="block mb-4">
                                <Input
                                    className={`block h-[60px] w-full px-4 ${theme === 'dark' ? 'bg-slate-800 hover:bg-slate-700 caret-slate-300 text-slate-300' : 'bg-slate-100 hover:bg-slate-200 caret-slate-600 text-slate-600'} rounded-xl`}
                                    readOnly={false}
                                    disable={false}
                                    type={'text'}
                                    value={useUserNameValue}
                                    name={'username'}
                                    placeholder={'username...'}
                                    id={'username'}
                                    autoCompleted={'on'}
                                    setInputValue={handlerChangeInputUserNameValue}
                                    useInput={useUserNameElm}
                                    isSubmitError={isSubmitError}
                                    isSubmitSuccess={isSubmitSuccess}
                                />
                            </label>
                            <label htmlFor="email" className="block mb-4">
                                <Input
                                    className={`block h-[60px] w-full px-4 ${theme === 'dark' ? 'bg-slate-800 hover:bg-slate-700 caret-slate-300 text-slate-300' : 'bg-slate-100 hover:bg-slate-200 caret-slate-600 text-slate-600'} rounded-xl`}
                                    readOnly={false}
                                    disable={false}
                                    type={'email'}
                                    value={useEmailValue}
                                    name={'email'}
                                    placeholder={'email...'}
                                    id={'email'}
                                    autoCompleted={'on'}
                                    setInputValue={handlerChangeInputEmailValue}
                                    useInput={useEmailElm}
                                    isSubmitError={isSubmitError}
                                    isSubmitSuccess={isSubmitSuccess}
                                />
                            </label>
                            <label htmlFor="password" className="block">
                                <Input
                                    className={`block h-[60px] w-full px-4 ${theme === 'dark' ? 'bg-slate-800 hover:bg-slate-700 caret-slate-300 text-slate-300' : 'bg-slate-100 hover:bg-slate-200 caret-slate-600 text-slate-600'} rounded-xl`}
                                    readOnly={false}
                                    disable={false}
                                    type={'password'}
                                    value={usePasswordValue}
                                    name={'password'}
                                    placeholder={'password...'}
                                    id={'password'}
                                    autoCompleted={'on'}
                                    setInputValue={handlerChangeInputPasswordValue}
                                    useInput={usePasswordElm}
                                    isSubmitError={isSubmitError}
                                    isSubmitSuccess={isSubmitSuccess}
                                />
                            </label>
                            <div className="flex gap-2 my-6">
                                <input type="checkbox" name="checkbox" id="checkbox" className="cursor-pointer accent-blue-400 w-[18px]" />
                                <p className={`${theme === 'dark' ? 'text-slate-300' : 'text-slate-500'}`}>I agree the <span><a className="cursor-pointer text-[#cf3bed]">Terms and Conditions</a></span></p>
                            </div>
                            <Button
                                type={'submit'}
                                className={'h-[60px] w-full mb-4 rounded-2xl bg-[#cf3bed] hover:bg-[#b535cf] text-xl text-slate-100'}
                                iconClassName={'text-xl mr-1'}
                                handlerSubmit={() => { }}
                                title={"Register"}
                                icon={faRegistered}
                                isShowIcon={true}
                                isShowTitle={true}
                            />
                            <p className={`${theme === 'dark' ? 'text-slate-300' : 'text-slate-500'}`}>Already have an account? <span><Link to='/login' className="text-[#cf3bed]">Login</Link></span></p>
                        </form>
                    </div>
                    <p className={`absolute bottom-8 left-1/2 -translate-x-1/2 ${theme === 'dark' ? 'text-slate-300' : 'text-slate-500'} text-center`}>Copyright © 2025</p>
                </div>
            </div>
            {

                isCongratulation &&
                <DialogCongratulation title={'Congratulation?'} setIsCongratulation={() => setIsCongratulation(prev => !prev)} icon={faCheck} iconClassName={`text-[50px] text-center mx-auto text-[#cf3bed]`} />
            }
        </>
    )
}

export default Signup
