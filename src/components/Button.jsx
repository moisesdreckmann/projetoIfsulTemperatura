function Button({className, nome, type}) {
    return(
        <button type={type} className={className}>{nome}</button>
    )
}

export default Button