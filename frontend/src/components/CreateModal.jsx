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
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";

const CreateModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        className="font-Wotfard-Medium !bg-primary-600 hover:!bg-primary-500 text-white"
        onClick={onOpen}
      >
        Add Project
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay bg="none" backdropFilter="auto" backdropBlur="2px" />
        <ModalContent className="!max-w-[550px] !bg-zinc-50">
          <ModalHeader className="font-Wotfard-Medium !text-gray-800 !text-[1.9rem]">
            Let's add a new Project
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form className="space-y-2">
              <div className="flex items-center space-x-4">
                <div className="w-full space-y-1 flex flex-col items-start">
                  <label
                    htmlFor="project-name"
                    className="font-Wotfard-Regular text-lg"
                  >
                    Name
                  </label>
                  <Input
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
                  required
                  className="font-Wotfard-Medium"
                  id="project-desc"
                />
              </div>
            </form>
          </ModalBody>

          <ModalFooter>
            <Button
              mr={3}
              onClick={onClose}
              className="!text-gray-800 font-Wotfard-Medium"
            >
              Close
            </Button>
            <Button
              className="!bg-primary-600 font-Wotfard-Medium hover:!bg-primary-500 !text-white"
              variant="ghost"
            >
              Submit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CreateModal;
