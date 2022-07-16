import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";

const CreateModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        className="font-Wotfard-Medium !bg-primary-500 text-white"
        onClick={onOpen}
      >
        Add Project
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay bg="none" backdropFilter="auto" backdropBlur="2px" />
        <ModalContent className="!max-w-[550px] !bg-zinc-50">
          <ModalHeader className="font-Wotfard-Medium !text-gray-800 !text-[1.9rem]">
            Let's add a new Project 🤓✍️
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form>
              <div className="flex items-center space-x-4">
                <div className="w-full space-y-1 flex flex-col items-start">
                  <label
                    htmlFor="project-name"
                    className="font-Wotfard-Regular text-lg"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    className="p-2 w-full border-zinc-400 focus:outline-none rounded-md border-[1px] bg-slate-50 text-base font-Wotfard-Medium"
                    id="project-name"
                  />
                </div>

                <div className="w-full space-y-1 flex flex-col items-start">
                  <label
                    htmlFor="project-name"
                    className="font-Wotfard-Regular text-lg"
                  >
                    Description
                  </label>
                  <input
                    type="text"
                    className="p-2 w-full border-zinc-400 focus:outline-none rounded-md border-[1px] bg-slate-50 text-base font-Wotfard-Medium"
                    id="project-name"
                  />
                </div>
              </div>
            </form>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CreateModal;
