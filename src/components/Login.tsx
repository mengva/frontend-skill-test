import { faArrowLeft, faCheck, faSignIn } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import Input from './Input';
import Button from './Button';
import DialogCongratulation from './DialogCongratulation';

function Signin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const [isCongratulation, setIsCongratulation] = useState(false);
    const [isSubmitError, setIsSubmitError] = useState(false);
    const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);

    const navigate = useNavigate();

    const useEmailValue = useRef<string>(email);
    const usePasswordValue = useRef<string>(password);

    const useEmailElm = useRef<HTMLInputElement>(null)
    const usePasswordElm = useRef<HTMLInputElement>(null)

    const handlerChangeInputEmailValue = (value: string) => {
        useEmailValue.current = value;
        setEmail(value);
    }

    const handlerChangeInputPasswordValue = (value: string) => {
        usePasswordValue.current = value;
        setPassword(value);
    }

    const handlerCheckConditionInputEmpty = () => {
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
        handlerResetInput();
    }

    const handlerResetInput = () => {
        setEmail("");
        setPassword("");
        useEmailValue.current = "";
        usePasswordValue.current = "";
    }

    const handlerSubmitForm = (event: React.FormEvent) => {
        event.preventDefault();
        handlerCheckConditionInputEmpty();
    }

    const handlerToggleIsCongratulation = () => {
        setIsCongratulation(prev => !prev);
        handlerIsSubmitAndIsSuccess(true);
    }

    function handlerIsLoading() {
        return setTimeout(() => {
            setIsLoading(false);
        }, 10);
    }

    const handlerIsSubmitAndIsSuccess = (isSuccess: boolean) => {
        setIsSubmitError(!isSuccess);
        setIsSubmitSuccess(isSuccess);

        if(!isSuccess) return;

        const clear = setTimeout(() => {
            setIsSubmitError(false);
            setIsSubmitSuccess(false);
        }, 50);

        return () => clearTimeout(clear);
    }

    useEffect(() => {
        const clear = handlerIsLoading();

        return () => {
            clearTimeout(clear);
        }
    }, []);

    return (
        <>
            <div className={`w-full h-screen py-6 bg-white fixed top-0 left-0 ${isLoading ? 'scale-[1.2] opacity-0' : ''}`}>
                <div className='absolute left-2 top-2 z-[1]'>
                    <Button
                        type={'button'}
                        className={'h-[55px] w-[55px] rounded-2xl bg-slate-300 hover:bg-slate-200 text-xl text-slate-500'}
                        iconClassName={'text-xl'}
                        handlerSubmit={() => navigate("/")}
                        title={""}
                        icon={faArrowLeft}
                        isShowIcon={true}
                        isShowTitle={false}
                    />
                </div>
                <div className="fixed top-0 left-0 w-full h-full">
                    <div className="flex lg:flex-row flex-col justify-center items-center h-full sm:p-4">
                        <div className="block w-[80%] sm:w-[350px] mx-auto">
                            <h1 className="mb-3 text-2xl font-bold text-slate-700">Login</h1>
                            <p className="text-lg mb-6 text-slate-500">Enter your email and password to Login</p>
                            <form onSubmit={handlerSubmitForm} className="w-full">
                                <label htmlFor="email" className="block mb-6">
                                    <Input
                                        className={`block h-[60px] w-full px-4 bg-slate-100 hover:bg-slate-200 caret-slate-600 text-slate-600 rounded-xl`}
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
                                        className={`block h-[60px] w-full px-4 bg-slate-100 hover:bg-slate-200 caret-slate-600 text-slate-600 rounded-xl`}
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
                                <div className="flex items-center gap-2 mt-6">
                                    <div className="inline-block w-[40px] h-[20px] relative">
                                        <input className="input-checkbox appearance-none w-[100%] h-[100%] bg-gray-200 rounded-2xl cursor-pointer relative" type="checkbox" name="checkbox1" id="checkbox1" />
                                        <label className="absolute w-[18px] h-[18px] rounded-full bg-white top-1/2 left-[1px] shadow-sm cursor-pointer -translate-y-1/2" htmlFor="checkbox1"></label>
                                    </div>
                                    <p className="text-slate-500">Remember me</p>
                                </div>
                                <Button
                                    type={'submit'}
                                    className={'h-[55px] w-full mt-5 rounded-2xl bg-[#cf3bed] hover:bg-[#b535cf] text-xl text-slate-100'}
                                    iconClassName={'text-xl mr-1'}
                                    handlerSubmit={() => { }}
                                    title={"Singin"}
                                    icon={faSignIn}
                                    isShowIcon={true}
                                    isShowTitle={true}
                                />
                                <p className="text-center mt-6 text-slate-500">Dont`t have an account? <span><Link to='/register' className="text-[#b535cf] cursor-pointer">Register</Link></span></p>
                            </form>
                        </div>
                        <div className="rounded-xl hidden overflow-hidden lg:block text-center w-1/2 h-full bg-top bg-cover bg-no-repeat bg-[url('https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/signin-ill.jpg')]">
                            <div className="flex p-[6rem] justify-center items-center flex-col bg-gradient-to-r from-teal-500/[.5] to-green-400/[.5] w-full h-full">
                                <h1 className="text-3xl font-bold text-white drop-shadow-md mb-4">"Attention is the new currency"</h1>
                                <p className="text-slate-100 text-lg drop-shadow-sm">The more effortless the writing looks, the more effort the writer actually put into the process.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {

                isCongratulation ?
                    <DialogCongratulation title={'Congratulation?'} setIsCongratulation={handlerToggleIsCongratulation} icon={faCheck} iconClassName={`text-[50px] text-center mx-auto text-[#cf3bed]`} />
                    : ''
            }
        </>
    )
}

export default Signin
