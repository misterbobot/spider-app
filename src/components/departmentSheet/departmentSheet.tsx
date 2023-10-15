import React from "react";
import { TDepartment } from "../../models/deparment";
import { Department } from "../department/department";
import Sheet from 'react-modal-sheet';

type DepartmentSheetProps = {
    department: TDepartment;
    isOpen: boolean;
    onClose: () => void;
    isInjected?: boolean;
}

export const DepartmentSheet: React.FC<DepartmentSheetProps> = ({department, isOpen, onClose, isInjected}) => {
    return (
        <>
            <Sheet isOpen={isOpen} onClose={onClose} detent="content-height" >
                <Sheet.Container >
                    <Sheet.Content >
                        <Department isInjected={isInjected} department={department} />
                    </Sheet.Content>
                </Sheet.Container>
                <Sheet.Backdrop />
            </Sheet>
            
        </>
    );
}