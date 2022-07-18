import { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  IconButton,
  Button,
  Input,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";

const DeleteConfirmationModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [projectName, setProjectName] = useState("");

  return (
    <>
      <IconButton
        onClick={onOpen}
        size="sm"
        aria-label="Delete"
        icon={<DeleteIcon w={4} h={4} />}
      />

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay bg="none" backdropFilter="auto" backdropBlur="2px" />
        <ModalContent>
          <ModalHeader className="font-Wotfard-Regular">
            Are you absolutely sure?
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div className="space-y-3">
              <p className="font-Wotfard-Regular">
                This action cannot be undone. This will permanently delete the
                <span className="font-Wotfard-SemiBold"> Planify</span> project.
              </p>
              <p className="text-base font-Wotfard-Regular">
                Please type{" "}
                <span className="font-Wotfard-SemiBold">Planify</span> to
                confirm.
              </p>
              <Input
                type="text"
                value={projectName}
                className="font-Wotfard-Regular"
                onChange={(e) => setProjectName(e.target.value)}
              />
            </div>
          </ModalBody>

          <ModalFooter>
            <Button mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button disabled={projectName !== "Planify"} colorScheme="red">
              Delete
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default DeleteConfirmationModal;
