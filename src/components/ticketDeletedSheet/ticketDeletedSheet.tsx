import React from 'react';
import Sheet from 'react-modal-sheet';
import PrimaryButton from '../buttons/primaryButton';

type TticketDeletedSheetProps = {
    isOpen: boolean;
    onClose: () => void;
}

export const TicketDeletedSheet: React.FC<TticketDeletedSheetProps> = (
    {
        isOpen,
        onClose
    }
) => {
    return (
        <>
            <Sheet isOpen={isOpen} onClose={onClose} detent="content-height">
                <Sheet.Container >
                    <Sheet.Content >
                        <div className='flex flex-col items-center w-full box-border px-4 py-4'>
                            <div className='text-center text-heading-m text-black'>
                                Вы успешно отменили запись
                            </div>
                            <div className='text-center text-text-m text-black'>
                                Вы всегда можете записаться в другое отделение на карте
                            </div>
                            <div className='mt-5 w-full mb-5'>
                                <PrimaryButton disabled={false} title={'ОК'} onClick={onClose} />
                            </div>
                        </div>
                    </Sheet.Content>
                </Sheet.Container>
                <Sheet.Backdrop />
            </Sheet>
        </>
    );
}