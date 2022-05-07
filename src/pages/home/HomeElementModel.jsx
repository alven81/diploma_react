const HomeElementModel = ({bkgClass}) => {
    console.log(bkgClass);
    return (
        <div className={bkgClass} >
            <div >
                <p><img src="/assets/img/modeling.png" alt=""/></p>
            </div>
        </div>

    )
}
export {HomeElementModel}