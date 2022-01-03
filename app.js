const getData = (uID) => {
    return new Promise( (resolve,reject) => {
        setTimeout(() => {
            console.log("Fetched the data!");
            resolve(`${uID}@gmail.com`);
        }, 5000);
    });
}

async function driver(){
    console.log("start");
    let email = await getData("skc");
    console.log(`The user Email is: ${email}`);
    console.log("end");
}

driver();

// email
    // .then((data)=>{
    // console.log("Fetched the data!");
    // console.log(data);
    // })
    // .catch( (err) => {
    // console.log('Sorry, request failed!')
    // console.log(err);
    // })