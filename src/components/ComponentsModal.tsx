import { useState, type Dispatch, type SetStateAction } from "react";
import { mediaList } from "../data/mediaList";
import { trafficCamsList } from "../data/trafficCamsList"
import type { GenericList } from "../types";

interface ComponentModalProps {
    isActive: boolean,
    handleActiveModal: () => void,
    media: number,
    setMedia: Dispatch<SetStateAction<number>>
}

function ComponentsModal({ isActive, handleActiveModal, media, setMedia }: ComponentModalProps) {
    const[isActiveSubMenu, setIsActiveSubMenu] = useState(false);
    const[isActiveCountryMenu, setIsActiveCountryMenu] = useState(false);
    const[uniqueCountries, setUniqueCountries] = useState<string[]>([]);
    const[camsPerCountry, setCamsPerCountry] = useState<GenericList[]>([]);

    function handleSetIsActiveCountryMenu() {
        setIsActiveCountryMenu(!isActiveCountryMenu);
    }

    function handleSetIsActiveSubmenu() {
        setIsActiveSubMenu(!isActiveSubMenu);
    }

    function handleSelectCountry(country : string) {
        handleSetIsActiveSubmenu();

        setCamsPerCountry(trafficCamsList.filter(cam => cam.name == country))
        handleSetIsActiveCountryMenu();
    }

    function handleSetMedia(id : number) {
        setMedia(id);
        setUniqueCountries(Array.from(new Set(trafficCamsList.map(cam => cam.name))))
        handleSetIsActiveSubmenu();
        handleActiveModal();
    }

    if(isActive) return (
        <div className=" absolute bg-gray-400/50 h-2/3 w-2/3 z-50">
            {mediaList.map((media, index) => (
                <button key={index} onClick={() => handleSetMedia(media.id)}>
                    {media.name}
                </button>
            ))}
        </div>
    )
    if(isActiveSubMenu) return (
        <div className=" absolute bg-gray-400/50 h-2/3 w-2/3 z-50">
            {
                media == 1 ? (
                    uniqueCountries.map((country, index) => (
                        <button key={index}>{country}</button>
                    ))
                ) : (<p>empty</p>)
                // media == 1 ? (
                //     trafficCamsList.map((trafficCam, index) => (
                //         <button key={index} onClick={() => handleSelectCountry(trafficCam.name)} >{trafficCam.name}</button>
                //     ))
                // ) : (<p>empty</p>)
            }
        </div>
    )
    if(isActiveCountryMenu) return (
        <div className=" absolute bg-gray-400/50 h-2/3 w-2/3 z-50">
            {
                camsPerCountry.map((cam, index) => (
                    <p key={index}> { cam.description } </p>
                ))
            }
        </div>
    )
    else return
}

export default ComponentsModal;