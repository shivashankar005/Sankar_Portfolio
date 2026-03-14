import { motion } from 'framer-motion'
import { Github } from 'lucide-react'

const Projects = () => {
  const projects = [
{
  title: "Online Retail Management System",
  description:
    "Spring Boot based e-commerce management platform with CRUD operations, product catalog management, and MySQL persistence using JPA.",
  image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=600&h=400&fit=crop",
  technologies: ["Spring Boot", "JPA", "MySQL", "REST APIs"],
  github: "https://github.com/your-repo"
},

{
  title: "Job Application Tracker",
  description:
    "Full stack job management system where users apply for jobs and admins manage job postings and applications.",
  image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
  technologies: ["Spring Boot", "MySQL", "Thymeleaf"],
  github: "https://github.com/shivashankar005/Job_Application_Tracker"
},
    {
  title: "Toxic Comment Detection - NLP & BERT",
  description:
    "Content moderation system leveraging BERT and NLP algorithms to classify toxic comments with scalable MySQL storage.",
  image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop",
  technologies: ["Python", "BERT", "NLP", "RapidAPI", "MySQL"],
  github: "https://github.com/your-repo"
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
    <section id="projects" className="py-20 bg-slate-800/50 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Projects
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Backend systems and technical implementations showcasing core engineering skills
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group glass rounded-lg overflow-hidden hover:border-blue-400/50 transition-all duration-300"
              whileHover={{ y: -10 }}
            >
              {/* Image */}
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-all duration-300" />
                

              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-300 text-sm mb-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs font-medium border border-blue-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 font-semibold py-2 rounded transition-colors duration-300"
                  >
                    <Github size={16} />
                    View Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View all button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300">
            View All Projects
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
