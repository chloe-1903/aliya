import {AnimatedImage} from '@/components/animatedImage/animatedImage';


export default async function WelcomePage() {
    return (
        <>
            <h1 className="text-3xl">Here is a cat:</h1>
            <AnimatedImage path="https://cataas.com/cat/funny"/>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                Another one!
            </button>
        </>
    );
}
