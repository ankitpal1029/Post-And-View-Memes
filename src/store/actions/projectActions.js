export const createMeme = (meme) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        //make async calls to database
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;
        firestore.collection('memes').add({
            ...meme,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId: authorId,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_MEME', meme });
        }).catch((err) => {
            dispatch({ type: 'CREATE_MEME_ERROR', err })
        })


    }
};