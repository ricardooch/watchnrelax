import type { MouseEventHandler } from 'react'
import { CirclePlus } from 'lucide-react'

interface MainButtonProps {
    handleActiveModal: MouseEventHandler<HTMLButtonElement>
}

function MainButton({handleActiveModal} : MainButtonProps) {

    return (
        <header className='flex justify-end mr-8'>
            <button 
                className='bg-white/50 rounded-b-full p-1 hover:cursor-pointer'
                onClick={handleActiveModal}
            >
                <CirclePlus color='white' />
            </button>
        </header>
    )
}

export default MainButton