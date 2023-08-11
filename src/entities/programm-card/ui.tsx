import classNames from "classnames";
import { FC } from "react";

type ProgrammCard = {
    name: string;
    description: string;
    isActive?: boolean;
    icon: React.ReactNode
};

export const ProgrammCard: FC<ProgrammCard> = ({ name, description, icon, isActive = false }) => {
    const classes = classNames(
        "p-[40px_24px] rounded-[12px] w-[320px] h-[240px] flex-shrink-0",
        {
            ["bg-[#097FD9]"]: isActive,
            ["bg-[#0D0D0D]"]: !isActive
        });
    return (
        <div className={classes}>

            <div className="mb-[24px]">{icon}</div>
            <div className="text-[24px] font-[600] mb-[8px] text-[#fff]">{name}</div>
            <div className="text-[16px] font-[400] mb-[8px] text-[#fff]">{description}</div>
        </div>
    );
};