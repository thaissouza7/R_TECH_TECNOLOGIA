import React from 'react'
import Header from './Header'
import Nav from './Nav'
import Main from './Main'
import Footer from './Footer'

class Template extends React.Component {
    constructor(props) {
        super(props)
    }
render(){
    return <div>
        <Header/>
        <Nav/>
        <Main/>
        <Footer/>
       </div>
    }
}
export default Template