import React, { useMemo } from 'react';
import Sheet from 'react-modal-sheet';
import { useNavigate } from 'react-router-dom';
import { TDepartment } from '../../models/deparment';
import { DepartmentTicketRegisterSuccessSheet } from '../departmentTicketRegisterSuccessSheet/departmentTicketRegisterSuccessSheet';
import { useSelectService } from '../useSelectService/useSelectService';
import { useAppSelector } from '../../hooks/store';
import PrimaryButton from '../buttons/primaryButton';
import { gemerateRandomTicketLabel } from '../../utils/generateTicketLabel';


type ApplyTicketSheetProps = {
    isOpen: boolean;
    onClose: () => void;
    department: TDepartment;
}

export const ApplyTicketSheet: React.FC<ApplyTicketSheetProps> = ({
    isOpen,
    onClose,
    department
}) => {
    const navigate = useNavigate();

    const [isSuccessSheetVisible, setIsSuccessSheetVisible] = React.useState<boolean>(false);
    const services = useAppSelector (state => state.services.services).all;

    const depServices = useMemo(() => {
        return services.filter(service => department.services.includes(service.id))
    }, [department.services, services])

    const {ThumbsRow, selected} = useSelectService({services: depServices});

    const label = useMemo(() => {
        return gemerateRandomTicketLabel();
    }, []);
    
    const onRequestTicketClick = () => {
        fetch('http://158.160.111.178:8000/tickets/', {
            method: 'POST',
            body: JSON.stringify({
                salePoint: department.id,
                user_id: localStorage.getItem('uid'),
                service: depServices[selected].id,
                label
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        setIsSuccessSheetVisible(true)
    };

    const onSuccessSheetClose = () => {
        navigate('/queue', {replace: true})
        setIsSuccessSheetVisible(false);
    }



    return (
        <>

            <Sheet isOpen={isOpen} onClose={onClose} detent="content-height">
                <Sheet.Container >
                    <Sheet.Content >
                    <div className='p-3'>
                            <div className="flex items-start flex-col">
                                <div className="text-black text-heading-m ">
                                    Запись в электронную очередь
                                </div>
                                <div className="text-black text-text-m mt-10">
                                    Выберите услугу
                                </div>
                                <div className='mt-4 w-full overflow-scroll whitespace-nowrap'>
                                    {ThumbsRow}
                                </div>
                                <div className='w-full mt-10'>
                                    <PrimaryButton title={'Записаться'} onClick={onRequestTicketClick} disabled={false} />
                                </div>

                            </div>
                            <DepartmentTicketRegisterSuccessSheet onClose={onSuccessSheetClose} isOpen={isSuccessSheetVisible}  />
                        </div>
                    </Sheet.Content>
                </Sheet.Container>
                <Sheet.Backdrop />
            </Sheet>

        </>
    );
}