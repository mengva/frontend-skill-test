function Image({ src, className, isSrc }: { src: string, className: string, isSrc: boolean }) {
    return (
        <>
            {isSrc ?
                <img src={src} alt="error image" className={className} />
                :
                <img style={{backgroundImage: `url(${src})`}} className={`${className}`} />
            }
        </>
    )
}

export default Image
