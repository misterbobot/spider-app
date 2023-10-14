import React from "react";
import { TDepartment } from "../../models/deparment";
import { Department } from "../department/department";
import Sheet from 'react-modal-sheet';

type DepartmentSheetProps = {
    department: TDepartment;
    isOpen: boolean;
    onClose: () => void;
}

export const DepartmentSheet: React.FC<DepartmentSheetProps> = ({department, isOpen, onClose}) => {
    return (
        <>
            <Sheet isOpen={isOpen} onClose={onClose} detent="content-height" >
                <Sheet.Container >
                    <Sheet.Content >
                        <Department department={department} />
                    </Sheet.Content>
                </Sheet.Container>
                <Sheet.Backdrop />
            </Sheet>
            
        </>
    );
}