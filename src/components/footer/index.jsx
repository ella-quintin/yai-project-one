import { Facebook, Linkedin, Youtube } from "lucide-react";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

import tiktok from "../../assets/images/tiktok.png";


const Footer = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_rid8tfh",
                "template_w1830sh",
                form.current,
                "w0GfeCN8k1_stJidz"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    alert("Message sent successfully!");
                },
                (error) => {
                    console.log(error.text);
                    alert("Failed to send message. Please try again later.");
                }
            );
    };

    return (
        <footer className="bg-gradient-to-r from-green-600 to-green-500 text-white py-12">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 px-4 sm:px-6 md:px-8 text-center md:text-left">
                {/* Company Info + Social Links */}
                <div className="flex flex-col items-center md:items-start">

                    <p className="text-sm md:text-base leading-relaxed mb-6">
                        At Dagra Salepush, our deep commitment to supporting farmers and protecting the planet, makes us strive to create sustainable practices that yield healthier crops, restore degraded lands, and ensure a greener future for generations to come.
                    </p>
                    <h3 className="text-base font-bold mb-3">Social Media</h3>

                    <div className="flex space-x-4">
                        {[
                            { Icon: Facebook, url: "/" },
                            { Icon: Linkedin, url: "/" },
                            { Icon: () => <img src={tiktok} alt="TikTok" className="w-5 h-5" />, url: "/" },
                            { Icon: Youtube, url: "https://www.youtube.com/@mcblay521" }
                        ].map(({ Icon, url, hoverClass = "hover:bg-white hover:text-green-600" }, idx) => (
                            <a key={idx} href={url} target="_blank" rel="noopener noreferrer" className={`p-2 rounded border border-white ${hoverClass}`}>
                                <Icon />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Quick Links + Help */}
                <div className="flex flex-col items-center md:items-start">
                    <div className="mb-6">
                        <h3 className="text-base font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-3">
                            {[
                                { name: "Home", path: "/" },
                                { name: "About Us", path: "/about-us" },
                                { name: "Our Product", path: "/our-product" },
                                { name: "Contact", path: "/contact-us" },
                            ].map((link, idx) => (
                                <li key={idx}>
                                    <a href={link.path} className="hover:underline">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-base font-bold mb-4">Help</h3>
                        <ul className="space-y-3">
                            {["Privacy Policy", "Customer Support", "Terms & Conditions"].map((link, idx) => (
                                <li key={idx}>
                                    <a href="/" className="hover:underline">
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="flex flex-col items-center md:items-start">
                    <h3 className="text-base font-bold mb-4">Contact Us</h3>
                    <form
                        ref={form}
                        onSubmit={sendEmail}
                        className="space-y-4 w-full max-w-sm bg-white p-4 rounded-lg shadow-md"
                    >
                        <input
                            type="text"
                            name="user_name"
                            placeholder="Your Name"
                            required
                            className="w-full p-2 md:p-3 bg-gray-50 text-gray-900 placeholder-gray-400 rounded focus:outline-none"
                        />
                        <input
                            type="email"
                            name="user_email"
                            placeholder="Email"
                            required
                            className="w-full p-2 md:p-3 bg-gray-50 text-gray-900 placeholder-gray-400 rounded focus:outline-none"
                        />
                        <input
                            type="text"
                            name="user_phone"
                            placeholder="Phone"
                            required
                            className="w-full p-2 md:p-3 bg-gray-50 text-gray-900 placeholder-gray-400 rounded focus:outline-none"
                        />
                        <textarea
                            name="message"
                            placeholder="Message"
                            rows="4"
                            required
                            className="w-full p-2 md:p-3 bg-gray-50 text-gray-900 placeholder-gray-400 rounded focus:outline-none"
                        />
                        <button
                            type="submit"
                            className="w-full p-2 md:p-3 bg-green-600 text-white font-semibold rounded hover:bg-green-700"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="mt-12 border-t border-white pt-6 text-center">
                <p className="text-sm">
                    &copy; {new Date().getFullYear()} Dagra Salepush. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
