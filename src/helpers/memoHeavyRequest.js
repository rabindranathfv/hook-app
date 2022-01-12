export const memoHeavyRequest = ( range) => {

    for (let index = 0; index < range; index++) {
        console.log('Simulate heavy request or complicated calculation!!');
    }

    return `executed times: ${ range }`
}