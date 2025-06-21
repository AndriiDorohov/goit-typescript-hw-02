import { useState } from "react";
import Modal from "react-modal";
import css from "./ImageModal.module.css";

Modal.setAppElement("#root");

export default function ImageModal({ image, onClose }) {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleImageLoad = () => setIsLoaded(true);

  return (
    <Modal
      isOpen={Boolean(image)}
      onRequestClose={onClose}
      className={css.modal}
      overlayClassName={css.overlay}
    >
      <div className={css.modalContent}>
        <img
          src={image?.urls?.full}
          alt={image?.alt_description || "Selected"}
          className={`${css.modalImage} ${isLoaded ? css.loaded : ""}`}
          onLoad={handleImageLoad}
        />
      </div>
    </Modal>
  );
}
