import React from 'react'
import MemeSummary from './MemeSummary'

const MemeList = ({ memes }) => {


    return (
        <div /*className="center-align"*/>
            {memes && memes.map(meme => {
                return (
                    <MemeSummary meme={meme} key={meme.id} />
                )
            })}

        </div>
    )
}

export default MemeList;