import Button from './../components/Button';

const Navbar = () => {
    return (
        <header className="z-50 bg-black/90">
            <div className="flex w-full justify-between items-center py-5 mx-auto c-space">
                <a href="/" className="text-neutral-400 font-bold text-2xl hover:text-white transition-colors">
                    AdaL <span className="text-orange-400">.</span>
                </a>
                <div>
                    <a href="#contact">
                        <Button name="Hair Me" isBeam containerClass="flex justify-end" />
                    </a>
                </div>
            </div>
        </header>
    )
}
export default Navbar
