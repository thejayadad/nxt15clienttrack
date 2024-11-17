import React from 'react'
import Logo from '../ui/logo'
import AuthLinks from './auth-links'
import UserLinks from './user-links'
import MobileMenu from './mobile-menu'

const Header = () => {
  return (
    <header className='w-full border-b'>
        <nav className='flex items-center max-w-screen-lg mx-auto p-4 justify-between'>
            <div className='flex items-center space-x-3'>
                <Logo />
                <AuthLinks />
            </div>
            <div className='flex items-center space-x-3'>
                <UserLinks
                />
                <div>LogOut</div>
                <div>
                    <MobileMenu />
                </div>
            </div>
        </nav>
    </header>
  )
}

export default Header