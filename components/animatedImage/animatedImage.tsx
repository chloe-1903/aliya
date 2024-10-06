import style from './animatedImage.module.css'
type Props = {
    path: string;
}
export function AnimatedImage({path}: Props) {
    return (
        <img src={path} alt="random cat image" className={style.illustration} />
    )
}
