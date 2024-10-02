import {AnimatedImage} from '@/pages/welcome/animatedImage/animatedImage';


export const Welcome = () => {

    return (
        <>
            <h1 className="text-2xl">Here is a cat!</h1>
            <AnimatedImage path="https://cataas.com/cat/funny"/>
        </>
    );
}