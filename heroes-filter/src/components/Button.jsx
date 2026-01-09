function Button({ children, isActive, onClick, type = "button" }) {
  const style = {
    padding: "8px 14px",
    border: "1px solid #333",
    backgroundColor: isActive ? "#333" : "#eee",
    color: isActive ? "#fff" : "#000",
    cursor: "pointer"
  };

  return (
    <button type={type} style={style} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
