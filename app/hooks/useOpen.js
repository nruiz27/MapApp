import { useState } from 'react'

export default function useOpen (initialValue) {
    const [ isOpen, setIsOpen ] = useState(initialValue || false);
    const handleOpen = () => setIsOpen(!isOpen);

    return [
        isOpen, 
        handleOpen
    ];
}