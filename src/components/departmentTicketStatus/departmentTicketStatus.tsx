import React from "react";
import { useAppSelector } from "../../hooks/store";
import { TDepartment } from "../../models/deparment";
import { DepartmentTicketRegisterSuccessSheet } from "../departmentTicketRegisterSuccessSheet/departmentTicketRegisterSuccessSheet";
import { useNavigate } from "react-router-dom";
import { ApplyTicketSheet } from "../qpplyTicketSheet/qpplyTicketSheet";

export type DepartmentTicketStatusProps = {
    department: TDepartment;
}

export const DepartmentTicketStatus: React.FC<DepartmentTicketStatusProps> = ({department}) => {
    const userTicket = useAppSelector(state => state.departments.userTicket);

    const [isRequestTicketSheetOpen, setIsRequestTicketSheetOpen] = React.useState(false);

    const navigate = useNavigate();

    if (!userTicket) {
        return (
            <div className="flex items-center">
                <ApplyTicketSheet isOpen={isRequestTicketSheetOpen} department={department} onClose={() => setIsRequestTicketSheetOpen(false)} />
                <div className="text-black mr-2">
                    Вы можете встать в электронную очередь и получить талончик
                </div>
                <div className="border-primary border-1 rounded-2xl border-solid border px-3 py-1" onClick={() => setIsRequestTicketSheetOpen(true)}>
                    <div className="text-primary text-text-m-semibold whitespace-nowrap">
                        Встать в очередь
                    </div>
                </div>
            </div>
        );
    };

    if (userTicket && userTicket.salePoint !== department.id) {
        return (
            <div className="flex items-center">
                <div className="text-black mr-2">
                    Сейчас вы стоите в очереди в другой офис. Управлять талоном можно в разделе электронной очереди
                </div>
                <div className="border-primary border-1 rounded-2xl border-solid border px-3 py-1" onClick={() => {
                    navigate('/queue', {replace: true})
                }}>
                    <div className="text-primary text-text-m-semibold whitespace-nowrap">
                        Открыть очередь
                    </div>
                </div>
            </div>
        );

    }

    return (
        <div className="flex items-center">
        <div className="text-black mr-2">
            Номер вашего талона: {userTicket.label}. См подробнее на странице электронной очереди
        </div>
        <div className="border-primary border-1 rounded-2xl border-solid border px-3 py-1" onClick={() => {
            navigate('/queue', {replace: true})
        }}>
            <div className="text-primary text-text-m-semibold whitespace-nowrap">
                Открыть очередь 
            </div>
        </div>
    </div>
    );
}