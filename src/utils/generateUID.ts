export const generateNumberUid = () => {
    return Math.round(Math.random() * 1000000);
}

export const genrateAndStoreUID = () => {
    const uid = generateNumberUid();
    if (localStorage.getItem('uid')) {
        return ;
    }
    localStorage.setItem('uid', uid.toString());
    return uid;
}