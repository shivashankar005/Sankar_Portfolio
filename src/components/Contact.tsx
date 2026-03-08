import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react'
import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    console.log('Form submitted:', formData)
    setIsSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' })
      setIsSubmitted(false)
    }, 3000)
  }

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'sankargangula045@gmail.com',
      link: 'mailto:sankargangula045@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 6300698839',
      link: 'tel:+916300698839'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Andhra Pradesh, India',
      link: '#'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="contact" className="py-20 px-4 md:px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Let's Get In Touch
          </h2>
          <p className="text-lg text-slate-400 max-width-2xl mx-auto">
            Have a question or proposal? I'd love to hear from you. Send me a message!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-8">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info) => {
                  const Icon = info.icon
                  return (
                    <motion.a
                      key={info.label}
                      href={info.link}
                      variants={itemVariants}
                      className="glass rounded-lg p-6 hover:border-blue-400/50 transition-all duration-300 flex items-start gap-4 group"
                      whileHover={{ x: 5 }}
                    >
                      <div className="p-3 bg-blue-500/20 rounded-lg group-hover:bg-blue-500/30 transition-colors">
                        <Icon className="text-blue-400" size={24} />
                      </div>
                      <div>
                        <p className="text-slate-400 text-sm mb-1">{info.label}</p>
                        <p className="text-white font-semibold">{info.value}</p>
                      </div>
                    </motion.a>
                  )
                })}
              </div>
            </div>

            {/* Professional Links */}
            <div>
              <h3 className="text-lg font-bold text-white mb-4">Professional Links</h3>
              <div className="flex gap-4">
                <motion.a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  className="p-3 bg-slate-700/50 hover:bg-slate-600 rounded-lg text-slate-300 hover:text-blue-400 transition-all duration-300 group"
                  title="GitHub"
                >
                  <Github size={20} className="group-hover:scale-110 transition-transform" />
                </motion.a>
                <motion.a
                  href="https://linkedin.com/in/gangula-sivasankaravaraprasad/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  className="p-3 bg-slate-700/50 hover:bg-slate-600 rounded-lg text-slate-300 hover:text-blue-400 transition-all duration-300 group"
                  title="LinkedIn"
                >
                  <Linkedin size={20} className="group-hover:scale-110 transition-transform" />
                </motion.a>
                <motion.a
                  href="mailto:sankargangula045@gmail.com"
                  whileHover={{ scale: 1.1, y: -3 }}
                  className="p-3 bg-slate-700/50 hover:bg-slate-600 rounded-lg text-slate-300 hover:text-blue-400 transition-all duration-300 group"
                  title="Email"
                >
                  <Mail size={20} className="group-hover:scale-110 transition-transform" />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            onSubmit={handleSubmit}
            className="glass rounded-lg p-8"
          >
            <motion.div variants={itemVariants} className="mb-6">
              <label className="block text-white font-semibold mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-slate-700 transition-colors"
                placeholder="Your name"
              />
            </motion.div>

            <motion.div variants={itemVariants} className="mb-6">
              <label className="block text-white font-semibold mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-slate-700 transition-colors"
                placeholder="your.email@example.com"
              />
            </motion.div>

            <motion.div variants={itemVariants} className="mb-6">
              <label className="block text-white font-semibold mb-2">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-slate-700 transition-colors"
                placeholder="Message subject"
              />
            </motion.div>

            <motion.div variants={itemVariants} className="mb-8">
              <label className="block text-white font-semibold mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-slate-700 transition-colors resize-none"
                placeholder="Your message..."
              />
            </motion.div>

            <motion.button
              variants={itemVariants}
              type="submit"
              disabled={isSubmitted}
              className="w-full bg-blue-500 hover:bg-blue-600 disabled:bg-green-500 text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-all duration-300"
            >
              {isSubmitted ? (
                <>✓ Message Sent!</>
              ) : (
                <>
                  <Send size={20} />
                  Send Message
                </>
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default Contact
