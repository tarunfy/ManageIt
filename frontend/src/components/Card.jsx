import DeleteConfirmationModal from "./DeleteConfirmationModal";
import ViewProjectModal from "./ProjectDetailsModal";
import UpdateProjectModal from "./UpdateProjectModal";

const truncate = (string, n) =>
  string?.length > n ? string.substr(0, n - 1) + "..." : string;

const Card = ({ projectData }) => {
  return (
    <div className="px-4 py-2 border-[2px] hover:shadow-xl shadow-md transition-all hover:-translate-y-1  duration-150 ease-linear border-primary-500 rounded-md space-y-5 bg-zinc-50">
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-Wotfard-Bold text-gray-800">
            {projectData.name}
          </h1>
          <div className="flex items-center space-x-2">
            <UpdateProjectModal projectData={projectData} />
            <DeleteConfirmationModal projectData={projectData} />
          </div>
        </div>
        <p className="text-base font-Wotfard-Regular text-gray-800">
          {truncate(projectData.description, 80)}
        </p>
      </div>

      <ViewProjectModal projectData={projectData} />
    </div>
  );
};

export default Card;
