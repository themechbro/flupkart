import GroupsIcon from '@mui/icons-material/Groups';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { Typography } from '@mui/joy';

export const Items= [
    {
        id:1,
        icon: <GroupsIcon color='primary' sx={{fontSize:40}}/>,
        title: <Typography level='body-sm' sx={{padding:3}}>45 crore+ Flupkart customers</Typography>
    },
    {
        id:2,
        icon: <AccountBalanceWalletIcon color='primary' sx={{fontSize:40}}/>,
        title:<Typography level='body-sm' sx={{padding:3}}>7* days secure & regular payments</Typography>
    }, 
    {
        id:3,
        icon: <ArrowDropDownCircleIcon color='primary' sx={{fontSize:40}}/>,
        title: <Typography level='body-sm' sx={{padding:3}}>Low cost of doing business</Typography>
    },
    {
        id:4,
        icon: <SupportAgentIcon color='primary' sx={{fontSize:40}}/>,
        title:<Typography level='body-sm' sx={{padding:3}}>One click Seller Support</Typography>
    },
    {
        id:5,
        icon:<ShoppingBagIcon color='primary' sx={{fontSize:40}}/>,
        title:<Typography level='body-sm' sx={{padding:3}}>Access to The Big Billion Days & more</Typography> 
    }
];

export const CarouselData=[
    {
        id:1,
        description: <Typography level='body-sm'>On Flipkart, your listings are live in less than 2 hours and you can start selling anywhere in India. I started my business with 3 products, and today I own 3 brands and have also created employment opportunities for my family and team of 25.</Typography>,
        image:'https://static-assets-web.flixcart.com/fk-sp-static/images/prelogin/sellers/Dinesh_yellow.webp',
        name: <Typography level='title-lg'>Dinesh Kumar Rajpurohit</Typography>
    },
    {
        id:2,
        description: <Typography level='body-sm'>Starting with just one category, their unwavering support and innovative platform empowered me to grow exponentially, expanding to six diverse categories and achieving an astounding 5x growth year on year.</Typography>,
        image:'https://static-assets-web.flixcart.com/fk-sp-static/images/prelogin/sellers/Raju_yellow.webp',
        name: <Typography level='title-lg'>Raju Lunawath</Typography>
    },
    {
        id:3,
        description: <Typography level='body-sm'>When moving from offline to online business, our aim was to sell 300 orders per month. Today, we sell  more than 700 orders per day and this has been possible because of the growth features on the Flipkart seller dashboard, Flipkart Ads and regular payments.</Typography>,
        image:'https://static-assets-web.flixcart.com/fk-sp-static/images/prelogin/sellers/Vinay_Garg_yellow.webp',
        name: <Typography level='title-lg'>Vinay Garg</Typography>
    }
]

