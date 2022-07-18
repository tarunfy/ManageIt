import empty from "../assets/images/empty.svg";

const EmptyState = () => {
  return (
    <div className="flex items-center flex-col space-y-4">
      <img src={empty} alt="empty state" className="h-[400px] w-[400px]" />
      <p className="font-Wotfard-Regular text-xl text-center">
        No projects found, please create a new project.
      </p>
    </div>
  );
};

export default EmptyState;
