let obj = new Proxy({name:'yanzhi'},{
    get:function(target, proKey){
        return target[proKey]
    }
})
console.log(obj.name)
console.log(obj.name2)