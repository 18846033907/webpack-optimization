function Son (props){
    const { grandRef } = props
    return <div>
        <div> i am alien </div>
        <span ref={grandRef} >这个是想要获取元素</span>
    </div>
}

class Father extends React.Component{
    constructor(props){
        super(props)
    }
  
    render(){
        console.log(13,this.props)
        return <div>
            <Son grandRef={this.props.grandRef}  />
        </div>
    }
}

class GFather extends React.Component{
    constructor(props){
        super(props)
    }
  
    render(){
        console.log(13,this.props)
        return <div>
            <Father grandRef={this.props.grandRef}  />
        </div>
    }
}

const NewFather = React.forwardRef((props,ref)=><GFather grandRef={ref}  {...props} />  )

class GrandFather extends React.Component{
    constructor(props){
        super(props)
    }
    node = null 
    componentDidMount(){
        console.log(this.node)
    }
    render(){
        return <div>
            <NewFather ref={(node)=> this.node = node } />
        </div>
    }
}

export default GrandFather