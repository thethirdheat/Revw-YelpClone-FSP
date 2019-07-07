import React from 'react'

class Index extends React.Component {
    constructor(props){
        super(props)
        this.state={}

    }
    componentDidMount(){
        //$.ajax({method:"get",url:"/api/businesses"}).then((res)=>this.setState(res))
    }
    render(){
        //const ind=Object.values(this.state).map(el=>(<img src={el.photoUrl}/>))
        const ind = "hi"
        return (
        <div>
            {ind}
        this will be the index!!!
    </div>)
    }
}
export default Index