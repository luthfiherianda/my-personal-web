import { useState } from "react";
import { FolderKanban } from "lucide-react";
import {
  featuredProject,
  getProjectById,
  gridProjects,
} from "../../data/projects";
import ProjectCard from "../ui/ProjectCard";
import ProjectModal from "../ui/ProjectModal";
import SectionHeader from "../ui/SectionHeader";

export default function Projects() {
  const [selectedId, setSelectedId] = useState(null);
  const selectedProject = getProjectById(selectedId);

  return (
    <>
      <section id="projects" className="md:col-span-6">
        <SectionHeader label="Projects" icon={FolderKanban} />

        <div className="mt-4">
          <ProjectCard
            project={featuredProject}
            featured
            onOpen={setSelectedId}
          />
        </div>

      <div className="mt-4 grid grid-cols-1 gap-3 min-[480px]:grid-cols-2 md:gap-4">
          {gridProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpen={setSelectedId}
            />
          ))}
        </div>
      </section>

      {selectedProject ? (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedId(null)}
        />
      ) : null}
    </>
  );
}
