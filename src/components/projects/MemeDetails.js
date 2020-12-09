import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import moment from 'moment'


function MemeDetails(props) {
    const { meme, auth } = props;
    if (!auth.uid) return <Redirect to='/signIn' />
    if (meme) {
        return (
            <div className="container section project-details">
                <div class="row">
                    <div className="card z-depth-0 col s8 offset-s2">
                        <div className="card-content center-align">
                            <span className="card-title">{meme.title}{meme.id}</span>
                            <img src={meme.meme_path} alt="NOT LOADED"></img>
                            <p>Need to add a description</p>
                        </div>
                        <div className="card-action grey lighten-4 grey-text">
                            <div>Posted By {meme.authorFirstName} {meme.authorLastName}</div>
                            <div>
                                {moment(meme.createdAt.toDate()).calendar()}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    else {
        return (
            <div className="container center">
                Loading ...
            </div>
        )

    }

}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const memes = state.firestore.data.memes;
    const meme = memes ? memes[id] : null;
    return {
        meme: meme,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'memes' }
    ]))(MemeDetails);

