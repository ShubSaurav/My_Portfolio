import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Users, MessageSquare, Calendar, Award } from "lucide-react";

const experiences = [
  {
    title: "Class Representative",
    organization: "CSE Department",
    period: "2023 - Present",
    description: "Leading a class of 60+ students, coordinating with faculty, and organizing academic activities.",
    icon: Users,
    skills: ["Leadership", "Communication", "Organization"],
  },
  {
    title: "Tech Event Coordinator",
    organization: "College Tech Fest",
    period: "2024",
    description: "Organized technical events and workshops, managing teams and ensuring smooth execution.",
    icon: Calendar,
    skills: ["Event Management", "Team Coordination", "Problem Solving"],
  },
];

const softSkills = [
  { name: "Leadership", icon: Users, level: 90 },
  { name: "Communication", icon: MessageSquare, level: 85 },
  { name: "Problem Solving", icon: Award, level: 88 },
  { name: "Team Collaboration", icon: Users, level: 92 },
];

export const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding relative overflow-hidden bg-card/30">
      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium mb-4 block">MY JOURNEY</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
            Experience & <span className="gradient-text">Leadership</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Timeline */}
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-secondary" />
            
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="relative pl-20"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <exp.icon size={16} className="text-primary-foreground" />
                  </div>

                  <div className="glass-card p-6 hover-glow">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="text-primary text-sm font-medium">{exp.period}</span>
                      <span className="text-muted-foreground">•</span>
                      <span className="text-muted-foreground text-sm">{exp.organization}</span>
                    </div>
                    <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                      {exp.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass-card p-8"
          >
            <h3 className="font-heading text-2xl font-bold text-foreground mb-8">
              Soft <span className="gradient-text">Skills</span>
            </h3>
            
            <div className="space-y-6">
              {softSkills.map((skill, index) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                        <skill.icon size={18} className="text-primary" />
                      </div>
                      <span className="text-foreground font-medium">{skill.name}</span>
                    </div>
                    <span className="text-primary font-medium">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                      className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
