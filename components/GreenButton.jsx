function GreenButton({ onClick, children }) {
    return (
      <button style={{ backgroundColor: 'green', color: 'white' }} onClick={onClick}>
        {children}
      </button>
    );
  }
  
  export default GreenButton;
  