//import React from 'react';
import { useRef } from 'react';
import emailjs from 'emailjs-com';
// import { Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          'service_dak7bc3',       // Replace with your EmailJS service ID
          'template_9spannn',      // Replace with your EmailJS template ID
          form.current,
          '-lx7ZauRqyLdots-a'      // Replace with your EmailJS public key
        )
        .then(
          (result) => {
            console.log('Email sent successfully:', result.text);
            alert('Message sent successfully!');
            form.current?.reset();
          },
          // (error) => {
          //   console.error('Error sending email:', error.text);
          //   alert('Failed to send message.');
          // }
        );
    }
  };

  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="bg-[#1A1A1A] rounded-3xl p-8 md:p-12 mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                You have plenty to deal with.<br />
                Leave the website to us!
              </h2>
              <p className="text-gray-400">
                We've got the skills, you've got the vision. Let's make something epic.
              </p>
            </div>
            <div>
              <form ref={form} onSubmit={sendEmail} className="space-y-4">
                <input
                  type="text"
                  name="user_name"
                  placeholder="Name"
                  className="w-full px-4 py-3 bg-black/50 border border-gray-800 rounded-lg focus:outline-none focus:border-blue-500 text-white"
                />
                <input
                  type="email"
                  name="user_email"
                  placeholder="Email"
                  className="w-full px-4 py-3 bg-black/50 border border-gray-800 rounded-lg focus:outline-none focus:border-blue-500 text-white"
                />
                <input
                  type="tel"
                  name="user_phone"
                  placeholder="Phone"
                  className="w-full px-4 py-3 bg-black/50 border border-gray-800 rounded-lg focus:outline-none focus:border-blue-500 text-white"
                />
                <textarea
                  name="message"
                  placeholder="Message"
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-black/50 border border-gray-800 rounded-lg focus:outline-none focus:border-blue-500 text-white resize-none"
                />
                <button
                  type="submit"
                  className="w-full bg-[#FF3D00] text-white py-3 rounded-lg hover:bg-[#FF5722] transition-colors"
                >
                  Send Request
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Footer Content */}
        <div className="border-t border-gray-800 pt-00">
          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="text-center md:text-left">
              <img src="../im2.png" alt="Your Company" className="h-14 w-100" />
            </div>
            <div className="text-center text-gray-400 space-y-2">
              <p>Tel: 040-31733088</p>
              <p>India: (+91) 8886355612</p>
              <p>hr@talvox.com</p>
            </div>
            <div className="flex justify-center md:justify-end space-x-6">
              <a href="https://www.facebook.com/profile.php?id=61565958100956" className="text-gray-400 hover:text-white">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="https://in.linkedin.com/company/talvox-pvt-ltd" className="text-gray-400 hover:text-white">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://www.instagram.com/talvoxpvtltd/" className="text-gray-400 hover:text-white">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div> */}
          <div className="text-center text-gray-400 text-sm mt-16">
            <p>© {new Date().getFullYear()} Talvox. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
