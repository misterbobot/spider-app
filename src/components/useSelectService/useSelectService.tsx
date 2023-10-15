import { TService } from "../../models/deparment";
import { useSelectableThumbsRow } from "../selectableThumb/selectableThumb";

type TuseSelectableThumbsRowProps = {
    services: TService[];
}

export const useSelectService = (props: TuseSelectableThumbsRowProps) => {
    const {ThumbsRw, selected} = useSelectableThumbsRow({
        options: props.services.map(service => ({
            icon: '',
            activeIcon: '',
            text: service.name
        }))
    });


    return {
        ThumbsRow: ThumbsRw,
        selected
    }
}