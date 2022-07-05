let {SyncHook}=require("tapable");
let hook=new SyncHook();
hook.tap("some name",()=>{
    console.log("some name");
})
hook.call();