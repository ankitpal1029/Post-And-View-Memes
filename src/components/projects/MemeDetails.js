import React from 'react'

function MemeDetails(props) {
    const id = props.match.params.id
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Meme Title-{id}</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quidem veniam magni quos repellendus perferendis porro voluptates voluptate libero atque in
                    consectetur maiores eaque est accusamus ratione, nostrum eum et amet?</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted By Meme Lord</div>
                    <div>2nd September,2am</div>
                </div>
            </div>
        </div>
    )
}

export default MemeDetails;

