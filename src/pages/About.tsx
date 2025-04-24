//import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, Target, Award, Coffee } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl font-bold mb-6">About Us</h1>
            <p className="text-xl text-gray-300">
              We're a team of passionate creators, innovators, and problem solvers
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white" ref={ref}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeIn}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
              Founded in 2024, Talvox is an IT services company offering custom software development, IT consulting, and digital transformation solutions.
              </p>
              <p className="text-gray-600">
              Our mission is to provide exceptional digital experiences that drive growth and create lasting impact for our clients.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Team collaboration"
                className="rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-gray-600 text-lg">The principles that guide everything we do</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: <Users className="w-12 h-12 text-blue-500" />,
                title: "Collaboration",
                description: "We work together to achieve exceptional results"
              },
              {
                icon: <Target className="w-12 h-12 text-purple-500" />,
                title: "Excellence",
                description: "We strive for perfection in everything we do"
              },
              {
                icon: <Award className="w-12 h-12 text-green-500" />,
                title: "Innovation",
                description: "We push boundaries and embrace new technologies"
              },
              {
                icon: <Coffee className="w-12 h-12 text-red-500" />,
                title: "Passion",
                description: "We love what we do and it shows in our work"
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Our Team</h2>
            <p className="text-gray-600 text-lg">Meet the people behind our success</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                name: "Sarah Johnson",
                role: "CEO & Founder"
              },
              {
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                name: "Michael Chen",
                role: "Technical Director"
              },
              {
                image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                name: "Emily Davis",
                role: "Creative Director"
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default About;