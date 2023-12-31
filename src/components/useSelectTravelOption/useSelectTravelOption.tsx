
import carWhite from '../../assets/car-white.png';
import carBlack from '../../assets/car-black.png';
import walkWhite from '../../assets/walk-white.png';
import walkBlack from '../../assets/walk-black.png';

import { useSelectableThumbsRow } from "../selectableThumb/selectableThumb";

export const useSelectTravelOption = () => {
    const {ThumbsRw, selected} = useSelectableThumbsRow({
        options: [

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

    return {
        ThumbsRow: ThumbsRw,
        selected
    }
}