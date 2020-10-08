import React, { Component } from 'react'
import Notifications from './Notifications'
import MemeList from '../projects/MemeList'
import { connect } from 'react-redux'
import './../../styles/Test.css'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

class Dashboard extends Component {
    render() {
        const { memes } = this.props;
        return (
            <div className="valign-wrapper ">
                <div className="dashboard container ">
                    <div className="row ">
                        <div className="col s6 m6 offset-l3">
                            <MemeList memes={memes} />
                        </div>
                        <div className="col s12 v5 offset-m1">
                            <Notifications />

                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        memes: state.firestore.ordered.memes
    }
}

export default compose(
    connect(mapStateToProps)
    , firestoreConnect([
        { collection: 'memes' }
    ]))(Dashboard);