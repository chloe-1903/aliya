import {AnimatedImage} from '@/components/animatedImage/animatedImage';


export default async function WelcomePage() {
    return (
        <>
            <h1 className="text-2xl">Here is a cat!</h1>
            <AnimatedImage path="https://cataas.com/cat/funny"/>
        </>
    );
}
