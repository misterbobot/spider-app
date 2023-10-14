import React from "react";
import Sheet from 'react-modal-sheet';
import { Filters } from "../filters/filters";

type FiltersSheetProps = {
    isOpen: boolean;
    onClose: () => void;
}

export const FiltersSheet:React.FC<FiltersSheetProps> = ({
    isOpen,
    onClose
}) => {
    return (
        <>
            <Sheet isOpen={isOpen} onClose={onClose} detent="content-height">
                <Sheet.Container >
                    <Sheet.Header />
                    <Sheet.Content >
                        <Filters />
                    </Sheet.Content>
                </Sheet.Container>
                <Sheet.Backdrop />
            </Sheet>
        </>
    )
}