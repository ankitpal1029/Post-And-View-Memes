import React, { Component } from 'react'
import Notifications from './Notifications'
import MemeList from '../projects/MemeList'
import { connect } from 'react-redux'
import './../../styles/Test.css'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'

class Dashboard extends Component {
    render() {
        const { memes, auth } = this.props;
        if (!auth.uid) return <Redirect to='/signIn' />
        return (
            <div>
            <div className="align-wrapper ">
                <div className="dashboard container ">
                    <div className="row ">
                        <div className="col s12 offset-l3">
                            <MemeList memes={memes} />
                        </div>
                        <div className="col s12 v5 offset-m1">


                        </div>
                    </div>
                </div>
            </div>

            </div>

        )
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        memes: state.firestore.ordered.memes,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps)
    , firestoreConnect([
        { collection: 'memes' }
    ]))(Dashboard);
