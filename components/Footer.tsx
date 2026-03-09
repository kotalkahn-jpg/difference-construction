export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 pt-20 pb-10">

      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 px-6">

        {/* Company Info */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-4">
            Difference Construction
          </h3>

          <p className="text-sm leading-relaxed">
            Difference Construction (MW) Ltd manufactures durable concrete blocks,
            interlocking pavers, and garden tiles trusted by contractors across Malawi.
          </p>
        </div>


        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">
            Quick Links
          </h4>

          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">About</a></li>
            <li><a href="#" className="hover:text-white">Products</a></li>
            <li><a href="#" className="hover:text-white">Blog</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>


        {/* Contact Info */}
        <div>
          <h4 className="text-white font-semibold mb-4">
            Contact
          </h4>

          <ul className="space-y-2 text-sm">
            <li>Chitipi Township</li>
            <li>Mchinji Road</li>
            <li>Lilongwe, Malawi</li>
            <li>+265 XXX XXX XXX</li>
            <li>info@differenceconstruction.com</li>
          </ul>
        </div>


        {/* Opening Hours */}
        <div>
          <h4 className="text-white font-semibold mb-4">
            Opening Hours
          </h4>

          <ul className="space-y-2 text-sm">
            <li>Monday - Friday: 08:00 - 17:00</li>
            <li>Saturday: 08:00 - 13:00</li>
            <li>Sunday: Closed</li>
          </ul>
        </div>

      </div>


      {/* Bottom Bar */}

      <div className="border-t border-gray-800 mt-12 pt-6 text-center text-sm text-gray-500">

        © {new Date().getFullYear()} Difference Construction (MW) Ltd. All rights reserved.

      </div>

    </footer>
  );
}