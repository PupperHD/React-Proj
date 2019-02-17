export default function({
    method = 'GET',
    url,
    payload,
    body,
}){
    return new Promise((resolve, reject) => {
       const options = {
           method: method
       };

        fetch(url, options)
            .then((res) => { return res.json()} )
            .then((res) => {
                resolve(res);
            })
            .catch(err => {
                reject(err);
            })
    });
}
