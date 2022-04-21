import { useEffect, useState } from 'react';

const PREFIX = 'myportfolio-';

export default function useSs(key, initialValue) {
    const prefix = PREFIX + key;
    const [id, setId] = useState(() => {
        const idFromSs = sessionStorage.getItem(prefix);
        if (idFromSs !== null) return JSON.parse(idFromSs);
        return typeof initialValue === 'function' ? initialValue() : initialValue;
    })

    useEffect(() => {
        sessionStorage.setItem(prefix, JSON.stringify(id));
    }, [key, id]);

    return [id, setId];
}