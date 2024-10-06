'use client'
import {AnimatedImage} from '@/components/animatedImage/animatedImage';
import {useEffect, useRef, useState} from 'react';

const MAX_CATS = 5;

export default function Cats() {
    const [count, setCount] = useState(1);
    const [isMaxReached, setIsMaxReached] = useState(false);
    const addBtnRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        if (count > 1) {
            addBtnRef.current?.scrollIntoView({ behavior: "smooth"});
        }
    }, [count])

    const addCat = () => {
        if (count >= MAX_CATS) {
            setIsMaxReached(true);
            setCount(0);
            return;
        };
        setCount(count + 1);
    }

    return isMaxReached ?
        <>
            <h1 className="text-3xl">Too many cats!</h1>
            <iframe src="https://giphy.com/embed/0RDp9YjIqIGNQKX3Zk" width="260" height="260"
                    className="giphy-embed" allowFullScreen>
            </iframe>
        </>
        : <>
            <h1 className="text-3xl">Here is a cat:</h1>
            {Array.from({length: count}, (_, index) => index + 1).map(index =>
                (<AnimatedImage key={index} path={`https://cataas.com/cat?i=${index}`}/>)
            )}
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                    onClick={addCat} ref={addBtnRef}>
                Another one!
            </button>
        </>
}
