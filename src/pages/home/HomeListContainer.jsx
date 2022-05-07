const HomeListContainer = ({inlayList, bkgClass}) => {
    return (
        <div className="home_list">
            <div className={bkgClass}>
                {inlayList}
            </div>
        </div>
    )
}
export {HomeListContainer}