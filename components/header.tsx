import React, {useState} from 'react';
import { Button } from './button'
import { Modal } from './modal';

export function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
        <div className='w-full h-fit flex flex-row items-center justify-end fixed top-0 left-0 p-[15px] z-[18]'>
            <div className='w-fit h-fit flex items-center justify-center'>
                <div onClick={() => setIsOpen(!isOpen)} className='w-fit h-fit cursor-pointer'>
                    <Button bg='bg-white' txcolor='text-blue' border='border-white' shadow='shadow-sm' title='О проекте'/>
                </div>
            </div>
        </div>
        <Modal isOpen={isOpen} setIsOpen={setIsOpen}/>
        </>
    )
}