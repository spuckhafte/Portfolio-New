import { useEffect, useState } from 'react';

const PREFIX = 'myportfolio-';

export default function useLs(key, initialValue) {
    const prefix = PREFIX + key;
    const [id, setId] = useState(() => {
        const idFromLs = localStorage.getItem(prefix);
        if (idFromLs !== null) return JSON.parse(idFromLs);
        return typeof initialValue === 'function' ? initialValue() : initialValue;
    })

    useEffect(() => {
        localStorage.setItem(prefix, JSON.stringify(id));
    }, [key, id]);

    return [id, setId];
}