import styles from "@/styles/Modal.module.css";

export default function Modal({ isOpen, onClose, onSave, initialValue }) {
  if (!isOpen) return null;

  return (
    <div className={styles.modalBackdrop}>
      <div className={styles.modalContent}>
        <h2 className={styles.title}>Edit Task</h2>
        <input
          type="text"
          defaultValue={initialValue}
          id="taskInput"
          className={styles.input}
        />
        <div className={styles.buttonGroup}>
          <button
            className={styles.saveButton}
            onClick={() => onSave(document.getElementById("taskInput").value)}
          >
            Save
          </button>
          <button className={styles.cancelButton} onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
