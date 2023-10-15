import React, { useCallback, useEffect, useMemo, useRef } from "react";
import GoogleMapReact from 'google-map-react';
import { DepartmentSheet } from "../departmentSheet/departmentSheet";
import { TDepartment } from "../../models/deparment";
import activeIcon from './activeIcon.svg';
import defaultIcon from './defaultIcon.svg';
import { useAppSelector } from "../../hooks/store";
import { useGeolocation } from "@uidotdev/usehooks";
import { filterDepartments } from "../../utils/filterDepartments";
import { FiltersButton } from "../buttons/filtersButtons/filtersButton";
import { ClearFiltersButton } from "../buttons/filtersButtons/clearFiltersButton";
import { FiltersSheet } from "../filtersSheet/filtersSheet";
import { useLocation, useNavigate } from "react-router-dom";
import { ListButton } from "../listButton/listButton";
import { DepartmentsListBottomSheet } from "../departmentsListBottomSheet/departmentsListBottomSheet";
import blueDot from '../../assets/bluedot.png'
import navigateIcon from '../../assets/navigate.png'

const defaultMapOptions: GoogleMapReact.MapOptions = {
  fullscreenControl: false,
  
};

type TMapProps = {
  isInjected?: boolean;
}


export const Map: React.FC<TMapProps> = ({
  isInjected
}) => {

    const geolocation = useGeolocation({enableHighAccuracy: true});
    const location = useLocation();
    const navigate = useNavigate();


  const departments = useAppSelector<TDepartment[]>(state => state.departments.departments);
  const filters = useAppSelector(state => state.filters.filters);
  const mapRef = useRef<GoogleMapReact | null>(null);
  const userMarketRef = useRef< unknown | null>(null);

  const filteredDepartments = filterDepartments(departments, filters);

  const onDepartmentClick = (department: TDepartment) => {
    setChosenDepartment(department);
    setTimeout(() => {
      setIsDepartmentSheetOpen(true);
    }, 100);
  }

  const closeSheet = () => {
    setChosenDepartment(null);
    setIsDepartmentSheetOpen(false);
  }

  const openDepaertmentFromUrl = () => {
    if (location?.state?.departmentId) {
      const department = departments.find(department => department.id === location?.state?.departmentId);
      if (department) {
        onDepartmentClick(department);
        navigate('/map', {
          replace: true,
        })
      }
    }
  }

  const userLocation = useMemo(() => {
    return {
        lat: geolocation.latitude || 55.751715,
        lng: geolocation.longitude || 37.583818
    }}, [geolocation.latitude, geolocation.longitude])

    const defaultProps = {
      center: {
          lat: userLocation.lat,
          lng: userLocation.lng
      },
      zoom: 13
  };

  useEffect(() => {
    // @ts-ignore
    userMarketRef.current?.setMap(null);

    // @ts-ignore
    const userLocationMarker = new window.google.maps.Marker({
      icon: blueDot,
      map: mapRef.current,
      position: {
        lat: userLocation.lat,
        lng: userLocation.lng
      },
    });

    userMarketRef.current = userLocationMarker;
  }, [userLocation.lat, userLocation.lng]);

  const centerOnUserPosition = useCallback(() => {
    // @ts-ignore
    mapRef.current?.panTo(userLocation);
  }, [userLocation])

  // @ts-ignore
  function renderMarkers(map, maps) {

      mapRef.current = map;
    
      filteredDepartments.map((deparment) => {
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

      const userLocationMarker = new maps.Marker({
        icon: blueDot,
        map,
        position: {
          lat: userLocation.lat,
          lng: userLocation.lng
        },
      });
      userMarketRef.current = userLocationMarker;
  }

    const [chosenDepartment, setChosenDepartment] = React.useState<TDepartment | null>(null);
    const [isDepartmentSheetOpen, setIsDepartmentSheetOpen] = React.useState<boolean>(false);
    const [isDepartmentsListOpen, setIsDepartmentsListOpen] = React.useState<boolean>(false);
    const [isFiltersOpen, setIsFiltersOpen] = React.useState<boolean>(false);

    return (
        <div style={{ height: '100%', width: '100%' }} className="fixed">
          <div className="absolute z-20 p-2 right-0 flex items-center">
            <div className="mr-2">
              <ClearFiltersButton />
            </div>
            <FiltersButton onClick={() => {
              setIsFiltersOpen(prev => !prev)
            }} />
            
          </div>
          <div className="absolute z-20 p-2 right-0 bottom-[120px] flex items-center">
            <ListButton onClick={() => {setIsDepartmentsListOpen(prev => !prev)}} />
          </div>
          <div className="absolute z-20 p-2 right-0 bottom-[180px] flex items-center">
          <div className="h-12 w-12 box-border bg-white rounded-full relative" onClick={centerOnUserPosition}>
                <img src={navigateIcon} className="h-10 w-8 pt-2 ml-2"  />
            </div>
          </div>
          {
            chosenDepartment && <DepartmentSheet isInjected={isInjected} isOpen={isDepartmentSheetOpen} onClose={() => setIsDepartmentSheetOpen(false)} department={chosenDepartment} />
          }
          <DepartmentsListBottomSheet openDepartmentSheet={(dep) => onDepartmentClick(dep)} isOpen={isDepartmentsListOpen} onClose={() => setIsDepartmentsListOpen(false)} departments={filteredDepartments} />
          <FiltersSheet isOpen={isFiltersOpen} onClose={() => setIsFiltersOpen(false)} />
            <GoogleMapReact
            bootstrapURLKeys={{ key: "AIzaSyCZm1tqhSDkAZIpZ03yodGxf6t5l1s1CXo" }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
            onGoogleApiLoaded={({map, maps}) => renderMarkers(map, maps)}
            options={defaultMapOptions }
            onDrag={closeSheet}
            key={filteredDepartments.length}
            onTilesLoaded={openDepaertmentFromUrl}
            >

            </GoogleMapReact>
      </div>
    );
}