import React from 'react';
import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
const Faq = () => {
    const [open, setOpen] = useState(1);
    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };
    return (
        <section className="md:pt-24 pt-32 flex justify-center flex-col max-w-[730px] lg:px-4 px-5 m-auto text-center">
            <meta name="description" content="Helmet application" />
            <h1 className="lg:text-4xl text-3xl text-black dark:text-white question-title font-bold course-title custom-brder relative  mb-4 pb-4">
                Learning With Learning Is Easy: FAQ
            </h1>
            <div className='pt-8 pb-16 text-left dark:text-white'>
                <Fragment>
                    <Accordion open={open === 1}>
                        <AccordionHeader className='dark:text-white' onClick={() => handleOpen(1)}>
                        What LEARNING IS EASY Mission ?
                        </AccordionHeader>
                        <AccordionBody className='dark:text-white text-[18px] h-28 font-medium custom-accordion'>
                        LEARNING IS EASY Mission is to create new possibilities for people and organizations everywhere. Our global marketplace features an extensive, multi-language library, which includes thousands of courses taught by real-world experts. You can take courses across a wide range of categories, some of which include: business & entrepreneurship, programming, academics, the arts, health & fitness, language, music and much more!
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 2}>
                        <AccordionHeader className='dark:text-white text-left' onClick={() => handleOpen(2)}>
                        What do LEARNING IS EASY courses include?
                        </AccordionHeader>
                        <AccordionBody className='text-[18px] dark:text-white h-28 font-medium '>
                        Each LEARNING IS EASY course is created, owned and managed by the instructor(s). The foundation of each Udemy course are its lectures, which can include videos, slides, and text. In addition, instructors can add resources and various types of practice activities, as a way to enhance the learning experience of students. 
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 3}>
                        <AccordionHeader className='dark:text-white' onClick={() => handleOpen(3)}>
                        How do I take a LEARNING IS EASY course?
                        </AccordionHeader>
                        <AccordionBody className='text-[18px] dark:text-white h-32 font-medium '>
                        LEARNING IS EASY courses are entirely on-demand and they can be accessed from several different devices and platforms, including a desktop, laptop, and our mobile app. 

                        After you enroll in a course, you can access it by clicking on the course link you will receive in your confirmation email (provided you’re logged into your Udemy account). You can also begin the course by logging in and navigating to your My learning page. 
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 4}>
                        <AccordionHeader className='dark:text-white' onClick={() => handleOpen(4)}>
                        How can I pay for a course?
                        </AccordionHeader>
                        <AccordionBody className='text-[18px] dark:text-white h-32 font-medium '>
                        LEARNING IS EASY supports several different payment methods, depending on your account country and location. 
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 5}>
                        <AccordionHeader className='dark:text-white' onClick={() => handleOpen(5)}>
                        Where can I go for help?
                        </AccordionHeader>
                        <AccordionBody className='text-[18px] dark:text-white h-32 font-medium '>
                        If you find you have a question about a paid course while you’re taking it, you can search for answers to your question in the Q&A or ask the instructor. 
                        Our Help Center has extensive information regarding Udemy’s various features, and articles with troubleshooting steps to help you quickly resolve any issues you encounter. Our support team is also happy to help. 
                        </AccordionBody>
                    </Accordion>
                </Fragment>
            </div>
        </section>
    );
};

export default Faq;