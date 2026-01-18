import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react"
import { useState } from "react"
import { GoogleReCaptchaProvider, useGoogleReCaptcha } from "react-google-recaptcha-v3"

function ContactForm() {
    const { executeRecaptcha } = useGoogleReCaptcha()
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    })
    const [status, setStatus] = useState({ type: "", message: "" })
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!executeRecaptcha) {
            setStatus({
                type: "error",
                message: "reCAPTCHA not loaded. Please refresh the page."
            })
            return
        }

        setIsSubmitting(true)
        setStatus({ type: "", message: "" })

        try {
            // Get reCAPTCHA token
            const token = await executeRecaptcha("contact_form")

            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    access_key: "d045a9e0-dc95-4f92-9909-7871c9d0f4c8",
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    subject: `New Portfolio Contact from ${formData.name}`,
                    "g-recaptcha-response": token,
                }),
            })

            const result = await response.json()

            if (result.success) {
                setStatus({
                    type: "success",
                    message: "Message sent successfully! I'll get back to you soon."
                })
                setFormData({ name: "", email: "", message: "" })
            } else {
                setStatus({
                    type: "error",
                    message: "Something went wrong. Please try again or email me directly."
                })
            }
        } catch (error) {
            setStatus({
                type: "error",
                message: "Failed to send message. Please email me directly at ithayarajim15@gmail.com"
            })
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            {status.message && (
                <div className={`p-4 rounded-xl flex items-center gap-3 ${status.type === "success"
                        ? "bg-green-500/10 border border-green-500/30 text-green-400"
                        : "bg-red-500/10 border border-red-500/30 text-red-400"
                    }`}>
                    {status.type === "success" ? <CheckCircle size={20} /> : <AlertCircle size={20} />}
                    <span className="text-sm">{status.message}</span>
                </div>
            )}

            <div className="grid md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-gray-300 mb-2 text-sm font-medium">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        minLength={2}
                        maxLength={100}
                        className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition text-gray-100"
                        placeholder="John Doe"
                    />
                </div>
                <div>
                    <label className="block text-gray-300 mb-2 text-sm font-medium">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition text-gray-100"
                        placeholder="john@example.com"
                    />
                </div>
            </div>
            <div>
                <label className="block text-gray-300 mb-2 text-sm font-medium">Message</label>
                <textarea
                    rows="4"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    minLength={10}
                    maxLength={1000}
                    className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition text-gray-100"
                    placeholder="Your message here..."
                ></textarea>
            </div>
            <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-blue-500/25 flex items-center justify-center gap-2"
            >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={20} />
            </button>
            <p className="text-xs text-gray-500 text-center">
                This site is protected by reCAPTCHA and the Google{" "}
                <a href="https://policies.google.com/privacy" className="underline hover:text-gray-400" target="_blank" rel="noopener noreferrer">Privacy Policy</a> and{" "}
                <a href="https://policies.google.com/terms" className="underline hover:text-gray-400" target="_blank" rel="noopener noreferrer">Terms of Service</a> apply.
            </p>
        </form>
    )
}

function Contact() {
    return (
        <GoogleReCaptchaProvider reCaptchaKey="YOUR_RECAPTCHA_SITE_KEY">
            <section id="contact" className="py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">Get In <span className="text-blue-500">Touch</span></h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Have a project in mind or just want to say hi? Feel free to reach out to me.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="space-y-8">
                            <div className="flex items-center gap-4">
                                <div className="bg-blue-500/10 p-4 rounded-xl text-blue-500">
                                    <Mail size={32} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold">Email</h3>
                                    <a href="mailto:ithayarajim15@gmail.com" className="text-gray-400 hover:text-blue-400 transition">
                                        ithayarajim15@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="bg-purple-500/10 p-4 rounded-xl text-purple-500">
                                    <Phone size={32} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold">Phone</h3>
                                    <a href="tel:0753849445" className="text-gray-400 hover:text-purple-400 transition">
                                        0753849445
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="bg-pink-500/10 p-4 rounded-xl text-pink-500">
                                    <MapPin size={32} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold">Location</h3>
                                    <p className="text-gray-400">Batticaloa, Sri Lanka</p>
                                </div>
                            </div>
                        </div>

                        <ContactForm />
                    </div>
                </div>

                <footer className="mt-20 pt-8 border-t border-gray-800 text-center text-gray-500">
                    <p>© {new Date().getFullYear()} Ithayaraj Inpalagan. All rights reserved.</p>
                </footer>
            </section>
        </GoogleReCaptchaProvider>
    )
}

export default Contact
