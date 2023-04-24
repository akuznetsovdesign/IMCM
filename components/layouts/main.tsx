import { Header } from '../header'

//Types
interface MainLayout {
    children: React.ReactNode,
}
//Types

export function MainLayout({children}:MainLayout) {
    return (
        <div className='w-screen h-screen'>
            <Header/>
            {children}
        </div>
    )
}