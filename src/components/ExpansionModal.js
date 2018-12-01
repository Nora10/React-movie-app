import React from "react";

import ModalWrapper from "../ModalWrapper.jsx";

const FilmModal = props => {
  const filmModal = moviename => {
    props.hideModal();
    props.filmModal(moviename);
  };

  return (
    <ModalWrapper {...props} title="Movie name" width={400} showOk={false}>
      <p>Movie Description: lorem Ipsum text here</p>
      <button onClick={() => filmModal("addToCart")}>Add to Cart</button>
    </ModalWrapper>
  );
};

export default FilmModal;
