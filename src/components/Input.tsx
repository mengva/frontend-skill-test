import { memo, useEffect, useState, type RefObject } from "react";
import { emailFormatter } from "../util/EmailFormatter";

/* eslint-disable @typescript-eslint/no-unsafe-function-type */
interface InputDto {
    className: string;
    type: string;
    value: {
        current: string;
    },
    isSubmitError: boolean;
    isSubmitSuccess: boolean;
    name: string;
    readOnly: boolean;
    disable: boolean;
    id: string;
    autoCompleted: string;
    placeholder: string;
    setInputValue: Function;
    useInput: RefObject<HTMLInputElement | null>
}

function Input({ className, isSubmitError, isSubmitSuccess, type, value, name, readOnly, placeholder, disable, id, autoCompleted, setInputValue, useInput }: InputDto) {

    const [isError, setIsError] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [message, setMessage] = useState("");

    const handlerSetIsErrorAndIsSuccess = (isSuccess: boolean) => {
        setIsSuccess(isSuccess);
        setIsError(!isSuccess);
    }

    const handlerChangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {

        setInputValue(event.target?.value?.toLowerCase());

        if (!value?.current) {
            setMessage(`${name} is required`);
            handlerSetIsErrorAndIsSuccess(false);
            return;
        }

        if (type === "password") {
            if (value?.current.length < 6) {
                setMessage(`password must be greater than 6 character`);
                handlerSetIsErrorAndIsSuccess(false);
                return;
            }
        }

        if (type === "email") {
            if (!emailFormatter.test(value?.current)) {
                setMessage(`email invalid format`);
                handlerSetIsErrorAndIsSuccess(false);
                return;
            }
            setMessage("");
            handlerSetIsErrorAndIsSuccess(true);
            return;
        }

        if (value?.current.length < 2) {
            setMessage(`${name} must be greater than 2 character`);
            handlerSetIsErrorAndIsSuccess(false);
            return;
        }

        setMessage("");
        handlerSetIsErrorAndIsSuccess(true);
    }

    useEffect(() => {
        if (isSubmitSuccess) {
            setIsSuccess(false);
            setIsError(false);
            setMessage("");
        }
        if (isSubmitError) {
            setIsError(isSubmitError);
            setIsSuccess(false);
            setMessage(`${name} is required`);
        } else {
            setIsError(isSubmitError);
            setIsSuccess(false);
            setMessage('');
        }
    }, [isSubmitError, name, isSubmitSuccess]);

    return (
        <>
            <input
                ref={useInput}
                onInput={handlerChangeValue}
                onChange={handlerChangeValue}
                className={`${className} ${isError ? '!bg-rose-500/[.2] !caret-rose-500 placeholder:!text-rose-500 !text-rose-500' : isSuccess ? '!bg-[#28915746] !caret-[#289157] placeholder:!text-[#289157] !text-[#289157]' : ''}`}
                type={type}
                readOnly={readOnly}
                disabled={disable}
                autoComplete={autoCompleted}
                name={name}
                id={id}
                placeholder={placeholder}
                value={value?.current}
            />
            <p className={`${isError ? 'text-rose-500 block' : isSuccess ? 'text-[#289157] block' : 'hidden'} text-md mt-1`}>{message}</p>
        </>
    )
}

export default memo(Input);
