import React from 'react'
import MemeSummary from './MemeSummary'
import { Link } from 'react-router-dom'


const MemeList = ({ memes }) => {


    return (
        <div /*className="center-align"*/>
            {memes && memes.map(meme => {
                return (
                    <Link to={'/project/' + meme.id} key={meme.id}>
                        <MemeSummary meme={meme} />
                    </Link>

                )
            })}

        </div>
    )
}

export default MemeList;