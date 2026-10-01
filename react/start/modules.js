const fs=require('fs')
const os=require('os')

fs.writeFileSync("dummy.txt", "This is a dummy file created by Node.js!")

console.log(os.platform());
console.log(os.hostname());
console.log(os.arch());
console.log(os.cpus());