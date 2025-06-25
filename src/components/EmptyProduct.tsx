import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";

interface EmptyProductDto {
    title: string;
    icon: IconProp
}

function EmptyProduct({title, icon}: EmptyProductDto) {
  return (
    <div style={{height: `calc(95vh - 140px)`}} className="w-full flex justify-center items-center bg-slate-200 rounded-3xl">
        <div className="block text-center">
            <div>
                <FontAwesomeIcon icon={icon} className="text-3xl text-slate-500"/>
            </div>
            <div className="mt-4 text-slate-600 text-xl text-center">
                { title }
            </div>
        </div>
      
    </div>
  )
}

export default EmptyProduct
