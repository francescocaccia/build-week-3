import { Dropdown, DropdownButton, ButtonGroup } from "react-bootstrap";

const Chat = () => {
  return (
    <div className="mb-2 chat">
      {["up-centered"].map(direction => (
        <DropdownButton
          as={ButtonGroup}
          key={direction}
          id={`dropdown-button-drop-${direction}`}
          drop={direction}
          variant=".bg-white"
          title={"Messaggistica"}
          className="btnChat"
        >
          <Dropdown.Header className="fw-bold text-dark">Messaggi</Dropdown.Header>
          <Dropdown.Divider />
          <Dropdown.Item eventKey="1">Action</Dropdown.Item>
          <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
          <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
        </DropdownButton>
      ))}
    </div>
  );
};

export default Chat;
