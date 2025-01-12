import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera } from "@react-three/drei";
import HackerRoom from "../components/HackerRoom.jsx";
import { Suspense } from "react";
import CanvasLoader from "../components/CanvasLoader.jsx";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../constants/index.js";
import Target from "../components/Target.jsx";
import ReactLogo from "../components/ReactLogo.jsx";
import Cube from "../components/Cube.jsx";
import Rings from "../components/Rings.jsx";
import HeroCamera from "../components/HeroCamera.jsx";
import Button from "../components/Button.jsx";
import { HiOutlineSaveAs } from "react-icons/hi";

const Hero = () => {
    const isSmall = useMediaQuery({ maxWidth: 440 })
    const isMobile = useMediaQuery({ maxWidth: 768 })
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 })

    const sizes = calculateSizes(isSmall, isMobile, isTablet);

    return (
        <section className="min-h-screen w-full flex flex-col relative" id="home">
            <header className="z-50 bg-black/90">
                <div className="flex w-full justify-between items-center pt-12 mx-auto c-space">
                    <a href="/" className="text-neutral-400 font-bold text-2xl sm:text-4xl hover:text-white transition-colors">
                        AdaL <span className="text-orange-400">.</span>
                    </a>
                    <div className='flex gap-4'>
                        <div className="gap-3 flex sm:hidden lg:flex">
                            <div className="social-icon">
                                <a href="https://www.linkedin.com/in/adalonshow/" target="_blank" className="flex items-center justify-center">
                                    <img src="/assets/linkedin.svg" alt="LinkedIn" className="size-1/2" />
                                </a>
                            </div>
                            <div className="social-icon">
                                <a href="https://github.com/AdalOnShow/" target="_blank" className="flex items-center justify-center">
                                    <img src="/assets/github.svg" alt="GitHub" className="size-1/2" />
                                </a>
                            </div>
                        </div>
                        <a href="/assets/resume.pdf" download="sharif-adal-resume.pdf">
                            <Button name="Resume" containerClass="flex justify-end" icon={<HiOutlineSaveAs size={24} className='waving-hand' />} />
                        </a>
                    </div>
                </div>
            </header>

            <div className="w-full mx-auto flex flex-col mt-20 sm:mt-24 c-space gap-3">
                <p className="text-2xl sm:text-3xl font-medium text-white text-center font-generalsans">Hi, I am Sharif Adal <span className="waving-hand">👋🏼</span></p>
                <p className="hero_tag text-gray_gradient">Front-End Web Developer</p>

                <div className="w-full h-full absolute inset-0">
                    <Canvas className="w-full h-full">
                        <Suspense fallback={<CanvasLoader />}>

                            <PerspectiveCamera makeDefault position={[0, 0, 20]} />

                            <HeroCamera isMobile={isMobile}>
                                <HackerRoom
                                    position={sizes.deskPosition}
                                    rotation={[0, -Math.PI, 0]}
                                    scale={sizes.deskScale}
                                />
                            </HeroCamera>

                            <group>
                                <Target position={sizes.targetPosition} />
                                <ReactLogo position={sizes.reactLogoPosition} />
                                <Cube position={sizes.cubePosition} />
                                <Rings position={sizes.ringPosition} />
                            </group>

                            <ambientLight intensity={1} />
                            <directionalLight position={[10, 10, 10]} intensity={0.5} />
                        </Suspense>
                    </Canvas>
                </div>
            </div>

            <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
                <a href="#about" className="w-fit">
                    <Button name="Let's work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
                </a>
            </div>
        </section>
    )
}
export default Hero
