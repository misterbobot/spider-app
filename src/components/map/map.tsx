import React, { useEffect, useLayoutEffect, useRef } from "react";
import GoogleMapReact from 'google-map-react';
import { DepartmentSheet } from "../departmentSheet/departmentSheet";
import { departmentMock } from "../../mocks/departments";
import { TDepartment } from "../../models/deparment";
import activeIcon from './activeIcon.svg';
import defaultIcon from './defaultIcon.svg';
import { useAppDispatch, useAppSelector } from "../../hooks/store";
import { useGeolocation } from "@uidotdev/usehooks";
import { fetchDepartments } from "../../store/thunks/fetchDepartments";

export const Map: React.FC = () => {
    const yandexMapObj = useRef(null);

    const location = useGeolocation();

    const defaultProps = {
      center: {
          lat: location.latitude || 55.751715,
          lng: location.longitude || 37.583818
      },
      zoom: 13
  };

  const departments = useAppSelector(state => state.departments.departments);
  const dispatch = useAppDispatch();

  useEffect(() => {
    //@ts-ignore
    dispatch(fetchDepartments())
  }, [dispatch]);

  const onDepartmentClick = (department: TDepartment) => {
    setChosenDepartment(department);
    setTimeout(() => {
      setIsSheetOpen(true);
    }, 100);
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