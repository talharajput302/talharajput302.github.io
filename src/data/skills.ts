import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiCplusplus,
  SiFastapi,
  SiFlask,
  SiExpress,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiDjango,
  SiNodedotjs,
  SiRedux,
  SiGraphql,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiRedis,
  SiSqlite,
  SiFirebase,
  SiGit,
  SiGithub,
  SiDocker,
  SiKubernetes,
  SiGithubactions,
  SiGooglecloud,
  SiNginx,
  SiPostman,
  type IconType,
} from "@icons-pack/react-simple-icons";

export type Skill = {
  name: string;
  icon: IconType;
};

export type SkillGroup = {
  label: string;
  items: Skill[];
};

// Wide candidate list — prune what doesn't actually apply.
export const skillGroups: SkillGroup[] = [
  {
    label: "Languages",
    items: [
      { name: "Python", icon: SiPython },
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "C++", icon: SiCplusplus },
    ],
  },
  {
    label: "Frameworks & Libraries",
    items: [
      { name: "FastAPI", icon: SiFastapi },
      { name: "Flask", icon: SiFlask },
      { name: "Express", icon: SiExpress },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "React", icon: SiReact },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Django", icon: SiDjango },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Redux", icon: SiRedux },
      { name: "GraphQL", icon: SiGraphql },
    ],
  },
  {
    label: "Databases",
    items: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MongoDB", icon: SiMongodb },
      { name: "MySQL", icon: SiMysql },
      { name: "Redis", icon: SiRedis },
      { name: "SQLite", icon: SiSqlite },
      { name: "Firebase", icon: SiFirebase },
    ],
  },
  {
    label: "Tools & Platforms",
    items: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Docker", icon: SiDocker },
      { name: "Kubernetes", icon: SiKubernetes },
      { name: "GitHub Actions", icon: SiGithubactions },
      { name: "Google Cloud", icon: SiGooglecloud },
      { name: "Nginx", icon: SiNginx },
      { name: "Postman", icon: SiPostman },
    ],
  },
];
