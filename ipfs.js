const ipfsc= require("ipfs-http-client");
var fs= require('fs');
const bf = require("buffer");
const Buffer = bf.Buffer;

Buffer.from("anything", "base64");
// window.Buffer = window.Buffer || require("buffer").Buffer;
const projectId = '2GyOc3HfYUMuUIPvXgb5NLzrdXt'
const projectSecret = '58f7b5a8386b557bf2c379ce204a58ca'        
const auth = 'Basic ' + Buffer.from(projectId + ':' + projectSecret).toString('base64')

// const ipfsClient = import('ipfs-http-client')

const ipfst = ipfsc.create({
  host: 'ipfs.infura.io',
  port: 5001,
  apiPath: '/api/v0',

  protocol: 'https',
  headers: {
    authorization: auth,
    "Access-Control-Allow-Origin": ["*"],
    Origin: "https://ipfs.infura.io:5001",
  },
})
// export default ipfs

async function UploadFile(){
    const files = 
    {
    path: 'header.jpg',
    content: await fs.readFileSync('C:/Users/Deepesh/Desktop/header.jpg')
    }
    
    
   const res= await ipfst.add(files);
   console.log(res);
   const cidi = res.cid.toString();
   console.log(cidi);
    }

UploadFile();



// async function main(){
// const res =  await ipfs.add({path:"hello.txt",content:"Hello"});
// console.log(res);
// }
// main();

// const ipfsClient = require('ipfs-http-client')

// const projectId = '2GyOc3HfYUMuUIPvXgb5NLzrdXt'
// const projectSecret = '58f7b5a8386b557bf2c379ce204a58ca'
// const auth = 'Basic ' + Buffer.from(projectId + ':' + projectSecret).toString('base64')

// const ipfs = ipfsClient({
//   host: 'ipfs.infura.io',
//   port: 5001,
//   protocol: 'https',
//   headers: {
//     authorization: auth,
//   },
// })

