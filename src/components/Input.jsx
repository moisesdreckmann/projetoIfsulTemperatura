import { forwardRef } from 'react';

const Input = forwardRef(({ type, placeholder, maxLength, name, value, onChange, ...rest }, ref) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            maxLength={maxLength}
            name={name}
            ref={ref} 
            value={value}
            onChange={onChange}
            {...rest} 
        />
    );
});

Input.displayName = 'Input'; // Adiciona o nome de exibição ao componente

export default Input;
