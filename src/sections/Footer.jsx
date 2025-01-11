import { socialLinks } from "../constants"

const Footer = () => {
    return (
        <section className="c-space pt-8 pb-4 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
            <div className="text-white-500 flex gap-2">
                <p>Terms & Conditions</p>
                <p> | </p>
                <p>Privacy Policy</p>
            </div>
            <div className="flex gap-3">
                {socialLinks.map(({ id, name, link, icon }) => (
                    <div key={id} className="social-icon">
                        <a href={link} target="_blank" className="flex items-center justify-center">
                            <img src={icon} alt={name} className="size-1/2" />
                        </a>
                    </div>
                ))}
            </div>

            <p className="text-white-500">{`© ${new Date().getFullYear()} Sharif Adal. All rights reserved.`}</p>
        </section>
    )
}
export default Footer
