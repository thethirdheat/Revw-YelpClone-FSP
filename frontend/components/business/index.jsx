import React from 'react'

class Index extends React.Component {
    constructor(props){
        super(props)
        this.state={}

    }
    componentDidMount(){
        $.ajax({method:"get",url:"/api/businesses"}).then((res)=>this.setState(res))
    }
    render(){
        console.log(this.state)
        const ind=Object.values(this.state).map(el=>(<img src={el.photoUrl}/>))
        return (
        <div>
            {ind}
        this will be the index!!!
    </div>)
    }
}
export default Index