//some important os functionjs from node js documentation




const os = require('node:os');
console.log(os.freemem());
console.log(os.homedir());
console.log(os.hostname());
console.log(os.platform());
console.log(os.tmpdir());      //On Windows, AppData is a hidden folder — just type the full path or enable hidden files.
console.log(os.totalmem());    //in bytes
console.log(os.type());
console.log(os.uptime());

console.log(os.version());     //os.version() returns a human-readable string that describes the operating system version, build, and kernel.
console.log(os.release());   //os.release() returns the operating system version — specifically, the kernel release number of your system.

