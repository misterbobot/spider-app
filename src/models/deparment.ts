export type TOpenHours = {
    days: string;
    hours: string;
}

export type TService = {
    id: number;
    name: string;
    description?: string;
    onlineText?: string;
    averageWaitTime: number;
}

export type TDepartmentWorkLoad = {
    averageWaitTime: number;
}

export type TTicket = {
    id: number;
    user_id: number;
    service: number;
    salePoint: number;
    label: string;
}

export type TDepartment = {
    id: number;
    serviceStaffAmount: number;
    salePointName: string;
    address?: string;
    openHours: TOpenHours[];
    latitude: number;
    longitude: number;
    type: 'office' | 'atm';
    services: number[];
    tickets?: TTicket[];
}

export type TDepartmentWithTravelTimeInfo = TDepartment & {
    distance: number;
    duration: number;
};