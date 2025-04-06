import home from '../assets/images/home.svg';
import analytics from '../assets/images/analytics.svg';
import payments from '../assets/images/payments.svg';
import group from '../assets/images/group.svg';
import apps from '../assets/images/apps.svg';
import product from '../assets/images/product.svg'
import product2 from '../assets/images/product2.svg'
import product3 from '../assets/images/product3.svg'
import product4 from '../assets/images/product4.svg'


export const navLinks = [
    {
        name: 'Home',
        icon: home,
    },
    {
        name: 'Analytics',
        icon: analytics,
    },
    {
        name: 'Revenue',
        icon: payments,
    },
    {
        name: 'CRM',
        icon: group,
    },
    {
        name: 'Apps',
        icon: apps,
    },
]

export const AppBarImages = [
    {
        imageURL: product,
        alt: 'Product 1',
        tooltip: 'Link in Bio',
    },
    {
        imageURL: product2,
        alt: 'Product 2',
        tooltip: 'Store',
    },
    {
        imageURL: product3,
        alt: 'Product 3',
        tooltip: 'Media Kit',
    },
    {
        imageURL: product4,
        alt: 'Product 4',
        tooltip: 'Invoicing',
    },
]

export const NavbarAppsMenuItems = [
    {
        name: 'Link in Bio',
        icon: product,
        description: 'Manage your Link in Bio',
    },
    {
        name: 'Store',
        icon: product2,
        description: 'Manage your Store activities',
    },
    {
        name: 'Media Kit',
        icon: product3,
        description: 'Manage your Media Kit',
    },
    {
        name: 'Invoicing',
        icon: product4,
        description: 'Manage your Invoices',
    },
]