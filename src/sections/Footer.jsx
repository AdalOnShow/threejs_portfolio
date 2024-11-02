const Footer = () => {
    return (
        <section className="c-space pt-8 pb-4 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
            <div className="text-white-500 flex gap-2">
                <p>Terms & Conditions</p>
                <p> | </p>
                <p>Privacy Policy</p>
            </div>
            <div className="flex gap-3">
                <div className="social-icon">
                    <a href="https://github.com/AdalOnShow/" target="_blank" className="flex items-center justify-center">
                        <img src="/assets/github.svg" alt="github" className="size-1/2" />
                    </a>
                </div>
                <div className="social-icon">
                    <a href="https://twitter.com/AdalOnShow/" target="_blank" className="flex items-center justify-center">
                        <img src="/assets/twitter.svg" alt="twitter" className="size-1/2" />
                    </a>
                </div>
                <div className="social-icon">
                    <a href="https://facebook.com/AdalOnShow/" target="_blank" className="flex items-center justify-center">
                        <img src="/assets/instagram.svg" alt="instagram" className="size-1/2" />
                    </a>
                </div>
            </div>

            <p className="text-white-500">{`© ${new Date().getFullYear()} Sharif Adal. All rights reserved.`}</p>
        </section>
    )
}
export default Footer
