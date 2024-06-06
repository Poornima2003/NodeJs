const path=require("path");
//give the name of extinsion of file
const a=path.extname("/node/index.js")
console.log(a);
//give the path of directory
const b=path.basename(
    "/workspaces/NodeJs (main)"
);
console.log(b)

const c=path.dirname(
    "/workspaces/NodeJs (main)"
);
console.log(b)



const e="/abcd"
const d=path.join(
    "/workspaces/NodeJs (main)"+e
)
console.log(d)
