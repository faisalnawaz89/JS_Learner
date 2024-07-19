


export default function Catalog({image,title,views,time}){
    return(
        <>
            <div className="flex-1">
                <img src={image} alt={title}/>
                <h1>{title}</h1>
                <h3>{views}</h3>
                <h5>{time}</h5>
            </div>
            
        </>
    )
}

