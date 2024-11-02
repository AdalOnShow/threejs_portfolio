import { useRef, useState } from "react";

const Contact = () => {
    const formRef = useRef();

    const [loading, setLoading] = useState(false)
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    })

    const handleChange = ({ target: { name, value } }) => {
        setForm({ ...form, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        setLoading(true)

        setForm({
            name: "",
            email: "",
            message: "",
        })

        setTimeout(() => {
            setLoading(false)
            alert("Form submitted successfully")
        }, 2000)
    }

    return (
        <section className="c-space my-20" id="contact">
            <div className="relative min-h-screen flex items-center justify-center flex-col">
                <img src="/assets/terminal.png" alt="terminal background" className="absolute inset-0 min-h-screen" />

                <div className="contact-container">
                    <h3 className="head-text">Let&apos;s talk</h3>
                    <p className="text-lg text-white-600 mt-3">Whether you’re looking to build a new website, improve your existing platform, or bring a unique project to life, I’m here to help.</p>

                    <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
                        <label className="space-y-3">
                            <span className="field-label">Full Name</span>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                placeholder="Sharif Adal"
                                required
                                className="field-input"
                            />
                        </label>
                        <label className="space-y-3">
                            <span className="field-label">Email</span>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange} placeholder="sharifadal2008@gamil.com"
                                required
                                className="field-input"
                            />
                        </label>
                        <label className="space-y-3">
                            <span className="field-label">Your message</span>
                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                placeholder="Hi, I'm interested in...."
                                rows={5}
                                required
                                className="field-input"
                            />
                        </label>
                        <button type="submit" className="field-btn" disabled={loading}>
                            {loading ? "Sending...." : "Send Message"}
                            <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow" />
                        </button>
                    </form>


                </div>
            </div>
        </section>
    )
}
export default Contact
