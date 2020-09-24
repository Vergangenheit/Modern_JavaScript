const getodos = (resource) => {

    return new Promise( (resolve, reject) => {
        const req = new XMLHttpRequest();

    req.addEventListener('readystatechange', () => {
        //console.log(request, request.readyState);
        if(req.readyState === 4 && req.status === 200){
            //we gon do somethin
            const data = JSON.parse(req.responseText)
            resolve(data);
        } else if(req.readyState === 4){
            reject('error getting resource');
        }
    });
    
    req.open('GET', resource);
    req.send();
    });
    
};

getodos('json/luigi.json').then(data => {
    console.log('promise resolved: ', data);
    return getodos('json/mario.json');
}).then( (data) => {
    console.log('promise 2 resolved: ', data);
    return getodos('json/shaun.json');
}).then( (data) => {
    console.log('promise 3 resolved: ', data);
})
.catch( (err) => {
    console.log('promise rejected: ', err);
});


