import { Plus } from "lucide-react";
import { useState } from "react";
import ComponentsModal from "./ComponentsModal";
import YoutubeEmbed from "./media/YoutubeEmbed";

const Component = () => {
    const[media, setMedia] = useState(0);
    const [isActive, setIsActive] = useState(false);

    function handleActiveModal() {
        console.log(isActive ? 'Activado' : 'Desactivado')
        setIsActive(!isActive)
    }
    
    return (
        <div className="flex justify-center items-center bg-black w-1/2 border border-blue-950">
            <ComponentsModal isActive={isActive} handleActiveModal={handleActiveModal} setMedia={setMedia} />
            {
                media == 0 ? (
                <button className="bg-blue-400/50 p-1 rounded-full" onClick={handleActiveModal}>
                    <Plus color="white"/>
                </button>
                )
                : media == 1 ? (
                    <YoutubeEmbed YoutubeUrl="rqBfiegG5qU" />
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