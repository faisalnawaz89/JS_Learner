export default function PlayButton({onClick,name}){

    const handleClick = () => {
        onClick();
    }

    return(
        <>
            <button onClick={handleClick}>{name}</button>
        </>
    )
}