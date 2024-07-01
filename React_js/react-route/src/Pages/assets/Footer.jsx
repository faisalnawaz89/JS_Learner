export default function Footer(){

    const date = new Date().getFullYear()

    return(
        <>
        <p>&copy; {date} All Rights Reserved.</p>
        </>
    )
}