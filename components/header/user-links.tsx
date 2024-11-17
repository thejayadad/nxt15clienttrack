import React from 'react'
import AuthLinkItems from './auth-link-item'

const routes = [
    {
        label: 'MyBooks',
        href: '/dashboard/mybooks',

    },
    {
        label: 'MyEvents',
        href: '/dashboard/myevents',

    },

]

const UserLinks = () => {
  return (
    <div
    className='hidden md:block items-center space-x-3'
    >
            {routes.map(route => (
            <AuthLinkItems
            label={route.label}
            href={route.href}
            key={route.label}
            />
        ))}
    </div>
  )
}

export default UserLinks