import { useLoaderData } from "react-router"

export default function Github(){
    const data = useLoaderData()
    return(
        <>
            <img src={data.avatar_url} alt="" />
            <h1 style={{fontSize: '15px'}}>{data.name} | <span>Follower: {data.followers}</span></h1>
            
        </>
    )
}

export const gitInfo = async () => {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()
}

