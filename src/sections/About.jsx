import Globe from "react-globe.gl";
import Button from "../components/Button.jsx";
import { useState } from "react";

const About = () => {
    const [hasCopied, setHasCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText("sharifadal2008@gamil.com")
        setHasCopied(true);

        setTimeout(() => {
            setHasCopied(false);
        }, 2000)
    }
    return (
        <section className="c-space my-20" id="about">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:grid-rows-6 gap-5 h-full">
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <div className="w-full sm:h-[276px] h-fit flex justify-center">
                            <img src="/assets/my-pic.png" alt="grid-1" className="rounded-lg" />
                        </div>

                        <div>
                            <p className="grid-headtext">Hi, I&apos;m Sharif H. Adal</p>
                            <p className="grid-subtext">With 2 years of experience, I have honed my skills in both frontend development, creating dynamic and responsive websites.</p>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid2.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />

                        <div>
                            <p className="grid-headtext">Tech Stack</p>
                            <p className="grid-subtext">I specialize in a variety of languages, frameworks, and tools that allow me to build robust and scalable applications</p>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 xl:row-span-4">
                    <div className="grid-container">
                        <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
                            <Globe
                                height={326}
                                width={326}
                                backgroundColor="rgba(0,0,0,0)"
                                backgroundeImageOpacity={0.5}
                                showAtmosphere
                                showGraticules
                                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                            />
                        </div>
                        <div>
                            <p className="grid-headtext">I’m very flexible with time zone communications & locations</p>
                            <p className="grid-subtext">I&apos;m based in Chattagram, Bangladesh and open to remote work worldwide.
                            </p>
                            <a href="#contact">
                                <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="xl:col-span-2 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />

                        <div>
                            <p className="grid-headtext">My Passion for Coding</p>
                            <p className="grid-subtext">{`I love solving problems and building things through code. Programming isn't just my profession—it's my passion. I enjoy exploring new technologies, and enhancing my skills.`}</p>
                        </div>
                    </div>
                </div>

                <div className="xl:col-span-1 xl:row-span-2">
                    <div className="grid-container">
                        <img src="/assets/grid4.png" alt="grid-4"
                            className="w-full md:h-[125px] sm:h-[276px] h-fit object-cover sm:object-top" />
                        <div className="space-y-2">
                            <p className="grid-subtext text-center">Contact me</p>
                            <div className="copy-container" onClick={handleCopy}>
                                <img src={hasCopied ? 'assets/tick.svg' : "assets/copy.svg"} alt="copy" />
                                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">sharifadal2008@gamil.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default About
