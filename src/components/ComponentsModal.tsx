import { useState } from "react";
import { mediaList } from "../data/mediaList";
import { trafficCamsList } from "../data/trafficCamsList"
import type { GenericList, media } from "../types";

interface ComponentModalProps {
    isActive: boolean,
    handleActiveModal: () => void,
    media: number,
    setMedia: React.Dispatch<React.SetStateAction<media>>
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

    async function handleSetMedia(media : number) {
        await setMedia(prev => ({
            ...prev,
            type: media
        }))
        setUniqueCountries(Array.from(new Set(trafficCamsList.map(cam => cam.name))))
        handleSetIsActiveSubmenu();
        handleActiveModal();
    }

    function handlePlayTrafficCam(url : string) {
        setMedia(prev => ({
            ...prev,
            data: url
        }))
        handleSetIsActiveCountryMenu();
    }

    if(isActive) return (
        <div className="absolute bg-blue-400/10 h-2/3 w-2/3 z-50 rounded-sm">
            <div className="flex flex-col justify-start items-start px-4 py-2 text-white">
                {
                    mediaList.map((media, index) => (
                        <button 
                            key={index} 
                            onClick={() => handleSetMedia(media.id)}
                            className="px-4 py-2 rounded-md w-full text-start font-regular text-sm mb-2 hover:cursor-pointer hover:bg-blue-900/10"
                        >
                            {media.name}
                        </button>
                ))}
            </div>
        </div>
    )
    if(isActiveSubMenu) return (
        <div className="absolute bg-blue-400/10 h-2/3 w-2/3 z-50 rounded-sm">
            <div className="flex flex-col justify-start items-start px-4 py-2 text-white">
                {
                    media == 1 ? (
                        uniqueCountries.map((country, index) => (
                            <button 
                                key={index} 
                                className="px-4 py-2 rounded-md w-full text-start font-regular text-sm mb-2 hover:cursor-pointer hover:bg-blue-900/10"
                                onClick={() => handleSelectCountry(country)}
                            >
                                {country}
                            </button>
                        ))
                    ) : (<p>empty</p>)
                }
            </div>
        </div>
    )
    if(isActiveCountryMenu) return (
        <div className="absolute bg-blue-400/10 h-2/3 w-2/3 z-50 rounded-sm">
            <div className="flex flex-col justify-start items-start px-4 py-2 text-white">
                {
                    camsPerCountry.map((cam, index) => (
                        <button 
                            key={index}
                            onClick={() => handlePlayTrafficCam(cam.url)}
                            className="px-4 py-2 rounded-md w-full text-start font-regular text-sm mb-2 hover:cursor-pointer hover:bg-blue-900/10"
                        >
                            { cam.description } 
                        </button>
                    ))
                }
            </div>
        </div>
    )
    else return
}

export default ComponentsModal;