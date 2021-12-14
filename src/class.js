
import {useState,useEffect,Component} from 'react'

const Child=()=>{
    const [a,setA]=useState(1);
    const [b,setB]=useState(2);
    const [c,setC]=useState(3);
    useEffect(()=>{
        console.log('a',a)
    })
    useEffect(()=>{
        console.log('b',b)
    })
    useEffect(()=>{
        console.log('c',c)
    })
    return <span>hhh</span>
}


class Chain extends  Component {
    componentDidMount(){
        console.log(this)
    }
    render(){
        return <Child/>
    }
}

export default Chain