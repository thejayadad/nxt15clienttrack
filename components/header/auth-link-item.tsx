'use client'
import Link from 'next/link';
import React from 'react'
import {usePathname} from "next/navigation"



interface Props {
    label: string;
    href: string;
}

const AuthLinkItems = ({label, href}: Props) => {
    const pathname = usePathname()
    const isActive = (pathname === href)
  return (
    <Link
    className={`text-primary ${isActive ? 'text-purple-600 font-bold' : 'text-gray-600'}`}
    key={href}
    href={href}>
        {label}
    </Link>
  )
}

export default AuthLinkItems