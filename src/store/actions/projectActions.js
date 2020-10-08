export const createMeme = (meme) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        //make async calls to database
        const firestore = getFirestore();
        firestore.collection('memes').add({
            ...meme,
            authorFirstName: 'Ankit',
            authorLastName: 'Pal',
            authorId: 12345,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_MEME', meme });
        }).catch((err) => {
            dispatch({ type: 'CREATE_MEME_ERROR', err })
        })


    }
};