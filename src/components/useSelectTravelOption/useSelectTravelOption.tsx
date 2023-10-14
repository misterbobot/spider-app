import bikeWhite from '../../assets/bike-white.png';
import bikeBlack from '../../assets/bike-black.png';
import carWhite from '../../assets/car-white.png';
import carBlack from '../../assets/car-black.png';
import walkWhite from '../../assets/walk-white.png';
import walkBlack from '../../assets/walk-black.png';

import { useSelectableThumbsRow } from "../selectableThumb/selectableThumb";

export const useSelectTravelOption = () => {
    const {ThumbsRw, selected} = useSelectableThumbsRow({
        options: [
            {
                icon: bikeWhite,
                activeIcon: bikeBlack
            },
            {
                icon: carWhite,
                activeIcon: carBlack
            },
            {
                icon: walkWhite,
                activeIcon: walkBlack
            }
        ]
    });

    console.log(selected);

    return {
        ThumbsRow: ThumbsRw,
        selected
    }
}