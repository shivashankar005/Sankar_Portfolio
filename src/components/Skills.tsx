import { motion } from 'framer-motion'
import { RadarChart, Radar, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts'
import { Code2, Database, Layout, Zap } from 'lucide-react'

const Skills = () => {
  // Skills data for visualizations
  

  const radarData = [
    { category: 'Java', value: 92 },
    { category: 'Spring Boot', value: 88 },
    { category: 'Database Design', value: 85 },
    { category: 'REST APIs', value: 87 },
    { category: 'Problem Solving', value: 90 },
    { category: 'Team Work', value: 88 },
  ]

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code2,
      skills: ['Java (Core, OOP)', 'SQL']
    },
    {
      title: 'Backend Framework',
      icon: Code2,
      skills: ['Spring Boot', 'REST APIs', 'JPA / Hibernate']
    },
    {
      title: 'Database',
      icon: Database,
      skills: ['MySQL']
    },
    {
      title: 'Developer Tools',
      icon: Zap,
      skills: ['Git / GitHub', 'Maven', 'Postman', 'IntelliJ IDEA']
    },
    {
      title: 'Frontend (Basic)',
      icon: Layout,
      skills: ['HTML5', 'CSS3', 'Bootstrap']
    },
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
    <section id="skills" className="py-20 bg-slate-800/50">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Section header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Specialized in Java backend development with expertise in Spring Boot, REST APIs, and database design
          </p>
        </motion.div>

        {/* Skill Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {skillCategories.map((category) => {
            const Icon = category.icon
            return (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="glass rounded-lg p-6 hover:border-blue-400/50 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-500/20 rounded-lg">
                    <Icon className="text-blue-400" size={24} />
                  </div>
                  <h3 className="font-semibold text-white">{category.title}</h3>
                </div>
                <ul className="space-y-2">
                  {category.skills.map((skill) => (
                    <li key={skill} className="text-sm text-slate-300">
                      • {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Comprehensive Skill Overview Chart */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="glass rounded-lg p-8 mb-16"
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Comprehensive Skill Overview</h3>
          <ResponsiveContainer width="100%" height={450}>
            <RadarChart data={radarData}>
              <PolarAngleAxis dataKey="category" stroke="#94a3b8" />
              <PolarRadiusAxis stroke="#334155" angle={90} domain={[0, 100]} />
              <Radar
                name="Skills"
                dataKey="value"
                stroke="#3b82f6"
                fill="#3b82f6"
                fillOpacity={0.6}
              />
            </RadarChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Certifications & Achievements</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { name: 'Learn Java - CodeChef', issuer: 'CodeChef', icon: '☕' },
              { name: 'Database Management Systems - CodeChef', issuer: 'CodeChef', icon: '🗄️' },
            ].map((cert, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass rounded-lg p-6 hover:border-blue-400/50 transition-all duration-300 flex items-start gap-4"
                whileHover={{ y: -5 }}
              >
                <div className="text-3xl">{cert.icon}</div>
                <div className="flex-1">
                  <h4 className="font-semibold text-white mb-1">{cert.name}</h4>
                  <p className="text-sm text-slate-400">{cert.issuer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
