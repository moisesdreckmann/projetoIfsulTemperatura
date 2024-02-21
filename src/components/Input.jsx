import { forwardRef } from 'react';

const Input = forwardRef(({ type, placeholder, maxLength, name, ...rest }, ref) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            maxLength={maxLength}
            name={name}
            ref={ref} 
            {...rest} 
        />
    );
});

Input.displayName = 'Input'; // Adiciona o nome de exibição ao componente

export default Input;
