import React, { useState, useCallback, ChangeEventHandler } from "react";
import Modal from "react-modal";
import { Author } from "../useServerApi/useServerApi";

interface Props {
  subtitle: string;
  isOpen: boolean;
  onConfirm: () => void;
  onCancel: () => void;
  firstName: {
    value: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
  };
  lastName: {
    value: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
  };
}

const NewAuthorDialog: React.FC<Props> = ({
  subtitle,
  isOpen,
  onConfirm,
  onCancel,
  firstName,
  lastName
}) => (
  <Modal isOpen={isOpen} onRequestClose={onCancel} contentLabel={subtitle}>
    <h2>{subtitle}</h2>
    <form>
      <div className="form-group">
        <label>First Name</label>
        <input className="form-control" {...firstName} />
      </div>
      <div className="form-group">
        <label>Last Name</label>
        <input className="form-control" {...lastName} />
      </div>
    </form>
    <button onClick={onConfirm} className="btn btn-primary">
      Confirm
    </button>
    <button onClick={onCancel} className="btn btn-danger">
      Cancel
    </button>
  </Modal>
);

interface UseProps {
  setExisting: (author: Author) => void;
  openDialog: () => void;
  componentProps: Props;
}

interface PropsIn {
  subtitle: string;
  onCreate: (author: Author) => void;
}

export const useDialog = ({ subtitle, onCreate }: PropsIn): UseProps => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const [id, setId] = useState<number>(-1);
  const [firstName, setFirstName] = useState<string>("John");
  const [lastName, setLastName] = useState<string>("Doe");

  return {
    setExisting: useCallback(
      (author: Author) => {
        setId(author.id);
        setFirstName(author.firstName);
        setLastName(author.lastName);
      },
      [setId, setFirstName, setLastName]
    ),
    openDialog: useCallback(() => setIsOpen(true), [setIsOpen]),
    componentProps: {
      subtitle,
      isOpen,
      firstName: {
        value: firstName,
        onChange: useCallback(({ target: { value } }) => setFirstName(value), [
          setFirstName
        ])
      },
      lastName: {
        value: lastName,
        onChange: useCallback(({ target: { value } }) => setLastName(value), [
          setLastName
        ])
      },
      onConfirm: useCallback(() => {
        onCreate({ id, firstName, lastName });
        setIsOpen(false);
      }, [setIsOpen, onCreate, id, firstName, lastName]),
      onCancel: useCallback(() => setIsOpen(false), [setIsOpen])
    }
  };
};

export default NewAuthorDialog;
