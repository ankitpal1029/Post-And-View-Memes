
const initState = {
    memes: [
        { id: '1', title: 'Venu was the pigeon', meme_path: '/image/VenuAmongUs.jpg' },
        { id: '2', title: 'MI vs CSK', meme_path: '/image/anbuMI.jpg' },
        { id: '3', title: 'AnImE PrOteCtIoN', meme_path: '/image/BaliwalUWU.jpg' },
        { id: '4', title: '*Cries In poor*', meme_path: '/image/HolyTrinity.jpg' },
        { id: '5', title: 'StonK Man', meme_path: '/image/StonksBezos.jpg' },
    ]
}

const memeReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_MEME':
            console.log('created project', action.meme)
            return state;
        case 'CREATE_MEME_ERROR':
            console.log('create project error', action.err)
            return state;
        default:
            return state;
    }

}

export default memeReducer;