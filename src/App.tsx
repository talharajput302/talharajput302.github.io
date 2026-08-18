import { Routes, Route } from "react-router-dom";
import { Layout } from "@/components/layout/layout";
import { Home } from "@/pages/home";
import { SkillsPage } from "@/pages/skills";
import { ProjectsPage } from "@/pages/projects";
import { ProjectDetail } from "@/pages/project-detail";
import { NotFound } from "@/pages/not-found";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
