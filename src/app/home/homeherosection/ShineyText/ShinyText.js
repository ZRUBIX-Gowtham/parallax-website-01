import './ShinyText.css';

const ShinyText = ({ text, disabled = false, speed = 5, className = '' }) => {
  const style = disabled ? {} : { '--shine-duration': `${speed}s` };
  return (
    <span
      className={`shiny-text ${disabled ? 'disabled' : ''} ${className}`}
      data-text={text}
      style={style}
    >
      {text}
    </span>
  );
};

export default ShinyText;