import { useEffect, useState } from "react";
import "./TooltipWrapper.scss";

const TooltipWrapper = ({ content, direction, positionX, children }) => {
    const [active, setActive] = useState(false);
    const [tipStyle, setTipStyle] = useState("");
    const [tipXLag, setTipXLag] = useState("");

    useEffect(() => {
        if (direction == "top" || "bottom") {
            const XPositionLag = `translateX(${-1 * positionX}%) translateY(0)`;
            setTipStyle(XPositionLag);
            setTipXLag(Math.abs(Math.round((95 - positionX) / 10) * 10));
        }
    })

    const isApply = () => {
        if ((positionX && direction === "top") || (positionX && direction === "bottom")) return true;
        else return false;
    }

    const toggleTip = () => {
        setActive(!active);
    };

    return (
        tipStyle &&
        <div
            className="Tooltip-Wrapper"
            onMouseEnter={toggleTip}
            onMouseLeave={toggleTip}
        >
            {children}
            {active && (
                <div
                    className={"Tooltip-Tip " + (isApply() ? `${direction}-${tipXLag}` : `${direction}`) + ` ${direction || "top"}`}
                    style={{ transform: isApply() ? tipStyle : "" }}
                >
                    {content}
                </div>
            )}
        </div >
    );
};

export default TooltipWrapper;
