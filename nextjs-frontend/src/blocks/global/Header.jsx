import React from 'react'
import header from '@/globalData/header.json'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
    return (
        <div className='flex flex-row justify-between items-center w-screen px-6 py-4'>
            <div className='relative h-10'>
                <Image src={header.logo.url} fill className='object-contain' />
            </div>
            <nav>
                <ul className='flex flex-row gap-4'>
                    {header.NavLinks.map((link) => {
                        return (
                            <li>
                                <Link href={link.link} >
                                    {link.label}
                                </Link>
                            </li>

                        )
                    }
                    )}
                </ul>
            </nav>
        </div>
    )
}
