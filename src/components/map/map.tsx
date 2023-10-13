import React, { useEffect, useLayoutEffect, useRef } from "react";
import GoogleMapReact from 'google-map-react';
import { DepartmentSheet } from "../departmentSheet/departmentSheet";
import { departmentMock } from "../../mocks/departments";
import { TDepartment } from "../../models/deparment";
import activeIcon from './activeIcon.svg';
import defaultIcon from './defaultIcon.svg';
import { useAppDispatch, useAppSelector } from "../../hooks/store";
import { fetchDepartments } from "../../store/thunks/fetchDepartments";

export const Map: React.FC = () => {
    const yandexMapObj = useRef(null);

    const defaultProps = {
      center: {
          lat: 55.751715,
          lng: 37.583818
      },
      zoom: 11
  };

  const departments = useAppSelector(state => state.departments.departments);
  
  console.log(departments);

  const dispatch = useAppDispatch();

  useEffect(() => {
    //@ts-ignore
    dispatch(fetchDepartments())
  }, [dispatch]);

  const onDepartmentClick = (department: TDepartment) => {
    setChosenDepartment(department);
    setIsSheetOpen(true);
  }


  // @ts-ignore
  function renderMarkers(map, maps) {
    
      departments.map((deparment) => {
        const {type, latitude, longitude} = deparment;
          const marker = new maps.Marker({
              position: {
                  lat: latitude,
                  lng: longitude
              },
              map,
              icon: type === 'atm' ? activeIcon : defaultIcon,
              title: 'Hello World!',
          });

          marker.addListener("click", () => {
            onDepartmentClick(deparment);
          });

          return marker;
      })
  }

    const [chosenDepartment, setChosenDepartment] = React.useState<TDepartment | null>(null);
    const [isSheetOpen, setIsSheetOpen] = React.useState<boolean>(false);

    return (
        <div style={{ height: '100vh', width: '100%' }}>
          {
            chosenDepartment && <DepartmentSheet isOpen={isSheetOpen} onClose={() => setIsSheetOpen(false)} department={chosenDepartment} />
          }
            <GoogleMapReact
            bootstrapURLKeys={{ key: "" }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
            onGoogleApiLoaded={({map, maps}) => renderMarkers(map, maps)}
            >

            </GoogleMapReact>
      </div>
    );
}