import React from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaWhatsapp, FaStar } from "react-icons/fa";

const Landing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-white to-yellow-50 flex items-center justify-center p-6 relative overflow-hidden">
      {/* Radial Glow Background */}
      <div className="absolute inset-0 bg-gradient-radial from-yellow-200/40 via-transparent to-transparent blur-3xl"></div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 20 }}
        className="max-w-3xl w-full backdrop-blur-xl bg-white/70 border border-white/40 rounded-3xl shadow-[0_8px_40px_rgba(0,0,0,0.1)] p-8 sm:p-10 space-y-10 relative z-10"
      >
        {/* Shop Name */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-extrabold text-center bg-gradient-to-r from-yellow-600 via-orange-500 to-red-500 bg-clip-text text-transparent tracking-wide drop-shadow-sm">
          Gore Di Hatti
        </h1>
        <p className="text-center text-gray-600 text-sm italic -mt-2 sm:-mt-3">
          Since 1980 • Traditional Taste
        </p>

        {/* Social Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            {
              href: "https://www.google.com/maps/place/GORE+DI+HATTI/@30.3801802,76.7629021,17z/data=!4m8!3m7!1s0x390fc892a59130af:0xe3363ebb8a5537e9!8m2!3d30.3801803!4d76.767773!9m1!1b1!16s%2Fg%2F11g6rnf9t4?entry=ttu&g_ep=EgoyMDI1MDgyNS4wIKXMDSoASAFQAw%3D%3D",
              icon: <FaStar size={22} />,
              text: "Review Us",
              gradient: "from-yellow-500 to-orange-500",
              glow: "shadow-yellow-400/40",
            },
            {
              href: "https://www.instagram.com/gore.di.hatti/",
              icon: <FaInstagram size={22} />,
              text: "Instagram",
              gradient: "from-pink-500 to-rose-500",
              glow: "shadow-pink-400/40",
            },
            {
              href: "https://chat.whatsapp.com/DFE7W5VDlFpLJuigBrxFax?mode=ems_copy_t",
              icon: <FaWhatsapp size={22} />,
              text: "WhatsApp",
              gradient: "from-green-500 to-emerald-500",
              glow: "shadow-green-400/40",
            },
          ].map((btn, i) => (
            <motion.a
              key={i}
              href={btn.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.06, y: -4 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 120, damping: 15 }}
              className={`flex flex-col items-center justify-center gap-3 bg-gradient-to-r ${btn.gradient} p-5 rounded-2xl font-medium text-white shadow-md ${btn.glow} transition-transform duration-300 hover:shadow-xl`}
            >
              <motion.div
                whileHover={{ rotate: 10 }}
                transition={{ type: "spring", stiffness: 100, damping: 12 }}
                className="p-3 rounded-full bg-white/20 backdrop-blur-md"
              >
                {btn.icon}
              </motion.div>
              {btn.text}
            </motion.a>
          ))}
        </div>

        {/* Address & Contact */}
        <div className="space-y-4 text-center">
          <h2 className="text-lg font-semibold text-gray-700">📍 Visit Us</h2>
          <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
            Near Prem Mandir, opposite KPAK School <br />
            Nadi Mohalla <br />
            Ambala City
          </p>

          <h2 className="text-lg font-semibold text-gray-700">📞 Contact</h2>
          <p className="text-gray-900 font-bold text-lg sm:text-xl tracking-wide">
            +91 7206642153
          </p>
        </div>

        {/* Google Map */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 80, damping: 18 }}
          viewport={{ once: true }}
          className="rounded-2xl overflow-hidden shadow-xl border border-white/30"
        >
          <iframe
            title="Shop Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3441.9710375934505!2d76.76777299999999!3d30.3801803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fc892a59130af%3A0xe3363ebb8a5537e9!2sGORE%20DI%20HATTI!5e0!3m2!1sen!2sin!4v1756452661314!5m2!1sen!2sin"
            width="100%"
            height="260"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>

        {/* Footer */}
        <p className="text-center text-gray-500 text-xs sm:text-sm pt-4 border-t border-white/30">
          © {new Date().getFullYear()} Gore Di Hatti. All Rights Reserved.
        </p>
      </motion.div>
    </div>
  );
};

export default Landing;
