import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'




const Navbar = (props) => {
    const { auth, profile } = props;

    const Links = auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks />;

    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <ul className="left">
                    <Link to='/'><i className="yellow-text">KeK</i></Link>
                </ul>
                {/* <SignedInLinks />
                <SignedOutLinks /> */}
                {Links}

            </div>
        </nav>
    )
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}
export default connect(mapStateToProps)(Navbar);
