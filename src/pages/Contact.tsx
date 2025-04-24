// //import React from 'react';
// import { motion } from 'framer-motion';
// import { Phone, Mail, MapPin } from 'lucide-react';

// const Contact = () => {
//   const fadeIn = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0 }
//   };

//   return (
//     <div className="min-h-screen bg-white pt-24">
//       {/* Hero Section */}
//       <div className="container mx-auto px-4 py-12">
//         <div className="max-w-4xl">
//           <motion.div
//             initial="hidden"
//             animate="visible"
//             variants={fadeIn}
//             transition={{ duration: 0.6 }}
//           >
//             <div className="flex items-center gap-2 mb-6">
//               <div className="w-3 h-3 rounded-full bg-green-500"></div>
//               <p className="text-lg font-medium">ACCEPTING PROJECTS FOR Q2 2025</p>
//             </div>
//             <h1 className="text-6xl font-bold mb-4">Let's Work!</h1>
//             <h2 className="text-6xl font-bold text-gray-300 mb-8">Get in Touch</h2>
//             <p className="text-lg text-gray-600 max-w-2xl mb-12">
//               We only take on 12 projects every year to ensure the highest quality of work. 
//               Currently accepting projects for Q2 2025. Book a call to explore how we can collaborate.
//             </p>
//           </motion.div>

//           {/* Contact Form */}
//           <motion.div
//             initial="hidden"
//             animate="visible"
//             variants={fadeIn}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="max-w-xl"
//           >
//             <form className="space-y-6">
//               <input
//                 type="text"
//                 placeholder="Name"
//                 className="w-full px-6 py-4 bg-gray-100 rounded-xl border-0 focus:ring-2 focus:ring-blue-500"
//               />
//               <input
//                 type="email"
//                 placeholder="Email"
//                 className="w-full px-6 py-4 bg-gray-100 rounded-xl border-0 focus:ring-2 focus:ring-blue-500"
//               />
//               <input
//                 type="tel"
//                 placeholder="Phone"
//                 className="w-full px-6 py-4 bg-gray-100 rounded-xl border-0 focus:ring-2 focus:ring-blue-500"
//               />
//               <button
//                 type="submit"
//                 className="w-full bg-[#FF3D00] text-white py-4 rounded-xl hover:bg-[#FF5722] transition-colors font-medium"
//               >
//                 Send Request
//               </button>
//             </form>
//           </motion.div>
//         </div>
//       </div>

//       {/* Contact Information Cards */}
//       <div className="container mx-auto px-4 py-12">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {/* US Phone */}
//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={fadeIn}
//             transition={{ duration: 0.6 }}
//             className="bg-gray-100 rounded-3xl p-8"
//           >
//             <Phone className="w-8 h-8 mb-4" />
//             <p className="text-gray-600 mb-2">Hyderabad, India</p>
//             <p className="text-xl font-semibold">040-31733088</p>
//           </motion.div>

//           {/* India Phone */}
//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={fadeIn}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="bg-gray-100 rounded-3xl p-8"
//           >
//             <Phone className="w-8 h-8 mb-4" />
//             <p className="text-gray-600 mb-2">Hyderabad, India</p>
//             <p className="text-xl font-semibold">(+91) 8886355612</p>
//           </motion.div>

//           {/* Email */}
//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={fadeIn}
//             transition={{ duration: 0.6, delay: 0.4 }}
//             className="bg-gray-100 rounded-3xl p-8"
//           >
//             <Mail className="w-8 h-8 mb-4" />
//             <p className="text-gray-600 mb-2">Email</p>
//             <p className="text-xl font-semibold">hr@talvox.com</p>
//           </motion.div>
//         </div>

//         {/* Address */}
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={fadeIn}
//           transition={{ duration: 0.6, delay: 0.6 }}
//           className="mt-6"
//         >
//           <div className="bg-gray-100 rounded-3xl p-8 flex items-center gap-4">
//             <MapPin className="w-8 h-8 flex-shrink-0" />
//             <p className="text-xl">8-3-191/57/1 PLOT NO:54/A,Vengal Rao Nagar, Hyderabad, Telangana 500038.</p>
//           </div>
//         </motion.div>
//       </div>

//       {/* Decorative Star */}
//       <div className="fixed top-20 right-20 w-32 h-32 opacity-10">
//         <svg viewBox="0 0 100 100" className="w-full h-full">
//           <path
//             d="M50 0 L60 40 L100 50 L60 60 L50 100 L40 60 L0 50 L40 40 Z"
//             fill="currentColor"
//           />
//         </svg>
//       </div>
//     </div>
//   );
// };

// export default Contact;

import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  // Ref for the form element
  const form = useRef<HTMLFormElement | null>(null);

  // Submit handler
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) {
      alert('Form is not ready. Please try again.');
      return;
    }

    emailjs.sendForm(
      'service_rprz0t1',      // Your EmailJS service ID
      'template_9spannn',     // Your EmailJS template ID
      form.current,
      '-lx7ZauRqyLdots-a'     // Your EmailJS public key
    )
    .then(() => {
      alert('✅ Message sent successfully!');
      e.currentTarget.reset();  // Reset form fields after submit
    })
    // .catch((error) => {
    //   console.error('EmailJS Error:', error.text);
    //   alert('❌ Failed to send message, please try again.');
    // });
  };

  return (
    <div className="min-h-screen bg-white pt-24">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <p className="text-lg font-medium">ACCEPTING PROJECTS FOR Q2 2025</p>
            </div>
            <h1 className="text-6xl font-bold mb-4">Let's Work!</h1>
            <h2 className="text-6xl font-bold text-gray-300 mb-8">Get in Touch</h2>
            <p className="text-lg text-gray-600 max-w-2xl mb-12">
              We only take on 12 projects every year to ensure the highest quality of work. 
              Currently accepting projects for Q2 2025. Book a call to explore how we can collaborate.
            </p>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-xl"
          >
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <input
                type="text"
                name="user_name"
                placeholder="Name"
                required
                className="w-full px-6 py-4 bg-gray-100 rounded-xl border-0 focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                name="user_email"
                placeholder="Email"
                required
                className="w-full px-6 py-4 bg-gray-100 rounded-xl border-0 focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="tel"
                name="user_phone"
                placeholder="Phone"
                required
                className="w-full px-6 py-4 bg-gray-100 rounded-xl border-0 focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                name="message"
                placeholder="Message"
                required
                rows={5}
                className="w-full px-6 py-4 bg-gray-100 rounded-xl border-0 focus:ring-2 focus:ring-blue-500 resize-none"
              />
            
              <button
                type="submit"
                className="w-full bg-[#FF3D00] text-white py-4 rounded-xl hover:bg-[#FF5722] transition-colors font-medium"
              >
                Send Request
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Contact Information Cards */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* US Phone */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="bg-gray-100 rounded-3xl p-8"
          >
            <Phone className="w-8 h-8 mb-4" />
            <p className="text-gray-600 mb-2">Hyderabad, India</p>
            <p className="text-xl font-semibold">040-31733088</p>
          </motion.div>

          {/* India Phone */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gray-100 rounded-3xl p-8"
          >
            <Phone className="w-8 h-8 mb-4" />
            <p className="text-gray-600 mb-2">Hyderabad, India</p>
            <p className="text-xl font-semibold">(+91) 8886355612</p>
          </motion.div>

          {/* Email */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gray-100 rounded-3xl p-8"
          >
            <Mail className="w-8 h-8 mb-4" />
            <p className="text-gray-600 mb-2">Email</p>
            <p className="text-xl font-semibold">hr@talvox.com</p>
          </motion.div>
        </div>

        {/* Address */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-6"
        >
          {/* <div className="bg-gray-100 rounded-3xl p-8 flex items-center gap-4">
            <MapPin className="w-8 h-8 flex-shrink-0" />
            <p className="text-xl">8-3-191/57/1 PLOT NO:54/A,Vengal Rao Nagar, Hyderabad, Telangana 500038.</p>
          </div> */}
        </motion.div>
      </div>

      {/* Decorative Star */}
      <div className="fixed top-20 right-20 w-32 h-32 opacity-10">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path
            d="M50 0 L60 40 L100 50 L60 60 L50 100 L40 60 L0 50 L40 40 Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </div>
  );
};

export default Contact;
