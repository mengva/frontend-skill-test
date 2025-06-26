import { faAppleAlt, faCheck, faMessage, faTools } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react"
import Image from "./Image";
import Input from "./Input";
import Button from "./Button";
import DialogCongratulation from "./DialogCongratulation";

function UserProfile() {

    const [isCongratulation, setIsCongratulation] = useState(false);
    const [isSubmitError, setIsSubmitError] = useState(false);
    const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);

    const [email, setEmail] = useState("mengvaprogamemin@gmail.com");
    const [userName, setUserName] = useState("mengva chuepor");
    const [firstName, setFirstName] = useState("mengva");
    const [lastName, setLastName] = useState("chuepor");
    const [city, setCity] = useState("xaithani");
    const [address, setAddress] = useState("dongdok");
    const [country, setCountry] = useState("laos");
    const [postalCode, setPostalCode] = useState("112233");
    const [aboutMe, setAboutMe] = useState("this is my detail");

    const useEmailValue = useRef<string>(email);
    const useUserNameValue = useRef<string>(userName);
    const useFirstNameValue = useRef<string>(firstName);
    const useLastNameValue = useRef<string>(lastName);
    const useCityValue = useRef<string>(city);
    const useAddressValue = useRef<string>(address);
    const useCountryValue = useRef<string>(country);
    const usePostalCodeValue = useRef<string>(postalCode);
    const useAboutMeValue = useRef<string>(aboutMe);

    const useEmailElm = useRef<HTMLInputElement | null>(null);
    const useUserNameElm = useRef<HTMLInputElement | null>(null);
    const useFirstNameElm = useRef<HTMLInputElement | null>(null);
    const useLastNameElm = useRef<HTMLInputElement | null>(null);
    const useCityElm = useRef<HTMLInputElement | null>(null);
    const useAddressElm = useRef<HTMLInputElement | null>(null);
    const useCountryElm = useRef<HTMLInputElement | null>(null);
    const usePostalCodeElm = useRef<HTMLInputElement | null>(null);
    const useAboutMeElm = useRef<HTMLInputElement | null>(null);

    const handlerChangeInputEmailValue = (value: string) => {
        useEmailValue.current = value;
        setEmail(value);
    }

    const handlerChangeInputUserNameValue = (value: string) => {
        useUserNameValue.current = value;
        setUserName(value);
    }

    const handlerChangeInputFirstNameValue = (value: string) => {
        useFirstNameValue.current = value;
        setFirstName(value);
    }

    const handlerChangeInputLastNameValue = (value: string) => {
        useLastNameValue.current = value;
        setLastName(value);
    }

    const handlerChangeInputCityValue = (value: string) => {
        useCityValue.current = value;
        setCity(value);
    }

    const handlerChangeInputAddressValue = (value: string) => {
        useAddressValue.current = value;
        setAddress(value);
    }

    const handlerChangeInputCountryValue = (value: string) => {
        useCountryValue.current = value;
        setCountry(value);
    }

    const handlerChangeInputPostalCodeValue = (value: string) => {
        usePostalCodeValue.current = value;
        setPostalCode(value);
    }

    const handlerChangeInputAboutMeValue = (value: string) => {
        useAboutMeValue.current = value;
        setAboutMe(value);
    }

    const handlerCheckConditionInputEmpty = () => {
        if (!email) {
            setIsCongratulation(false);
            useEmailElm.current?.focus();
            handlerIsSubmitAndIsSuccess(false);
            return;
        }

        if (!userName) {
            setIsCongratulation(false);
            useUserNameElm.current?.focus();
            handlerIsSubmitAndIsSuccess(false);
            return;
        }

        if (!firstName) {
            setIsCongratulation(false);
            useFirstNameElm.current?.focus();
            handlerIsSubmitAndIsSuccess(false);
            return;
        }

        if (!lastName) {
            setIsCongratulation(false);
            useLastNameElm.current?.focus();
            handlerIsSubmitAndIsSuccess(false);
            return;
        }

        if (!address) {
            setIsCongratulation(false);
            useAddressElm.current?.focus();
            handlerIsSubmitAndIsSuccess(false);
            return;
        }

        if (!city) {
            setIsCongratulation(false);
            useCityElm.current?.focus();
            handlerIsSubmitAndIsSuccess(false);
            return;
        }

        if (!country) {
            setIsCongratulation(false);
            useCountryElm.current?.focus();
            handlerIsSubmitAndIsSuccess(false);
            return;
        }

        if (!postalCode) {
            setIsCongratulation(false);
            usePostalCodeElm.current?.focus();
            handlerIsSubmitAndIsSuccess(false);
            return;
        }

        if (!aboutMe) {
            setIsCongratulation(false);
            useAboutMeElm.current?.focus();
            handlerIsSubmitAndIsSuccess(false);
            return;
        }

        setIsCongratulation(true);
        handlerIsSubmitAndIsSuccess(true);

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

    const handlerSubmitForm = async (event: React.FormEvent) => {
        event.preventDefault();
        handlerCheckConditionInputEmpty();
    }

    const handlerToggleIsCongratulation = () => {
        setIsCongratulation(prev => !prev);
    }

    return (
        <>
            <div className="w-full relative mb-[280px]">
                <div className="w-full h-[300px] absolute top-0 left-0 bg-cover bg-no-repeat bg-[url('https://drliorbenavraham.com/wp-content/uploads/2022/03/dr-lior-ben-avraham-couples-and-family-counselling-services-1024x347.jpg')]">
                    <div className="w-full h-full bg-green-500/[.4]"></div>
                </div>
                <div className="absolute top-[300px] left-0 bg-gray-50 w-full h-full -z-10"></div>
                <div className="w-full h-full relative top-[245px] lg:px-6 px-2">
                    <div className="w-full max-sm:h-[335px] p-4 rounded-[35px] bg-white shadow-md md:flex justify-between items-center mb-8">
                        <div className="md:mb-0 mb-4 flex justify-between">
                            <div className="flex gap-4 items-center">
                                <Image
                                    isSrc={true}
                                    className={`w-[80px] h-[80px] border-2 border-[#cf3bed] border-solid object-cover rounded-full bg-slate-200`}
                                    src={`https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg`} />
                                <div className="block">
                                    <h1 className="lg:text-2xl text-xl font-semibold text-slate-700">Mengva Chuepor</h1>
                                    <p className="text-slate-500 mt-2">Public Relations</p>
                                </div>
                            </div>
                        </div>
                        <div className="sm:flex gap-2 h-[60px]">
                            <Button
                                type={'button'}
                                className={'sm:mb-0 mb-2 bg-slate-100 hover:bg-slate-200 hover:-translate-y-[1px] cursor-pointer justify-center rounded-2xl h-full w-full sm:w-[100px] hover:border-gray-300 flex gap-1 items-center text-slate-500'}
                                iconClassName={'text-lg text-slate-500 mr-1'}
                                handlerSubmit={() => { }}
                                title={"App"}
                                icon={faAppleAlt}
                                isShowIcon={true}
                                isShowTitle={true}
                            />
                            <Button
                                type={'button'}
                                className={'sm:mb-0 mb-2 bg-slate-100 hover:bg-slate-200 hover:-translate-y-[1px] cursor-pointer justify-center rounded-2xl h-full w-full sm:w-[150px] hover:border-gray-300 flex gap-1 items-center text-slate-500'}
                                iconClassName={'text-lg text-slate-500 mr-1'}
                                handlerSubmit={() => { }}
                                title={"Messages"}
                                icon={faMessage}
                                isShowIcon={true}
                                isShowTitle={true}
                            />
                            <Button
                                type={'button'}
                                className={'sm:mb-0 mb-2 bg-slate-100 hover:bg-slate-200 hover:-translate-y-[1px] cursor-pointer justify-center rounded-2xl h-full w-full sm:w-[120px] hover:border-gray-300 flex gap-1 items-center text-slate-500'}
                                iconClassName={'text-lg text-slate-500 mr-1'}
                                handlerSubmit={() => { }}
                                title={"Settings"}
                                icon={faTools}
                                isShowIcon={true}
                                isShowTitle={true}
                            />
                        </div>
                    </div>
                    <div className="w-full h-auto pb-2">
                        <div className="lg:flex gap-6">
                            <div className="xl:w-[70%] lg:w-[60%] w-full bg-white rounded-xl p-6">
                                <div className="sm:flex justify-between items-center mb-6">
                                    <h1 className="text-[#cf3bed] text-lg font-semibold">Edit UserProfile</h1>
                                    <button type="button" className="sm:w-auto w-full h-[50px] sm:mt-0 mt-2 py-3 px-10 hover:-translate-y-[2px] bg-[#cf3bed] rounded-2xl text-white text-md cursor-pointer">Settings</button>
                                </div>
                                <h1 className="text-[#289157] font-semibold">USER VALUERMATION</h1>
                                <form onSubmit={handlerSubmitForm} className="w-full mt-6">
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        <label htmlFor="userName" className="block h-[100px] mb-6">
                                            <p className="mb-2 text-md font-semibold text-slate-600">UserName</p>
                                            <Input
                                                className={`block h-[60px] w-full px-4 bg-slate-100 hover:bg-slate-200 caret-slate-600 text-slate-600 rounded-xl`}
                                                readOnly={false}
                                                disable={false}
                                                type={'text'}
                                                value={useUserNameValue}
                                                name={'userName'}
                                                placeholder={'userName...'}
                                                id={'userName'}
                                                autoCompleted={'on'}
                                                setInputValue={handlerChangeInputUserNameValue}
                                                useInput={useUserNameElm}
                                                isSubmitError={isSubmitError}
                                                isSubmitSuccess={isSubmitSuccess}
                                            />
                                        </label>
                                        <label htmlFor="email" className="block h-[100px] mb-6">
                                            <p className="mb-2 text-md font-semibold text-slate-600">Email</p>
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
                                        <label htmlFor="fristname" className="block h-[100px] mb-6">
                                            <p className="mb-2 text-md font-semibold text-slate-600">Frist name</p>
                                            <Input
                                                className={`block h-[60px] w-full px-4 bg-slate-100 hover:bg-slate-200 caret-slate-600 text-slate-600 rounded-xl`}
                                                readOnly={false}
                                                disable={false}
                                                type={'firstName'}
                                                value={useFirstNameValue}
                                                name={'firstName'}
                                                placeholder={'firstName...'}
                                                id={'firstName'}
                                                autoCompleted={'on'}
                                                setInputValue={handlerChangeInputFirstNameValue}
                                                useInput={useFirstNameElm}
                                                isSubmitError={isSubmitError}
                                                isSubmitSuccess={isSubmitSuccess}
                                            />
                                        </label>
                                        <label htmlFor="lastname" className="block h-[100px] mb-6">
                                            <p className="mb-2 text-md font-semibold text-slate-600">Last name</p>
                                            <Input
                                                className={`block h-[60px] w-full px-4 bg-slate-100 hover:bg-slate-200 caret-slate-600 text-slate-600 rounded-xl`}
                                                readOnly={false}
                                                disable={false}
                                                type={'text'}
                                                value={useLastNameValue}
                                                name={'lastName'}
                                                placeholder={'lastName...'}
                                                id={'lastName'}
                                                autoCompleted={'on'}
                                                setInputValue={handlerChangeInputLastNameValue}
                                                useInput={useLastNameElm}
                                                isSubmitError={isSubmitError}
                                                isSubmitSuccess={isSubmitSuccess}
                                            />
                                        </label>
                                    </div>
                                    <h1 className="mt-10 mb-6 text-[#289157] font-semibold">CONTACT VALUERMATION</h1>
                                    <label htmlFor="address" className="mb-10 block h-[100px]">
                                        <p className="mb-2 text-md font-semibold text-slate-600">Address</p>
                                        <Input
                                            className={`block h-[60px] w-full px-4 bg-slate-100 hover:bg-slate-200 caret-slate-600 text-slate-600 rounded-xl`}
                                            readOnly={false}
                                            disable={false}
                                            type={'text'}
                                            value={useAddressValue}
                                            name={'address'}
                                            placeholder={'address...'}
                                            id={'address'}
                                            autoCompleted={'on'}
                                            setInputValue={handlerChangeInputAddressValue}
                                            useInput={useAddressElm}
                                            isSubmitError={isSubmitError}
                                            isSubmitSuccess={isSubmitSuccess}
                                        />
                                    </label>
                                    <div className="sm:flex justify-between items-center gap-4 mb-10">
                                        <label htmlFor="city" className="block h-[100px] w-full max-sm:mb-10">
                                            <p className="mb-2 text-md font-semibold text-slate-600">City</p>
                                            <Input
                                                className={`block h-[60px] w-full px-4 bg-slate-100 hover:bg-slate-200 caret-slate-600 text-slate-600 rounded-xl`}
                                                readOnly={false}
                                                disable={false}
                                                type={'text'}
                                                value={useCityValue}
                                                name={'city'}
                                                placeholder={'city...'}
                                                id={'city'}
                                                autoCompleted={'on'}
                                                setInputValue={handlerChangeInputCityValue}
                                                useInput={useCityElm}
                                                isSubmitError={isSubmitError}
                                                isSubmitSuccess={isSubmitSuccess}
                                            />
                                        </label>
                                        <label htmlFor="country" className="block h-[100px] w-full max-sm:mb-10">
                                            <p className="mb-2 text-md font-semibold text-slate-600">Country</p>
                                            <Input
                                                className={`block h-[60px] w-full px-4 bg-slate-100 hover:bg-slate-200 caret-slate-600 text-slate-600 rounded-xl`}
                                                readOnly={false}
                                                disable={false}
                                                type={'text'}
                                                value={useCountryValue}
                                                name={'country'}
                                                placeholder={'country...'}
                                                id={'country'}
                                                autoCompleted={'on'}
                                                setInputValue={handlerChangeInputCountryValue}
                                                useInput={useCountryElm}
                                                isSubmitError={isSubmitError}
                                                isSubmitSuccess={isSubmitSuccess}
                                            />
                                        </label>
                                        <label htmlFor="postal" className="block h-[100px] w-full max-sm:mb-10">
                                            <p className="mb-2 text-md font-semibold text-slate-600">Postal code</p>
                                            <Input
                                                className={`block h-[60px] w-full px-4 bg-slate-100 hover:bg-slate-200 caret-slate-600 text-slate-600 rounded-xl`}
                                                readOnly={false}
                                                disable={false}
                                                type={'number'}
                                                value={usePostalCodeValue}
                                                name={'postalCode'}
                                                placeholder={'postalCode...'}
                                                id={'postalCode'}
                                                autoCompleted={'on'}
                                                setInputValue={handlerChangeInputPostalCodeValue}
                                                useInput={usePostalCodeElm}
                                                isSubmitError={isSubmitError}
                                                isSubmitSuccess={isSubmitSuccess}
                                            />
                                        </label>
                                    </div>
                                    <h1 className="text-[#289157] mb-6 font-semibold">ABOUT ME</h1>
                                    <label htmlFor="about-me" className="block h-[100px] w-full mb-10">
                                        <p className="mb-2 text-md font-semibold text-slate-600">About me</p>
                                        <Input
                                            className={`block h-[60px] w-full px-4 bg-slate-100 hover:bg-slate-200 caret-slate-600 text-slate-600 rounded-xl`}
                                            readOnly={false}
                                            disable={false}
                                            type={'text'}
                                            value={useAboutMeValue}
                                            name={'aboutMe'}
                                            placeholder={'aboutMe...'}
                                            id={'aboutMe'}
                                            autoCompleted={'on'}
                                            setInputValue={handlerChangeInputAboutMeValue}
                                            useInput={useAboutMeElm}
                                            isSubmitError={isSubmitError}
                                            isSubmitSuccess={isSubmitSuccess}
                                        />
                                    </label>
                                    <div className="mt-5">
                                        <Button
                                            type={'submit'}
                                            className={'w-full h-[60px] bg-[#cf3bed] hover:bg-[#b535cf] hover:-translate-y-[1px] rounded-2xl text-xl text-slate-100'}
                                            iconClassName={'text-xl mr-1'}
                                            handlerSubmit={() => { }}
                                            title={"Submit"}
                                            icon={faCheck}
                                            isShowIcon={false}
                                            isShowTitle={true}
                                        />
                                    </div>
                                </form>
                            </div>
                            <div className="xl:w-[30%] lg:w-[40%] w-full lg:mt-0 mt-4 bg-white relative rounded-xl overflow-hidden">
                                <div className="w-full h-[250px] mb-6 relative bg-cover bg-no-repeat bg-center bg-[url('https://ebz-static.s3.ap-south-1.amazonaws.com/easebuzz-static/upi-credit-cards-v1.png')]">
                                    <div className="absolute left-1/2 -translate-x-1/2 -bottom-4 rounded-full w-[80px] h-[80px] border-2 border-[#cf3bed] border-solid bg-cover bg-center bg-no-repeat bg-[url('https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg')]"></div>
                                </div>
                                <div className="block p-6 w-full">
                                    <div className="sm:flex gap-2 w-full justify-center">
                                        <Button
                                            type={'button'}
                                            className={'sm:w-auto w-full h-[50px] sm:mb-0 mb-2 px-10 hover:-translate-y-[2px] bg-[#1e639f] hover:bg-[#3888cf] rounded-2xl text-white text-md'}
                                            iconClassName={'text-lg text-slate-500 mr-1'}
                                            handlerSubmit={() => { }}
                                            title={"Contact"}
                                            icon={faCheck}
                                            isShowIcon={false}
                                            isShowTitle={true}
                                        />
                                        <Button
                                            type={'button'}
                                            className={'sm:w-auto w-full h-[50px] px-10 hover:-translate-y-[2px] bg-[#289157] hover:bg-[#2e935c] rounded-2xl text-white text-md'}
                                            iconClassName={'text-lg text-slate-500 mr-1'}
                                            handlerSubmit={() => { }}
                                            title={"Message"}
                                            icon={faMessage}
                                            isShowIcon={false}
                                            isShowTitle={true}
                                        />
                                    </div>
                                    <div className="flex gap-4 justify-center my-4">
                                        <div className="block text-center text-slate-500">
                                            <p className="text-lg font-semibold">22</p>
                                            <p>Friends</p>
                                        </div>
                                        <div className="block text-center text-slate-500">
                                            <p className="text-lg font-semibold">10</p>
                                            <p>Photos</p>
                                        </div>
                                        <div className="block text-center text-slate-500">
                                            <p className="text-lg font-semibold">102</p>
                                            <p>Comments</p>
                                        </div>
                                    </div>
                                    <div className="text-center w-full block">
                                        <h1 className="text-2xl font-semibold mb-2 text-slate-600">Mark Davis, <span className="text-[#cf3bed] font-semibold">35</span></h1>
                                        <h2 className="text-lg font-semibold text-slate-500 mb-10">Bucharest, Romania</h2>

                                        <h3 className="text-slate-600 font-semibold mb-2 text-lg">Solution Manager - Creative Tim Officer</h3>
                                        <p className="text-slate-500 text-lg">University of Computer Science</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {

                isCongratulation &&
                    <DialogCongratulation title={'Congratulation?'} setIsCongratulation={handlerToggleIsCongratulation} icon={faCheck} iconClassName={`text-[50px] text-center mx-auto text-[#cf3bed]`} />
                    
            }
        </>
    )
}

export default UserProfile
