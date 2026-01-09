function Button( {children, onClick, type = "button", isActive} ) {
    const style = {backgroundColor: isActive ? "green" : "white", color: isActive ? "white" : "black"}
    return (
        <button onClick={onClick} style={style} type={type}>{children}</button>
    )
}

export default Button