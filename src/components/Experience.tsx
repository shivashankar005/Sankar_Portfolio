import { motion } from 'framer-motion'
import { Briefcase, Calendar } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      title: 'Bachelor of Technology in Computer Science & Engineering',
      company: 'Kalasalingam Academy of Research and Education (KARE)',
      period: 'Sept 2022 – Apr 2026',
      description: 'Pursuing BTech in CSE with a strong focus on backend development and database management. Currently maintaining a CGPA of 8.06/10.0.',
      skills: ['Java', 'Spring Boot', 'MySQL', 'REST APIs', 'Git'],
      type: 'education'
    },
    {
      title: 'Event Coordinator',
      company: 'College',
      period: '2023 - Present',
      description: 'Coordinated and executed multiple events managing 100+ participants. Streamlined communication workflows between organizers and teams, improving event execution efficiency. Handled logistics, scheduling, and participant coordination ensuring zero delays and high satisfaction.',
      skills: ['Leadership', 'Project Management', 'Communication', 'Organization'],
      type: 'work'
    },
    {
      title: 'Board of Intermediate Education',
      company: 'Sri Nagarjuna Junior College',
      period: 'July 2020 – Mar 2022',
      description: 'Completed intermediate education with 80.2% aggregate score.',
      skills: [],
      type: 'education'
    },
  ]

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
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="experience" className="py-20 px-4 md:px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Experience & Education
          </h2>
          <p className="text-lg text-slate-400">
            My professional journey and academic background
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="relative"
        >
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full" />

          {/* Experience items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`flex flex-col md:flex-row gap-6 md:gap-0 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'}`}>
                  <motion.div
                    className="glass rounded-lg p-6 hover:border-blue-400/50 transition-all duration-300"
                    whileHover={{ y: -5 }}
                  >
                    {/* Header */}
                    <div className="flex items-start gap-3 mb-3">
                      {exp.type === 'work' ? (
                        <Briefcase size={20} className="text-blue-400 flex-shrink-0 mt-1" />
                      ) : (
                        <Calendar size={20} className="text-cyan-400 flex-shrink-0 mt-1" />
                      )}
                      <div>
                        <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                        <p className="text-blue-400 font-semibold">{exp.company}</p>
                      </div>
                    </div>

                    {/* Period */}
                    <div className="flex items-center gap-2 text-slate-400 text-sm mb-4">
                      <Calendar size={16} />
                      {exp.period}
                    </div>

                    {/* Description */}
                    <p className="text-slate-300 mb-4">{exp.description}</p>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-medium border border-blue-500/30"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Timeline dot */}
                <div className="flex justify-center md:flex-col">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                    className="w-4 h-4 bg-blue-500 rounded-full border-4 border-slate-900 flex-shrink-0"
                  />
                </div>

                {/* Spacer for left items */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
