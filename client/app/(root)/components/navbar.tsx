import { Button } from '@/components/ui/button'
import { BookOpenIcon, HomeIcon, Search, TrophyIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    const navItems = [
        {
            icon: HomeIcon,
            label: 'Home',
            href: '/'
        },
        {
            icon: TrophyIcon,
            label: "Tournament",
            href: "/tournament"
        },
        {
            icon: BookOpenIcon,
            label: "Education",
            href: "/education"
        }, 
    ]
    return (
        <div className="fixed top-0 left-0 w-full h-16 border-b border-green-500 z-50 bg-black">
            <div className="flex items-center justify-between h-full px-4 max-w-7xl mx-auto">
                <div className="flex items-center gap-2">
                    <Image src="/navIcon.png" alt="logo" width={100} height={100} />
                </div>
                <div className="flex items-center gap-6 font-mono text-green-400">
                    {navItems.map((item) => (
                        <Link
                            href={item.href}
                            key={item.label}
                            className="flex items-center gap-2 hover:text-green-300 transition-colors duration-200"
                        >
                            <item.icon className="w-5 h-5" />
                            <span className="text-sm">{item.label}</span>
                        </Link>
                    ))}
                    <Search className="w-5 h-5 cursor-pointer hover:text-green-300 transition-colors duration-200" />
                    <div className="flex items-center gap-2">
                        <Button
                            variant="outline"
                            className="text-sm font-mono border-green-500 text-green-400 hover:text-green-400 cursor-pointer hover:bg-green-500 transition"
                        >
                            Login
                        </Button>
                        <Button
                            variant="outline"
                            className="text-sm font-mono border-green-500 text-green-400 hover:bg-green-500 cursor-pointer transition hover:text-green-400"
                        >
                            Register
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
