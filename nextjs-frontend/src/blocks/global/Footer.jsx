import React from 'react'
import footer from '@/globalData/footer.json'
import Link from 'next/link'

export default function Footer() {
    return (
        <div className='w-screen px-6 py-4'>
            <ul className='flex flex-row gap-4'>
            {
                footer.bottomNavLinks.map((link) => {
                    return (
                        <li>
                            <Link href={link.link}  className='text-sm text-gray-500 hover:text-gray-700'>{link.label}</Link>
                        </li>
                    )
                })
            }
            </ul>
        </div>
    )
}
