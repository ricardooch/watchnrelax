import { Plus } from "lucide-react";
import { useState } from "react";
import ComponentsModal from "./ComponentsModal";
import YoutubeEmbed from "./media/YoutubeEmbed";
import type { media } from "../types";

const Component = () => {
    const[media, setMedia] = useState<media>({ type: 0, data: ''});
    const [isActive, setIsActive] = useState(false);

    function handleActiveModal() {
        console.log(isActive ? 'Activado' : 'Desactivado')
        setIsActive(!isActive)
    }
    
    return (
        <div className="relative flex justify-center items-center bg-black w-1/2 border border-blue-950">
            <ComponentsModal isActive={isActive} handleActiveModal={handleActiveModal} media={media.type} setMedia={setMedia} />
            {
                media.type == 0 ? (
                <button className="bg-blue-400/50 p-1 rounded-full" onClick={handleActiveModal}>
                    <Plus color="white"/>
                </button>
                )
                : media.type == 1 && media.data != '' ? (
                    <YoutubeEmbed YoutubeUrl={media.data} />
                )
                : (
                    <div className="bg-blue-400/50 p-1 rounded-full">
                        <Plus color="white"/>
                    </div>
                )
            }
        </div>
    )
}

export default Component;