module.exports= class RunPlugin {
    apply(compiler){
        complier.hooks.done.tap("DonePlugin",()=>{
            console.log("DonePlugin")
        })
    }
}