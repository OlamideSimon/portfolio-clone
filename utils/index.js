import {
    AiOutlineGithub,
    AiOutlineInstagram,
    AiOutlineCamera,
    AiOutlineTwitter,
} from "react-icons/ai"
import { HiOutlineNewspaper } from 'react-icons/hi'
import { TbSwimming } from 'react-icons/tb'
import { FaRegSnowflake, FaFly, FaBed } from 'react-icons/fa'
import { GiDutchBike } from 'react-icons/gi'
import image1 from '../public/assets/images/image.webp'
import image2 from '../public/assets/images/image (1).webp'

export const navItems = [
    {
        name: 'home',
        link: '/'
    },
    {
        name: 'about',
        link: '/#about'
    },
    {
        name: 'works',
        link: '/#works'
    },
    {
        name: 'contact',
        link: '/#contact'
    },
]

export const works = [
    {
        name: 'Testing 1',
        type: 'Freelance',
        year: '2020',
        development: 'phone development',
        bgColor: '#5483',
        image: image1
    },
    {
        name: 'Testing 2',
        type: 'Contract',
        year: '2021',
        development: 'website development',
        bgColor: '#a365',
        image: image2
    },
]

export const links = [
    {
        name: 'github',
        link: 'github.com/sample',
        Icon: AiOutlineGithub
    },
    {
        name: 'instagram',
        link: 'instagram.com/sample',
        Icon: AiOutlineInstagram
    },
    {
        name: 'twitter',
        link: 'twitter.com/sample',
        Icon: AiOutlineTwitter
    },
]

export const hobbies = [
    {
        hobbie: 'reading',
        Icon: HiOutlineNewspaper
    },
    {
        hobbie: 'swimming',
        Icon: TbSwimming
    },
    {
        hobbie: 'photography',
        Icon: AiOutlineCamera
    },
    {
        hobbie: 'loves snow',
        Icon: FaRegSnowflake
    },
    {
        hobbie: 'flying',
        Icon: FaFly
    },
    {
        hobbie: 'sleeping',
        Icon: FaBed
    },
    {
        hobbie: 'biking',
        Icon: GiDutchBike
    },
]