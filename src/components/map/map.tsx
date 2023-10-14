import React, { useEffect } from "react";
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

const defaultMapOptions: GoogleMapReact.MapOptions = {
  fullscreenControl: false,
  
};


export const Map: React.FC = () => {

    const geolocation = useGeolocation();
    const location = useLocation();
    const navigate = useNavigate();

    const defaultProps = {
      center: {
          lat: geolocation.latitude || 55.751715,
          lng: geolocation.longitude || 37.583818
      },
      zoom: 13
  };

  const departments = useAppSelector<TDepartment[]>(state => state.departments.departments);
  const filters = useAppSelector(state => state.filters.filters);

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
      const department = departments.find(department => department.salePointName+department.distance === location?.state?.departmentId);
      if (department) {
        onDepartmentClick(department);
        navigate('/map', {
          replace: true,
        })
      }
    }
  }

  // @ts-ignore
  function renderMarkers(map, maps) {
    
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
  }

    const [chosenDepartment, setChosenDepartment] = React.useState<TDepartment | null>(null);
    const [isDepartmentSheetOpen, setIsDepartmentSheetOpen] = React.useState<boolean>(false);
    const [isFiltersOpen, setIsFiltersOpen] = React.useState<boolean>(false);

    return (
        <div style={{ height: '100vh', width: '100%' }} className="relative">
          <div className="absolute z-20 p-2 right-1 flex items-center">
            <div className="mr-2">
              <ClearFiltersButton />
            </div>
            <FiltersButton onClick={() => {setIsFiltersOpen(prev => !prev)}} />
          </div>
          {
            chosenDepartment && <DepartmentSheet isOpen={isDepartmentSheetOpen} onClose={() => setIsDepartmentSheetOpen(false)} department={chosenDepartment} />
          }
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