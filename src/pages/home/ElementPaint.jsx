const ElementPaint = ({bkgClass}) => {
    console.log(bkgClass);
    return (
        <>
            <div className={bkgClass} >
                <p><img src="/assets/img/paint.png" alt=""/></p>
            </div>
        </>

    )
}
export {ElementPaint}