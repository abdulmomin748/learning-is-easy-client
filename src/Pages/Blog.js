import React from 'react';
import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
const Blog = () => {
    const [open, setOpen] = useState(1);
    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };
    return (
        <section className="md:pt-20 pt-16 accordion  px-5 lg:px-4 flex justify-center flex-col max-w-[730px] m-auto text-center">
            <title>F Blog</title>
            <meta name="description" content="Helmet application" />
            <h1 className="text-4xl text-black dark:text-white question-title font-bold course-title custom-brder relative  mb-4 pb-4">
                Question
            </h1>
            <div className='pt-8 pb-16 text-left dark:text-white'>
                <Fragment>
                    <Accordion open={open === 1}>
                        <AccordionHeader className='dark:text-white' onClick={() => handleOpen(1)}>
                        what is cors?
                        </AccordionHeader>
                        <AccordionBody className='dark:text-white text-[18px]  h-[300px] font-medium custom-accordion'>
                        CORS stands for Cross-Origin Resource Sharing . It allows us to relax the security applied to an API. This is done by bypassing the Access-Control-Allow-Origin headers, which specify which origins can access the API.
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 2}>
                        <AccordionHeader className='dark:text-white text-left' onClick={() => handleOpen(2)}>
                        Why are you using firebase and What other options do you have to implement authentication?
                        </AccordionHeader>
                        <AccordionBody className='text-[18px] dark:text-white font-medium '>
                        Firebase helps you develop high-quality apps, grow your user base and each feature works independently, and they work even better together. Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 3}>
                        <AccordionHeader className='dark:text-white' onClick={() => handleOpen(3)}>
                        How does the private route work?
                        </AccordionHeader>
                        <AccordionBody className='text-[18px] dark:text-white h-32 font-medium '>
                        The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in)
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 4}>
                        <AccordionHeader className='dark:text-white' onClick={() => handleOpen(4)}>
                        What is node and How does Node work? 
                        </AccordionHeader>
                        <AccordionBody className='text-[18px] dark:text-white h-32 font-medium '>
                        Node.js is an open-source backend javascript runtime environment. It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node.js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.
                        </AccordionBody>
                    </Accordion>
                </Fragment>
            </div>
        </section>
    );
};

export default Blog;