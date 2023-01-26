import React, { useEffect, useState } from "react";
import Link from "next/link";
import Button from "../../components/Button";
import profile from '../../public/assets/images/profile.jpg'
import { motion } from 'framer-motion'
import { useRef } from "react";
import { hobbies } from "../../utils";
import Image from "next/image";

const skills = [
    'react',
    'vue',
    'CSS3',
    'tailwindcss',
    'nextJS',
    'laravel',
    'electronJS'
]

const slides = {
    hidden: {
        opacity: 0,
        scale: 0
    },
    show: {
        opacity: 1,
        scale: 1,
        transition: {
            delay: 0.1,
            duration: 0.2
        }
    }
}

const About = () => {
    const delay = 2500;
    const [index, setIndex] = useState(0);
    const timeoutRef = useRef(null);

    const resetTimeout = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
        }
    }

    useEffect(() => {
        resetTimeout();

        timeoutRef.current = setTimeout(() => setIndex((prevIndex) => prevIndex === hobbies.length - 1 ? 0: prevIndex + 1), delay)

        return () => {
            resetTimeout();
        };
    }, [index])

    return (
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1, transitiondelay: 0.3, transition: { ease: 'linear', delay: 0.3, duration: 0.7 } }} id="about" className="px-5 lg:px-20 space-y-10 md:space-y-0">
            <div className="w-full md:w-[70%] text-center md:text-right">
                <p className="section-header-1">
                    know me
                </p>
                <p className="section-header-2">
                    About
                </p>
            </div>
            <div className="flex gap-10 flex-col md:flex-row items-center md:px-10">
                <div className="grid place-content-center">
                    <div className="relative rounded-3xl w-60 sm:w-[200px] lg:w-[400px] border-dashed border border-gray-500 p-5">
                        <Image
                            src={profile}
                            alt=""
                            className="rounded-3xl w-full"
                        />
                        <div className="absolute bg-blue-ryb text-center bottom-0 right-0 p-2 rounded-tr-xl rounded-bl-xl">
                            <div className="my-0 mx-auto overflow-hidden max-w-[80px]">
                                <div className="whitespace-nowrap font-corpsansmedium transition-all duration-1000" style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
                                    {hobbies.map(({ Icon, hobbie }, index) => (
                                        <div key={index} className='inline-block h-[40px] w-full'>
                                            <Icon size={40} className='grid place-content-center w-full text-white' />
                                            <p className="capitalize text-lg">{hobbie}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="text-base font-thin mt-[25px] mb-[30px] space-y-10 font-corpsansregular">
                        <p>
                            I&apos;m a Front-End Developer located in Turkey. I have a serious
                            passion for UI effects, animations and creating intuitive, dynamic
                            user experiences.
                        </p>
                        <p>
                            My main experience is in front-end development but I also have a
                            passion for design. Given that producing a modern website requires
                            the combination of design, server technology, and the layer that
                            users interacts with. I believe having experience in both design and
                            development allows for making the most optimal user experiences.
                        </p>
                        <p>
                            I&apos;ve built products for companies and businesses around the globe
                            ranging from marketing websites to complex solutions and enterprise
                            apps with focus on fast, elegant and accessible user experiences.
                        </p>
                        <p>
                            I&apos;m a <Link href='' className="inline-link">CodePen</Link> advocate and
                            share attention-catching demos over on{" "}
                            <Link href='' className="inline-link">Twitter</Link>.
                        </p>
                    </div>
                    <div className="mt-10">
                        <p className="font-semibold font-corpsansbold text-[26px] capitalize">
                            best skills
                        </p>
                        <p className="flex flex-wrap mt-5 leading-10 w-full">
                            {skills.map((skill, index) => (
                                <span key={index} className={styles.skill}>
                                    {skill}
                                </span>
                            ))}
                        </p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default About;

const styles = {
    skill: 'm-2 w-fit px-3 py-1 cursor-pointer text-white font-semibold hover:scale-110 transition-all duration-100 rounded-tl-xl rounded-br-xl bg-[#252b3d] hover:bg-blue-ryb uppercase'
}