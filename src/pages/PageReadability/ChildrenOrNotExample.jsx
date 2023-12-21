import React, { useState } from "react";

const str =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua\n\n. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

const Input = ({ value, setValue }) => (
  <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
);

const ComplexModal = ({
  children,
  setIsModalOpen,
  value,
  setValue,
  header,
}) => {
  return (
    <div className="silhouette" onClick={() => setIsModalOpen(false)}>
      <div className="popup" onClick={(e) => e.stopPropagation()}>
        {header && <h3>{header}</h3>}
        <Input value={value} setValue={setValue} />
      </div>
    </div>
  );

  // specialization
};

const SimpleModal = ({ children, setIsModalOpen }) => {
  return (
    <div className="silhouette" onClick={() => setIsModalOpen(false)}>
      <div className="popup" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

const ChildrenOrNotExample = () => {
  const [isComplexModalOpen, setIsComplexModalOpen] = useState(false);
  const [isSimpleModalOpen, setIsSimpleModalOpen] = useState(false);
  const [value, setValue] = useState("");

  return (
    <section>
      <h2>Let's look at these 2 modal codes and discuss readability</h2>

      <button type="button" onClick={() => setIsComplexModalOpen(true)}>
        Click to open complex modal
      </button>

      <button type="button" onClick={() => setIsSimpleModalOpen(true)}>
        Click to open simple modal
      </button>

      {isComplexModalOpen && (
        <ComplexModal
          header={`Complex Modal value: ${value}`}
          setIsModalOpen={setIsComplexModalOpen}
          value={value}
          setValue={setValue}
        />
      )}

      {isSimpleModalOpen && (
        <SimpleModal setIsModalOpen={setIsSimpleModalOpen}>
          <h3>Simple Modal value: {value}</h3>
          <Input value={value} setValue={setValue} />
        </SimpleModal>
      )}
    </section>
  );
};

export default ChildrenOrNotExample;
