import React from 'react'


const Footer = ()=>{
    return (
    <div className="DummyMain--Footer">

        <div className="FoooterBlocksContainer">
            <div className="FooterBlocksContainer--Center">
                <div className="FooterBlocks">
                    <h3>About</h3>
                    <ul><a href="">Developer</a></ul>
                    <ul><a href="">LinkedIn</a></ul>
                    <ul><a href="">GitHub</a></ul>
                </div>
                <div className="FooterBlocks">
                    <h3>Discover Projects</h3>
                    <ul><a href="">Pastiche</a></ul>
                    <ul><a href="">Spacey</a></ul>
                </div>
                <div className="FooterBlocks">
                    <h3>Contact</h3>
                    <ul><a href="">Email</a></ul>
                    <h3>Phone</h3>
                    <ul><a href="">916-504-0023</a></ul>
                </div>
                <div className="FooterBlocks">
                    <h3>Resume</h3>
                    <ul><a href="">hey now</a></ul>
                </div>

            </div>
        </div>
        <div className="FooterImageContainer">
            <img src="https://i.imgur.com/nnsPfQv.png"/>
            <p className="Footer--CopyRight">this is a copy right lul</p>

        </div>
    </div>)

}
export default Footer