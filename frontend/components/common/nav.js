import { AppBar } from '@mui/material'
import Link from 'next/link'
import { NAV_LINKS } from '../../constants/nav-links'

const Nav = () => (
    <AppBar position='relative' sx={{ py: 4, px: 8 }}>
        {NAV_LINKS.map(({ href, text}) => <Link href={href} key={text}>{text}</Link>)}
    </AppBar>
)

export default Nav
