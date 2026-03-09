import SlideInLeft from "@/components/animations/SlideInLeft";
import SlideInRight from "@/components/animations/SlideInRight";

export default function ContactSection() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-gray-100 to-gray-200">

      <div className="max-w-7xl mx-auto px-6">

        {/* INTRO */}
        <div className="text-center max-w-2xl mx-auto mb-16">

          <p className="text-sm font-semibold uppercase tracking-wide text-green-600">
            Get In Touch
          </p>

          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">
            Contact Our Team
          </h2>

          <p className="mt-4 text-gray-600">
            Have questions about our construction materials or need a quotation?
            Send us a message and our team will get back to you shortly.
          </p>

          <div className="w-16 h-[3px] bg-green-600 mx-auto mt-6"></div>

        </div>


        <div className="grid md:grid-cols-2 gap-10 items-start">

          {/* CONTACT FORM */}
          <SlideInLeft>
            <div className="bg-white/50 backdrop-blur-xl border border-white/40 shadow-xl p-6">

              <h3 className="text-2xl font-semibold mb-6 text-green-600">
                Send Us a Message
              </h3>

              <form className="space-y-4">

                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full border border-gray-300 bg-white/80 text-gray-800 placeholder-gray-500 p-3 focus:outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600 transition"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full border border-gray-300 bg-white/80 text-gray-800 placeholder-gray-500 p-3 focus:outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600 transition"
                />

                <input
                  type="text"
                  placeholder="Phone Number"
                  className="w-full border border-gray-300 bg-white/80 text-gray-800 placeholder-gray-500 p-3 focus:outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600 transition"
                />

                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full border border-gray-300 bg-white/80 text-gray-800 placeholder-gray-500 p-3 focus:outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600 transition"
                />

                <button
                  type="submit"
                  className="bg-green-600 text-white px-6 py-3 font-semibold hover:bg-green-700 transition"
                >
                  Send Message
                </button>

              </form>

            </div>
          </SlideInLeft>


          {/* MAP */}
          <SlideInRight>
            <div className="bg-white/50 backdrop-blur-xl border border-white/40 shadow-xl p-4">

              <iframe
                src="https://maps.google.com/maps?q=Lilongwe%20Malawi&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="w-full h-[320px]"
                loading="lazy"
              ></iframe>

            </div>
          </SlideInRight>

        </div>

      </div>

    </section>
  );
}