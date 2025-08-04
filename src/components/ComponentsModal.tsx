import type { Dispatch, SetStateAction } from "react";
import { mediaList } from "../data/mediaList";

interface ComponentModalProps {
    isActive: boolean,
    handleActiveModal: () => void,
    setMedia: Dispatch<SetStateAction<number>>
}

function ComponentsModal({ isActive, handleActiveModal, setMedia }: ComponentModalProps) {

    function handleSetMedia(id : number) {
        setMedia(id);
        handleActiveModal();
    }

    if(isActive) return (
        <div className=" absolute bg-gray-400/50 h-1/3 w-1/3 z-50">
            {mediaList.map((media, index) => (
                <button key={index} onClick={() => handleSetMedia(media.id)}>
                    {media.name}
                </button>
            ))}
        </div>
    )
    else return
}

export default ComponentsModal;