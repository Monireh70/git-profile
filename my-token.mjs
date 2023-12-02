import {Octokit} from "octokit";


const token='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';
const octokit=new Octokit({auth:token});

const{
  data:{login},
 }=await octokit.rest.users.getAuthenticated();
console.log("Hello, %s",login);



