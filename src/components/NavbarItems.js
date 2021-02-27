import * as AiIcons from "react-icons/ai"
import React from 'react'

const NavbarItems = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-links'
    },
    {
        title: 'Services',
        path: '/services',
        icon: <AiIcons.AiFillChrome />,
        cName: 'nav-links'
    },
    {
        title: 'Products',
        path: '/products',
        icon: <AiIcons.AiFillCode />,
        cName: 'nav-links'
    },
    {
        title: 'Sign Up',
        path: '/sign-up',
        icon: <AiIcons.AiFillCrown />,
        cName: 'nav-links-mobile'
    }
]

export default NavbarItems
