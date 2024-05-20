//"process" provides info and control of the current running process

//entry arguments
console.log(process.argv)

/* //controll the process and its exit
//with 0, everything went right
//with 1, there is an error and we want the exit
process.exit(0) */

//we can control thhe events of the process
process.on('exit', () => {
  //clean the resources, clean the console or anything else ...
})

//current working directory, tell us from what directoy we are executing a process
process.cwd()

//with "process." we have MANY diferent methods
//such as checking the Environment Variables 
console.log(process.env.NODE_ENV)