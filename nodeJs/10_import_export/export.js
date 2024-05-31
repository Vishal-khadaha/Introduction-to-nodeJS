
const add = (a,b)=>
    {
        return a+b;
    }


const sub = (a,b)=>
    {
        return a-b;
    }

const mul = (a,b)=>
    {
        return a*b;
    }

// module.exports.add=add
// module.exports.sub=sub
// module.exports.mul=mul

// above 3 line replacable with object distructuring

module.exports={add,sub,mul};