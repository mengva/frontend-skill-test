/* eslint-disable @typescript-eslint/no-unsafe-function-type */
import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ButtonDto {
    type: React.HTMLInputTypeAttribute;
    className: string;
    iconClassName: string;
    handlerSubmit: Function;
    title: string;
    icon: IconProp;
    isShowIcon: boolean;
    isShowTitle: boolean;
}


function Button({ type, className, iconClassName, handlerSubmit, title, icon, isShowIcon, isShowTitle }: ButtonDto) {
    return (
        <>
            {
                type === 'submit' ?
                    <button type={type} className={className}>
                        {
                            isShowIcon &&
                                <FontAwesomeIcon icon={icon} className={iconClassName} />
                        }
                        {
                            isShowTitle &&
                                <span>{title}</span>
                        }
                    </button>
                    : <button type={type} onClick={(event: React.FormEvent) => handlerSubmit(event)} className={className}>
                        {
                            isShowIcon &&
                                <FontAwesomeIcon icon={icon} className={iconClassName} />
                        }
                        {
                            isShowTitle &&
                                <span>{title}</span>
                        }
                    </button>
            }
        </>
    )
}

export default Button
