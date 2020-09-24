// async and await

const geTodos = async () => {

    const response = await fetch('json/luigi.json');

    if(response.status !== 200){
        throw new Error('cannot fetch the data');
    }

    const data = await response.json();

    return data;

};

geTodos().then((data) => {
    console.log(data);
}).catch((err) => {
    console.log('rejected', err.message);
});



// fetch api

// fetch('json/luigi.json').then( (response) => {
//     console.log('resolved', response);
//     return response.json();
// }).then((data) => {
//     console.log(data);
// })
// .catch( (err) => {
//     console.log('rejected', err)
// });
