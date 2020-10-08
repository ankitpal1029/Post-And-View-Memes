import React from 'react'
import '../../styles/MemeSummary.css'

const MemeSummary = ({ meme }) => {
    return (
        <div className="card z-depth-0 project-summary center-align" >
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{meme.title}</span>
                <img src={meme.meme_path} alt="Meme Not Available" className="responsive-img" />
                <p>Posted by Bangit</p>
                <p className="grey-text">3rd Sept ,2am</p>
            </div>
        </div>
    )
}

export default MemeSummary;