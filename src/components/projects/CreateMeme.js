import React, { Component } from 'react'
import { createMeme } from '../../store/actions/projectActions'
import { connect } from 'react-redux'
import firebase from '../../config/fbConfig'
import '../../styles/MemeSummary.css'
import Not_there from '../../image/image_not_there.jpg'

class CreateMeme extends Component {
    state = {
        title: '',
        /*need to make this images*/
        meme_path: ''
    }


    handleChange = (e) => {
        if (e.target.id === 'title') {
            this.setState({
                [e.target.id]: e.target.value
            }/*, () => { console.log(this.state) }*/)
        }

    }

    handleSubmit = (e) => {
        e.preventDefault();
        // console.log(this.state)
        this.props.createMeme(this.state);
    }

    setPath = (e) => {
        var storageRef = firebase.storage().ref();
        var uploadTask = storageRef.child(e.target.files[0].name).put(e.target.files[0]);
        // .then((snapshot) => {
        //     url = storageRef;
        //     console.log(url);
        //     this.setState({
        //         meme_path: url
        //     })
        // })

        var that = this;
        uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
            function (snapshot) {

                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                    case firebase.storage.TaskState.PAUSED: // or 'paused'
                        console.log('Upload is paused');
                        break;
                    case firebase.storage.TaskState.RUNNING: // or 'running'
                        console.log('Upload is running');
                        break;

                    default:
                        console.log('uploading done?')
                }
            }, function (error) {

                // A full list of error codes is available at
                // https://firebase.google.com/docs/storage/web/handle-errors
                console.log(error);

            }, function () {
                // Upload completed successfully, now we can get the download URL
                uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
                    console.log('File available at', downloadURL);
                    that.setState({
                        meme_path: downloadURL
                    })


                });

            });
    }

    placeholder = () => {

        if (this.state.meme_path === '') {

            return (
                <img src={Not_there} className="responsive-img" />
            )
        }
        else {
            return (
                <img src={this.state.meme_path} className="responsive-img" />
            )
        }
    }

    render() {


        return (
            < div >
                <div className="container">
                    <form onSubmit={this.handleSubmit} className="white">
                        <h5 className="grey-text text-darken-3">Upload Your Meme</h5>
                        <div className="input-field">
                            <label htmlFor="title">Title</label>
                            <input type="text" id="title" onChange={this.handleChange} />
                        </div>
                        <div className="input">
                            <label htmlFor="content">Submit Meme</label>
                            <input type="file" id="content" onChange={this.setPath} />
                        </div>

                        <div className="input-field">
                            <button className="btn pink lighten-1 z-depth-0">Just Post eet</button>
                        </div>
                    </form>
                    <div className="col s12 m8 offset-m2 l6 offset-l3">
                        <div className="card-panel grey lighten-5 z-depth-1">
                            <div className="row valign-wrapper">
                                <div className="col s2">
                                    <this.placeholder />
                                </div>
                                <div className="col s10">
                                    <span className="black-text">
                                        {this.state.title}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>



            </div >
        )


    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createMeme: (meme) => dispatch(createMeme(meme))
    }
}

export default connect(null, mapDispatchToProps)(CreateMeme);
