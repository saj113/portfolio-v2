﻿import FallingDiv from '../../components/animaitons/FallingDiv.tsx';
import SectionHeading from '../../components/SectionHeading.tsx';

const About = () => {
    return (
        <FallingDiv direction="up" transition={{ delay: 0.175 }}>
            <section className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28">
                <SectionHeading>About me</SectionHeading>
                <p className="mb-3">
                    After graduating with a degree in{" "}
                    <span className="font-medium">Accounting</span>, I decided to pursue my
                    passion for programming. I enrolled in a coding bootcamp and learned{" "}
                    <span className="font-medium">full-stack web development</span>.{" "}
                    <span className="italic">My favorite part of programming</span> is the
                    problem-solving aspect. I <span className="underline">love</span> the
                    feeling of finally figuring out a solution to a problem. My core stack
                    is{" "}
                    <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
                    . I am also familiar with TypeScript and Prisma. I am always looking to
                    learn new technologies. I am currently looking for a{" "}
                    <span className="font-medium">full-time position</span> as a software
                    developer.
                </p>

                <p>
                    <span className="italic">When I'm not coding</span>, I enjoy playing
                    video games, watching movies, and playing with my dog. I also enjoy{" "}
                    <span className="font-medium">learning new things</span>. I am currently
                    learning about{" "}
                    <span className="font-medium">history and philosophy</span>. I'm also
                    learning how to play the guitar.
                </p>
            </section>
        </FallingDiv>
    );
};

export default About;