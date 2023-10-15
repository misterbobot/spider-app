import React, { useCallback, useEffect } from "react";
import { fetchDepartments } from "../../store/thunks/fetchDepartments";
import { useAppDispatch, useAppSelector } from "../../hooks/store";
import { deleteMyTicketThunk } from "../../store/thunks/deleteMyTicket";
import woman3d from '../../assets/woman3d.png';
import { calculateDepartmentAvgWaitTime } from "../../utils/calculateDepartmentAvgWaitTime";
import { TicketDeletedSheet } from "../../components/ticketDeletedSheet/ticketDeletedSheet";
import { useNavigate } from "react-router-dom";
import { WideDepartmentCard } from "../../components/wideDepartmentCard/wideDepartmentCard";

export const EQueuePage: React.FC = () => {

    const dispatch = useAppDispatch();

    const userTicket = useAppSelector(state => state.departments.userTicket);
    const departments = useAppSelector(state => state.departments.departments);
    const isDepartmentsLoading = useAppSelector(state => state.departments.isLoading);
    const services = useAppSelector(state => state.services.services).all;

    const navigate = useNavigate();

    const uticketDepartment = departments.find(x => x.id === userTicket?.salePoint);

    const [isTicketDeletedSheetOpen, setIsTicketDeletedSheetOpen] = React.useState(false);

    useEffect(() => {
        //@ts-ignore
        dispatch(fetchDepartments())
    }, [dispatch]);

    const deleteMyTicket = useCallback(() => {
        setIsTicketDeletedSheetOpen(true);
        //@ts-ignore
        dispatch(deleteMyTicketThunk(userTicket?.id))
    }, [dispatch, userTicket?.id]);

    return (
        <div className="p-4">
            <div className="text-heading-m text-primary">
                Электронная очередь
            </div>
            {isDepartmentsLoading ? (
                <>
                    <div className="text-black">
                        Загрузка...
                    </div>
                </>
            ) :
                userTicket && uticketDepartment ? (
                    <>
                    <TicketDeletedSheet isOpen={isTicketDeletedSheetOpen} onClose={() => {
                        navigate('/map', {replace: true});
                        // @ts-ignore
                        dispatch(fetchDepartments())
                    }} />
                        <div className="text-black ">
                            Вы стоите в очереди. Время ожидания составит примерно {calculateDepartmentAvgWaitTime(uticketDepartment, services)} минут
                        </div>
                        <div className="text-black">
                            Номер талона: <b>{userTicket.label}</b>
                        </div>
                        <div className="text-black">
                            Ваше отделение:
                        </div>
                        <div className="border border-primary border-solid rounded-2xl text-white p-3" onClick={
                            () => {
                                navigate(`/map`, {replace: true, state: {
                                    departmentId: uticketDepartment.id
                                }})
                            }
                        }>
                            <WideDepartmentCard department={uticketDepartment}  />
                        </div>
                        <div className="border border-solid border-red text-red rounded-2xl text-center py-3 mt-3" onClick={deleteMyTicket}>
                            Отменить запись
                        </div>
                        <div className="mt-4 text-black">
                            Очередь:
                        </div>
                        <div className="max-h-[400px] overflow-scroll">
                        {
                            uticketDepartment.tickets?.map((ticket, index) => (
                                <div className="border border-primary border-solid text-primary rounded-2xl mt-3 py-3 text-center">
                                    {ticket.label} {ticket.id === userTicket.id && <span className="text-black">(Вы)</span>}
                                </div>
                            ))
                        }
                        </div>
                    </>
                    
                ) : (
                    <div className="mt-10 flex items-center flex-col">
                        <img src={woman3d} alt="woman3d" className="h-[300px]" />
                        <div className="text-heading-m text-black">
                            Вы пока не в очереди
                        </div>
                        <div className="text-black text-center">
                            Вы можете записаться в любое отделение на карте
                        </div>
                    </div>
                )
            }
        </div>
    );
}