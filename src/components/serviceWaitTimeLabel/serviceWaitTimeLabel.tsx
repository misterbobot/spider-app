import React from "react";

import Clock from "../../assets/clock.png";

type TServiceWaitTimeLabelProps = {
    waitTime: number;
}

export const ServiceWaitTimeLabel: React.FC<TServiceWaitTimeLabelProps> = ({
    waitTime
}: TServiceWaitTimeLabelProps) => {
    return (
        <div className="flex w-full items-center justify-between">
            <div className="flex items-center">
                    <img src={Clock} alt="clock" />
                    <div className="flex flex-col ml-2 text-text-sm-bold text-primary leading-4">
                        <div>
                            {waitTime}                    
                        </div>
                        <div >
                            минуты
                        </div>
                    </div>
            </div>
            <div className="text-text-s text-black text-right">
                В среднем занимает<br></br> оформление услуги
            </div>
        </div>
    )
}