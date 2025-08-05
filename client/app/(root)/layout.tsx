import { ChildProps } from '@/types'
import React from 'react'
import Navbar from './components/navbar'

const MainLayout = ({ children }: ChildProps) => {
    return (
        <div>
            <nav>
                <Navbar />
            </nav>
            <main>
                {children}
            </main>
        </div>
    )
}

export default MainLayout