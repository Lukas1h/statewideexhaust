import { Card } from "..";

export default function ContactUs() {
    return (
        <>
            <h1
                className="text-4xl md:text-5xl font-extrabold tracking-tight text-black text-center"
                id="why-choose-us"
            >
                Contact Us
            </h1>

            <p className="text-center text-lg text-neutral-600 mt-4 mb-10 max-w-2xl mx-auto">
                Need a quote or have questions about exhaust repairs, custom work, or installations?
                Send us a message and we&apos;ll get back to you.
            </p>

            <section className="max-w-6xl mx-auto overflow-hidden p-0 mb-20">
                <div className="grid md:grid-cols-2">
                    <div className="bg-gradient-to-r from-red-500 to-red-600 text-white p-8 md:p-10">
                        {/* <p className="uppercase tracking-widest text-sm opacity-70 mb-3">
                            Get In Touch
                        </p> */}

                        <h2 className="text-3xl font-bold mb-4">
                            Free Estimates
                        </h2>

                        <p className="text-neutral-300 leading-relaxed mb-8">
                            Have any questions or interested in a free quote? We&apos;d love to hear from you.
                        </p>

                        <div className="space-y-6">
                            <div>
                                <p className="text-sm uppercase opacity-60">Phone</p>
                                <p className="text-xl font-semibold">(541) 679-0225</p>
                            </div>

                            <div>
                                <p className="text-sm uppercase opacity-60">Email</p>
                                <p className="text-xl font-semibold">statewideexhaust@gmail.com</p>
                            </div>

                            <div>
                                <p className="text-sm uppercase opacity-60">Hours</p>
                                <p>Monday – Friday</p>
                                <p>8:00 AM – 5:00 PM</p>
                            </div>
                        </div>
                    </div>

                    <div className="p-8 md:p-10 bg-white">
                        <form className="space-y-5" action="https://api.web3forms.com/submit" method="POST">
                            <input type="hidden" name="access_key" value="19d9be4c-66f7-4449-8069-0941432c0b73" />
                            <div className="grid sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-semibold mb-2">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        className="w-full border border-neutral-300 rounded-md px-4 py-3"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold mb-2">
                                        Phone Number
                                    </label>
                                    <input
                                        type="text"
                                        name="phone"
                                        required
                                        className="w-full border border-neutral-300 rounded-md px-4 py-3"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    className="w-full border border-neutral-300 rounded-md px-4 py-3"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold mb-2">
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    required
                                    className="w-full min-h-[180px] border border-neutral-300 rounded-md px-4 py-3"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white py-3 rounded-md font-semibold hover:opacity-90 transition"
                            >
                                Request a Quote
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}