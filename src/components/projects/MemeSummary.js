import React from 'react'
import '../../styles/MemeSummary.css'
import moment from 'moment'

const MemeSummary = ({ meme }) => {
    return (
        <div className="card z-depth-0 project-summary center-align" key={meme.id} >
            <div className="card-content grey-text text-darken-3" >
                <span className="card-title">{meme.title}</span>
                <img src={meme.meme_path} alt="Meme Not Available" className="responsive-img" />
                <p>Posted by {meme.authorFirstName} {meme.authorLastName}</p>
                <p className="grey-text">{moment(meme.createdAt.toDate()).calendar()}</p>
            </div>
        </div>
    )
}

export default MemeSummary;