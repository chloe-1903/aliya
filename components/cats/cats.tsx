'use client'
import {AnimatedImage} from '@/components/animatedImage/animatedImage';
import {useState} from 'react';

const MAX_CATS = 7;

export default function Cats() {
    const [count, setCount] = useState(1);

    const addCat = () => {
        if (count >= MAX_CATS) return;
        setCount(count + 1);
    }

    return (
        <>
            <h1 className="text-3xl">Here is a cat:</h1>
            {Array(count).fill(null).map(index =>
                (<AnimatedImage key={index} path="https://cataas.com/cat"/>)
                )}
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={addCat}>
                Another one!
            </button>
        </>
    );
}
