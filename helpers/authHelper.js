const bcrypt = require('bcrypt')
const hashPassword=async(password)=>{
    try{
        const saltRounds=10
        const hashedPassword=await bcrypt.hash(password,saltRounds)
        console.log("hashedPassword -> ",hashedPassword)
        return hashedPassword
    }catch(error){
        console.log(error);
    }
}

const comparePassword=(password,hashedPassword)=>{
    console.log(bcrypt.compare(password,hashedPassword))
    return bcrypt.compare(password,hashedPassword)
}
module.exports={hashPassword,comparePassword}
