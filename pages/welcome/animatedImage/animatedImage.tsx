import style from './animatedImage.module.css'
type Props = {
    path: string;
}
export const AnimatedImage = ({path}: Props) => {
    return (
        <img src={path} alt="a random cat image" className={style.illustration} />
    )
}