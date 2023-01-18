import Button from "react-bootstrap/Button";

export const BtnForModal = ({ onToggle }) => {
  return (
    <Button variant="primary" size="lg" type="button" onClick={onToggle}>
      Open Modal
    </Button>
  );
};
