//import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Rocket, MonitorSmartphone, PenTool, Lightbulb, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 }
  };

  return (
    <div className="w-full overflow-hidden pt-16">
      {/* Hero Section */}
      <section className="min-h-screen relative flex items-center">
        {/* Background Video */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute min-w-full min-h-full object-cover"
            style={{ filter: 'brightness(0.6)' }}
          >
            <source 
              src="https://videos.pexels.com/video-files/5680034/5680034-hd_1920_1080_24fps.mp4" 
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/50 to-black/70 mix-blend-multiply"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-blue-400"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Crafting Digital Excellence
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl mb-8 text-blue-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              We transform ideas into powerful digital solutions that drive growth and innovation
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold inline-flex items-center hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Your Project
                <ArrowRight className="ml-2" />
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Animated Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 10 }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white" ref={ref}>
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Our Expertise</h2>
            <p className="text-gray-600 text-lg">Comprehensive digital solutions for modern businesses</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: <MonitorSmartphone className="w-12 h-12 text-blue-500" />,
                title: "Web Development",
                description: "Custom websites and progressive web applications"
              },
              {
                icon: <PenTool className="w-12 h-12 text-purple-500" />,
                title: "UI/UX Design",
                description: "Intuitive and engaging user experiences"
              },
              {
                icon: <Lightbulb className="w-12 h-12 text-yellow-500" />,
                title: "Digital Strategy",
                description: "Data-driven solutions for business growth"
              },
              {
                icon: <Rocket className="w-12 h-12 text-red-500" />,
                title: "Brand Identity",
                description: "Memorable and impactful brand experiences"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2"
              >
                <div className="mb-6 transform transition-transform duration-300 group-hover:scale-110">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Work Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Recent Work</h2>
            <p className="text-gray-600 text-lg">Showcasing our latest digital innovations</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                image: "https://textileinsights.in/wp-content/uploads/2024/03/Avient-1.jpg",
                title: "Hardrada",
                category: "Athletic Apparel",
                link: "https://hardrada.in/"
              },
              {
                image: "https://cdn.thewirecutter.com/wp-content/media/2023/11/gamingconsoles-2048px-00694.jpg",
                title: "e2z Store",
                category: "Gaming & Electronics",
                link: "https://e2zstore.com/"
              },
              {
                image: "https://img.etimg.com/thumb/msid-80790874,width-1200,height-900,imgsize-97196,resizemode-8,quality-100/industry/cons-products/fashion-/-cosmetics-/-jewellery/fashion-and-lifestyle-brands-expect-full-recovery-in-the-second-half-of-2021.jpg",
                title: "Diadem Store",
                category: "Fashion & Lifestyle",
                link: "https://diademstore.com/"
              },
              {
                image: "https://villvam.com/cdn/shop/files/0BC804EE-1A99-4A02-AC0A-2C870D38C927_1500x.jpg?v=1701676348",
                title: "Hayagrivas Silk House",
                category: "Traditional Silk Sarees",
                link: "https://www.hayagrivassilkhouse.com/"
              },
              {
                image: "https://thenmozhidesigns.com/cdn/shop/files/DSC08664_1.jpg?v=1692708178&width=1326",
                title: "Panjavarnam",
                category: "Handloom Sarees",
                link: "https://panjavarnam.com/"
              },
              {
                image: "https://ethnicelement.in/cdn/shop/files/03_4.jpg?v=1729067250",
                title: "Prashanti Sarees",
                category: "Ethnic Wear",
                link: "https://www.prashantisarees.com/"
              },
              {
                image: "https://dakshinweaves.com/cdn/shop/files/CPS-004C1.jpg?v=1704458902&width=1080",
                title: "Dakshin Weaves",
                category: "Handwoven Textiles",
                link: "https://dakshinweaves.com/"
              },
              {
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiTYwHHTKdTn1S8ZCfmYuJcD4KzBySPmZYHw&s",
                title: "Medicare Consumer",
                category: "Healthcare Services",
                link: "https://medicareconsumer.com/"
              },
              {
                image: "https://cludobits.com/wp-content/uploads/2021/05/https___specials-images.forbesimg.com_imageserve_5d9231058b5ffa0006556d13_0x0.jpg",
                title: "Roothoot",
                category: "Digital Solutions",
                link: "https://roothoot.com"
              },
              {
                image: "https://www.jesvenues.com/images/services/photographer-for-function.jpg",
                title: " BirdsVue",
                category: "Photography Services",
                link: "https://birdsvue.com/​"
              },
              {
                image: "https://www.hemantevents.com/admin/uploads/product/16956341366y.jpg",
                title: "JDR Gardens",
                category: "Event Venue",
                link: " https://jdrgardens.in/​​"
              },
              {
                image: "https://www.aryupaytech.com/assets/images/services/itser.jpg",
                title: "Medha IT",
                category: " IT Services",
                link: " https://medhait.in/​"
              },
              {
                image: "https://www.oasisdermatology.com/wp-content/uploads/2022/12/What-is-Cosmetic-Dermatology-Oasis-Dermatology-1000x658.jpg",
                title: "Vasavi Skin Center",
                category: "Dermatology Clinic",
                link: " https://vasaviskincenter.com/"
              },
              {
                image: "https://brijdentalclinic.com/wp-content/uploads/2020/04/Smile-at-Brij-Dental-Clinic.jpg",
                title: "Biddeford Family Dentistry",
                category: "Dental Clinic",
                link: "https://www.biddefordfamilydentistry.com/"
              },
              {
                image: "https://imgmediagumlet.lbb.in/media/2021/06/60b9a069bb262054f5e96bc9_1622777961098.jpg",
                title: "Green India Trust",
                category: "Environmental NGO",
                link: "https://gitrust.org/"
              },
              {
                image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                title: "Neshna Trust",
                category: "Non-Profit Organization",
                link: "https://neshna.org/​​"
              },
              {
                image: "https://browntownresort.com/wp-content/uploads/2022/11/Himalyan-Suites1-min-1.jpg",
                title: "The Leela Kovalam",
                category: "Luxury Resort",
                link: " https://www.theleela.com/the-leela-kovalam-a-raviz-hotel​​​"
              },
              {
                image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/90/78/2c/caption.jpg?w=900&h=500&s=1",
                title: "Evolve Back",
                category: "Luxury Resort",
                link: "https://www.evolveback.com/​​"
              },
              {
                image: "https://visiondataanalytics.com/wp-content/uploads/2022/01/process.jpg",
                title: "iPlace Consultant",
                category: "Recruitment Services",
                link: "https://iplaceusa.com/​"
              },
              {
                image: "https://okcredit-blog-images-prod.storage.googleapis.com/2020/12/shutterstock_195102122.jpg",
                title: "TIGI HR",
                category: "Recruitment Agency",
                link: "https://tigihr.com/employer​"
              }






            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="group relative bg-gray-100 rounded-3xl p-8 hover:bg-white transition-all duration-500 hover:shadow-xl"
              >
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{project.title}</h3>
                    <p className="text-gray-600">{project.category}</p>
                  </div>
                  <div className="bg-white rounded-full p-2 shadow-md group-hover:bg-blue-50 transition-colors duration-300">
                    <a href={project.link?.trim() || '#'} target="_blank" rel="noopener noreferrer">
                      <ArrowUpRight className="w-6 h-6 text-blue-600" />
                    </a>
                  </div>
                </div>
                <a
                  href={project.link?.trim() || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative overflow-hidden rounded-2xl aspect-[4/3]"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Our Process</h2>
            <p className="text-gray-600 text-lg">How we bring your vision to life</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: "01", title: "Discovery", description: "Understanding your needs" },
              { number: "02", title: "Strategy", description: "Planning the solution" },
              { number: "03", title: "Design", description: "Creating the experience" },
              { number: "04", title: "Development", description: "Building the solution" }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="text-6xl font-bold text-blue-100 mb-4 group-hover:text-blue-500 transition-colors duration-300">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-blue-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={scaleIn}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-8">Ready to Transform Your Digital Presence?</h2>
            <p className="text-xl mb-8 text-blue-100">Let's create something extraordinary together</p>
            <Link
              to="/contact"
              className="bg-white text-blue-900 px-8 py-4 rounded-full text-lg font-semibold inline-flex items-center hover:bg-blue-50 transition-all duration-300 transform hover:scale-105"
            >
              Start a Project
              <ArrowRight className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;