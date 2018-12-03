import React from "react";

// import ModalWrapper from "../ModalWrapper.js";

const ContentModal = ({ handleClose, show, children }) => {
  const showHideClassName = show
    ? "contentmodal display-block"
    : "contentmodal display-none";

  return (
    <div className={showHideClassName}>
      <section className="contentmodal-main">
        {children}
        <button onClick={handleClose}>Close</button>
      </section>
    </div>
  );
};

export default ContentModal;
