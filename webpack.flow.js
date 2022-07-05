let {SyncHook}=require("tapable");
let fs=require("fs");

class Compiler{
    constructor(options){
        this.options=options;
        this.hooks={
            run:new Synchook(),
            done:new Synchook()
        }
    };
    run(){
        let modules=[];
        let chunks=[];
        let files=[];
      this.hooks.run,call();
      //根据配置确定入口
      let entry=path.join(this.options.context,this.options.entry);
      //从入口出发，调用所有loader对文件进行编译，再找出该模块依赖的模块；
      //再递归本步骤直到所有入口的依赖文件东京过本步骤的处理
      //读取模块内容
     let entryContent=fs.readFileSync(entry,"utf-8");
     let entrySource=babelLoader(entryContent);
     let entryModule={id:entry,source:entrySource};
     modules.push(entryModule)
//将入口文件的代码转换成抽象语法树AST,解析它的依赖
    //  let entryContent=fs.readFileSync(entry,"utf-8");
    //  let entrySource=babelLoader(entryContent);
    //  let entryModule={id:entry,source:entrySource};
    //  modules.push(entryModule)
    //根据入口和模块之间的依赖关系，组装成一个个包含多个模块的chunk
    let chunk={name:"main",chunk:modules};
    chunks.push(chunk);
    //再把chunk转换成单个文件加入到输出列表里
    let file={
        file:this.options.output.filename,
        source:``

    }
    files.push(file);
    //确定好输出内容后，将得到的内容写入的输出路径
    let outPath=path.join(this.options.output.path,this.options.output.filename);
    fs.writeFileSync(outPath,file.source,"utf8")
    //插件监听到感兴趣的事件执行逻辑
    this.hooks.done.call();
    }

}

//初始化参数
let options=require("./webpack.config");
//开始编译，用上一步得到的c参数初始化Compiler对象
let compiler=new Compiler(options);
//加载所有配置的插件，执行对象的run方法开始执行编译
if(options.plugins&&Array.isArray(options.plugins)){
    for (const plugin of options.plugins){
        plugin.apply(compiler);
    }
}
//
compiler.run();
//es6编译成es5
function babelLoader(resourse){
return `let sum=function sum(a,b){
    return a+b};
console.log(sum)`
}