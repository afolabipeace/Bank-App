let baseUrl;
if(process.env.NODE_ENV === 'production'){
    // baseUrl = 'clasduin'
}
else{
    baseUrl = 'http://localhost:4100'
}
export default baseUrl