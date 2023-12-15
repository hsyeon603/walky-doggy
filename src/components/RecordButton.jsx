import styles from '../styles/RecordButton.module.css';

export default function RecordButton({ handleClick, isRecording }) {
  return (
    <button onClick={handleClick} className={styles.RecordButton}>
      {!isRecording ? 'RECORD' : 'STOP'}
    </button>
  );
}
