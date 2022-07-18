import { useState, useContext } from "react";
import { ProjectContext } from "../contexts/ProjectContext";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Input,
  Textarea,
  IconButton,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";

const UpdateProjectModal = ({ projectData }) => {
  const [name, setName] = useState(projectData.name);
  const [description, setDescription] = useState(projectData.description);
  const [repoLink, setRepoLink] = useState(projectData.repoLink);
  const [liveDemo, setLiveDemo] = useState(projectData.liveDemo);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const { updateProject } = useContext(ProjectContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateProject({
      name,
      description,
      repoLink,
      liveDemo,
      id: projectData._id,
    });

    setName("");
    setDescription("");
    setLiveDemo("");
    setRepoLink("");

    onClose();
  };

  return (
    <>
      <IconButton
        size="sm"
        onClick={onOpen}
        aria-label="Delete"
        icon={<EditIcon w={4} h={4} />}
      />

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay bg="none" backdropFilter="auto" backdropBlur="2px" />
        <ModalContent className="!max-w-[550px] !bg-zinc-50">
          <form onSubmit={handleSubmit}>
            <ModalHeader className="font-Wotfard-Medium !text-gray-800 !text-[1.9rem]">
              Update {projectData.name}
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <div className="flex items-center space-y-2 space-x-4">
                <div className="w-full space-y-1 flex flex-col items-start">
                  <label
                    htmlFor="project-name"
                    className="font-Wotfard-Regular text-lg"
                  >
                    Name
                  </label>
                  <Input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="font-Wotfard-Medium"
                    id="project-name"
                  />
                </div>

                <div className="w-full space-y-1 flex flex-col items-start">
                  <label
                    htmlFor="project-repo"
                    className="font-Wotfard-Regular text-lg"
                  >
                    Git Repository
                  </label>
                  <Input
                    value={repoLink}
                    onChange={(e) => setRepoLink(e.target.value)}
                    required
                    className="font-Wotfard-Medium"
                    id="project-repo"
                  />
                </div>
              </div>
              <div className="w-full space-y-1 flex flex-col items-start">
                <label
                  htmlFor="project-demo"
                  className="font-Wotfard-Regular text-lg"
                >
                  Live link
                </label>
                <Input
                  value={liveDemo}
                  onChange={(e) => setLiveDemo(e.target.value)}
                  required
                  className="font-Wotfard-Medium"
                  id="project-demo"
                />
              </div>
              <div className="w-full space-y-1 flex flex-col items-start">
                <label
                  htmlFor="project-desc"
                  className="font-Wotfard-Regular text-lg"
                >
                  Description
                </label>
                <Textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                  className="font-Wotfard-Medium"
                  id="project-desc"
                />
              </div>
            </ModalBody>

            <ModalFooter>
              <Button
                mr={3}
                onClick={onClose}
                className="!text-gray-800 font-Wotfard-Regular"
              >
                Close
              </Button>
              <Button
                type="submit"
                disabled={!name || !description || !repoLink || !liveDemo}
                className="!bg-primary-600 font-Wotfard-Regular hover:!bg-primary-500 !text-zinc-50"
                variant="ghost"
              >
                Update
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
};

export default UpdateProjectModal;
