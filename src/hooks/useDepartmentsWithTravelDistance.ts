import { TDepartment, TDepartmentWithTravelTimeInfo } from "../models/deparment";
import { useEffect, useState } from "react";

type useDepartmentsWithTravelDistanceProps = {
    departments: TDepartment[];
    userLocation: {
        lat: number;
        lng: number;
    };
    travelMode: 'BICYCLING' | 'DRIVING' | 'WALKING'
}

export const useDepartmentsWithTravelDistance = ({departments, userLocation, travelMode}: useDepartmentsWithTravelDistanceProps) => {
    const [loading, setLoading] = useState(true);

    const [departmentsWithTravelDistance, setDepartmentsWithTravelDistance] = useState<TDepartmentWithTravelTimeInfo[]>([]);
    

    useEffect(() => {
        // @ts-ignore
        const service = new google.maps.DistanceMatrixService();

        const origin1 = { lat: userLocation.lat, lng:userLocation.lng };

        if (!departments.length) return;
        
        const request = {
          origins: [origin1],
          destinations: departments.map(department => ({lat: department.latitude, lng: department.longitude})),
          // @ts-ignore
          travelMode: travelMode==='DRIVING' ? google.maps.TravelMode.DRIVING : google.maps.TravelMode.WALKING ,
          // @ts-ignore
          unitSystem: google.maps.UnitSystem.METRIC,
          avoidHighways: false,
          avoidTolls: false,
        };

        

        // @ts-ignore
        service.getDistanceMatrix(request).then((response) => {
            const departmentsWithTravelDistancee = departments.map((department, index) => {
                const distance = response.rows[0].elements[index].distance.value;
                const duration = response.rows[0].elements[index].duration.value;
                return {
                    ...department,
                    distance: distance/1000,
                    duration: duration/60
                }
            }
            );

            setDepartmentsWithTravelDistance(departmentsWithTravelDistancee);
            setLoading(false);
        });
    }, [departments, travelMode, userLocation]);
        
    return {
        loading,
        departmentsWithTravelDistance
    }
        
}