import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  IconButton,
  createIcon,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import moment from "moment";

const GithubIcon = createIcon({
  viewBox: "0 0 58 56",
  path: (
    <path d="M29 0C12.6875 0 0 12.6452 0 28.9032C0 47.871 17.2188 56 19.9375 56C21.75 56 21.75 55.0968 21.75 54.1935V49.6774C15.4062 51.4839 12.6875 47.871 11.7812 45.1613C11.7812 45.1613 11.7812 44.2581 9.96875 42.4516C9.0625 41.5484 5.4375 39.7419 9.0625 39.7419C11.7812 39.7419 13.5938 43.3548 13.5938 43.3548C16.3125 46.9677 19.9375 46.0645 21.75 45.1613C21.75 43.3548 23.5625 41.5484 23.5625 41.5484C16.3125 40.6452 10.875 37.9355 10.875 28C10.875 24.3871 11.7812 21.6774 13.5938 19.871C13.5938 19.871 11.7812 16.2581 13.5938 11.7419C13.5938 11.7419 18.125 11.7419 21.75 15.3548C24.4688 13.5484 33.5312 13.5484 36.25 15.3548C39.875 11.7419 44.4062 11.7419 44.4062 11.7419C46.2188 18.0645 44.4062 19.871 44.4062 19.871C46.2188 21.6774 47.125 24.3871 47.125 28C47.125 37.9355 40.7812 40.6452 34.4375 41.5484C35.3438 42.4516 36.25 44.2581 36.25 46.9677V54.1935C36.25 55.0968 36.25 56 38.0625 56C40.7812 56 58 47.871 58 28.9032C58 12.6452 45.3125 0 29 0Z" />
  ),
});

const ProjectDetailsModal = ({ projectData }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        className="!bg-primary-600 hover:!bg-primary-500 !text-zinc-50 font-Wotfard-Regular"
        onClick={onOpen}
      >
        View details
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay bg="none" backdropFilter="auto" backdropBlur="2px" />
        <ModalContent className="!bg-zinc-50">
          <ModalHeader className="!font-Wotfard-Medium !text-3xl !text-gray-800">
            {projectData?.name}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div className="space-y-4">
              <p className="font-Wotfard-Regular text-gray-800">
                {projectData?.description}
              </p>
              <p className="font-Wotfard-Regular text-gray-800">
                Created on:{" "}
                <span className="font-Wotfard-Medium">
                  {moment(projectData?.createdAt).startOf("ss").fromNow()}
                </span>
              </p>
              <div className="flex space-x-2 items-center">
                <a href={projectData?.liveDemo} target="_blank">
                  <IconButton
                    aria-label="Live demo"
                    icon={<ArrowForwardIcon w={5} h={5} />}
                  />
                </a>
                <a href={projectData?.repoLink} target="_blank">
                  <IconButton
                    aria-label="GitHub repo"
                    icon={<GithubIcon w={5} h={5} />}
                  />
                </a>
              </div>
            </div>
          </ModalBody>

          <ModalFooter>
            <Button
              className="!text-gray-800 font-Wotfard-Regular"
              onClick={onClose}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProjectDetailsModal;
