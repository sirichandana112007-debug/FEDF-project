import { useRef } from "react";

function ContactRef() {
  const nameRef = useRef();

  const showName = () => {
    alert(nameRef.current.value);
  };

  return (
    <>
      <input
        ref={nameRef}
        placeholder="Enter Name"
      />

      <button onClick={showName}>
        Show Name
      </button>
    </>
  );
}

export default ContactRef;
