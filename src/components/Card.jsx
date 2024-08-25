import React from 'react'

const Card = ({cardData}) => {
  return (
    <div className="w-full h-[500px] rounded overflow-hidden shadow-lg bg-white border border-black">
    <img className="w-full h-48 object-cover" 
    src={cardData.urlToImage} 
    alt="News Image"/>
    <div className="px-6 py-4">
        <h2 className="font-bold text-xl mb-2">
            {cardData.title.length < 80 ? cardData.title : cardData.title.substring(0,75) + "..."}
            </h2>
        <p className="text-gray-700 text-sm mb-4">By {cardData.author}</p>
        <p className="text-gray-700 text-base">
            {cardData.description !== null  ?
            cardData.description.split(" ").length < 30 ? 
            cardData.description : 
            cardData.description.split(" ").slice(0,24).join(" ") + "..."
            : ""
            }
        </p>
    </div>
    <div className="px-6 pt-4 pb-2">
    <a href={cardData.url} target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700">
        Read more...
    </a>

    </div>
</div>

  )
}

export default Card
