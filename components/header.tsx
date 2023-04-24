import { Button } from './button'

export function Header() {
    return (
        <div className='w-full h-fit flex flex-row items-center justify-end fixed top-0 left-0 p-[15px]'>
            <div className='w-fit h-fit flex items-center justify-center'>
                <Button bg='bg-white' txcolor='text-blue' border='border-white' shadow='shadow-sm' title='О проекте'/>
            </div>
        </div>
    )
}