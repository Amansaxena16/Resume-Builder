function Card({title, content}){
    return(
        <div className="max-w-sm mx-auto my-8 p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-2 text-start">{title}</h2>
            <p className="text-gray-700 text-base tracking-[1px] text-start">{content}</p>
        </div>
    )
}

export default Card