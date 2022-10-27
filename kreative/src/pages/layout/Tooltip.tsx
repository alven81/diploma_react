import React from "react";
import { useEffect, useState } from "react";

export type TDirection = "top" | "bottom" | "left" | "right";

type Enumerate<N extends number, Acc extends number[] = []> = Acc['length'] extends N
    ? Acc[number]
    : Enumerate<N, [...Acc, Acc['length']]>

type IntRange<F extends number, T extends number> = Exclude<Enumerate<T>, Enumerate<F>>

export type TContentPositionX = IntRange<1, 100>

interface ITooltip {
    content: string;
    direction?: TDirection;
    contentPositionX: TContentPositionX;
    children: React.ReactNode;
}

/**
 * Tooltip params:
 * @param props.content Tooltip's content.
 * @param props.direction Placing of tooltips, available: ```top/bottom/left/right```. Optional parameter. Default - ```top```.
 * @param props.contentPositionX You can manually move content when setted top or bottom direction, available: ```1``` - ```99```. ```50``` - is a middle.
*/

const Tooltip = ({ content, direction, contentPositionX, children }: ITooltip) => {
    const [active, setActive] = useState<boolean>(false);
    const [tooltipStyle, setTooltipStyle] = useState<any>("");
    const [tooltipXMove, setTooltipXMove] = useState<any>("");

    useEffect(() => {
        setTooltipStyle(`translateX(${-1 * contentPositionX}%) translateY(0)`);
        setTooltipXMove(Math.abs(Math.round((95 - contentPositionX) / 10) * 10));
    })

    const usingAdditionalStyle = (): boolean => (contentPositionX && direction === "top") || (contentPositionX && direction === "bottom");

    const toggleTooltip = () => setActive(prev => !prev);

    return (
        tooltipStyle &&
        <div
            data-testid="TooltipWrapperContainer"
            className="tooltip-wrapper"
            onMouseEnter={toggleTooltip}
            onMouseLeave={toggleTooltip}
        >
            {children}
            {
                active &&
                (
                    <div
                        data-testid="TooltipWrapperContent"
                        className={"tooltip-tip " + (usingAdditionalStyle() ? `${direction}-${tooltipXMove}` : `${direction}`) + ` ${direction || "top"}`}
                        style={{ transform: usingAdditionalStyle() ? tooltipStyle : "" }}
                    >
                        {content}
                    </div>
                )
            }
        </div >
    );
};

export default Tooltip;
