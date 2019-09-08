import React from 'react'


const Footer = ()=>{
    return (
    <div className="DummyMain--Footer">

        <div className="FoooterBlocksContainer">
            <div className="FooterBlocksContainer--Center">
                <div className="FooterBlocks">
                    <h3>About</h3>
                    <ul><a href="https://www.linkedin.com/in/emarson-serrano-289098157/" target="_blank">LinkedIn</a></ul>
                    <ul><a href="https://github.com/thethirdheat" target="_blank">GitHub</a></ul>
                    <ul><a href="https://angel.co/emarson-serrano" target="_blank">AngelList</a></ul>
                </div>
                <div className="FooterBlocks">
                    <h3>Discover Projects</h3>
                    <ul><a href="https://draw-pastiche.herokuapp.com/" target="_blank">Pastiche</a></ul>
                    <ul><a href="https://spacey-aa.herokuapp.com/#/" target="_blank">Spacey</a></ul>
                </div>
                <div className="FooterBlocks">
                    <h3>Contact</h3>
                    <ul><a href="mailto:emarson.serrano@gmail.com">Email</a></ul>

                </div>
                <div className="FooterBlocks">
                    <h3>Phone</h3>
                    <ul><a href="">916-504-0023</a></ul>
                </div>

            </div>
        </div>
        <div className="FooterImageContainer">
            <img src="https://i.imgur.com/nnsPfQv.png"/>
            <p className="Footer--CopyRight">2019 Emarson Serrano</p>


        </div>
    </div>)

}
export default Footer
//                <div className="FooterBlocks">
//                    <h3>Resume</h3>
//                    <ul><a href="">hey now</a></ul>
//                </div>