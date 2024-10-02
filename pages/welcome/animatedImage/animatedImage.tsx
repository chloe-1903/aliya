import style from './animatedImage.module.css'
type Props = {
    path: string;
}
export const AnimatedImage = ({path}: Props) => {
    return (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={path} alt="a random cat image" className={style.illustration} />
    )
}
