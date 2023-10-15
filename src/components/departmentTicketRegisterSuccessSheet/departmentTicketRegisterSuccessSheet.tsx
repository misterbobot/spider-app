import React from 'react';
import Sheet from 'react-modal-sheet';
import SuccessIcon from '../../assets/success.png';
import PrimaryButton from '../buttons/primaryButton';

type DepartmentTicketRegisterSuccessSheetProps = {
    isOpen: boolean;
    onClose: () => void;
}

export const DepartmentTicketRegisterSuccessSheet: React.FC<DepartmentTicketRegisterSuccessSheetProps> = (
    {
        isOpen,
        onClose
    }
) => {
    return (
        <>
            <Sheet isOpen={isOpen} onClose={onClose} detent="content-height">
                <Sheet.Container >
                    <Sheet.Header />
                    <Sheet.Content >
                        <div>
                            <div className='flex flex-col items-center w-full box-border px-4'>
                            <img src={SuccessIcon} className='h-[200px] w-[200px]' />
                                <div className='text-center text-heading-m text-black'>
                                    Вы успешно встали в очередь
                                </div>
                                <div className='text-center text-text-m text-black'>
                                    Отслеживайте статус своего талона на странице электронной очереди
                                </div>

                                <div className='text-text-m text-black text-center mt-10'>
                                    А здесь можно вставить рекламу чего-то нового и крутого от ВТБ =)
                                </div>

                                <div className='w-full mt-10  mb-20'>
                                    <PrimaryButton title={'К очереди'} onClick={onClose} disabled={false} />
                                </div>
                            </div>
                        </div>
                    </Sheet.Content>
                </Sheet.Container>
                <Sheet.Backdrop />
            </Sheet>
        </>
    );
}