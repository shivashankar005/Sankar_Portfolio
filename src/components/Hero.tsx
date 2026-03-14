import { motion } from 'framer-motion'
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 px-4"
    >
      <motion.div
        className="max-w-4xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main heading */}
        <motion.div variants={itemVariants}>
          <h1 className="text-5xl md:text-6xl font-bold mb-12 leading-relaxed">
            <span className="block text-white mb-4">Hi, I'm</span>
            <span className="block gradient-text text-5xl md:text-6xl font-bold">
              Gangula Sivasankaravaraprasad
            </span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed font-semibold"
        >
          Java Backend Engineer
        </motion.p>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-lg text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          Java Backend Developer with hands-on experience in Spring Boot, REST APIs and MySQL. Seeking an entry-level role to build secure, scalable backend systems and grow in real-world product development.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-6 justify-center mb-12"
        >
          <a
            href="#projects"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg flex items-center justify-center gap-2 transition-all duration-300"
          >
            View Projects
            <ArrowRight size={20} />
          </a>
          <a
            href="https://linkedin.com/in/gangula-sivasankaravaraprasad/"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-blue-500 text-blue-400 hover:bg-blue-500/10 font-bold py-3 px-8 rounded-lg transition-all duration-300"
          >
            LinkedIn Profile
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex gap-6 justify-center"
        >
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-blue-400 transition-colors duration-300 p-3 border border-slate-700 rounded-full hover:border-blue-500"
          >
            <Github size={24} />
          </a>
          <a
            href="https://linkedin.com/in/gangula-sivasankaravaraprasad/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-blue-400 transition-colors duration-300 p-3 border border-slate-700 rounded-full hover:border-blue-500"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:sankargangula045@gmail.com"
            className="text-slate-400 hover:text-blue-400 transition-colors duration-300 p-3 border border-slate-700 rounded-full hover:border-blue-500"
          >
            <Mail size={24} />
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-blue-500 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-blue-500 rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
