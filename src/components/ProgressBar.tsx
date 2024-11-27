import "../styling/ProgressBar.css";

interface ProgressBarProps {
  progress: number; // Accepts the scroll progress as a prop
}

const ProgressBar = ({ progress }: ProgressBarProps) => {
  return (
    <div className="progress-bar-container">
      <div className="progress-bar" style={{ width: `${progress}%` }}></div>
    </div>
  );
};

export default ProgressBar;
