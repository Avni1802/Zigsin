import React from 'react'

const Card = ({image}) => {
    return (
        // card container
        <div className="card" >
            <div>
            <h2>Ready for autumn collection</h2>
            <p>Treat yourself to some of our brand autumn collection - all with the wonderful colours surrounding you.</p>
            <button> PURCHASE NOW </button>
            </div>
            <img src={image} alt="" srcset="" />
        </div>
    )
}

export default Card
