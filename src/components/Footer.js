//Footer.js
import { Fragment } from 'react'; 

const Footer = () => {
    const alexUrl = "https://alxndrdrgz.com"
    const geoffUrl = "https://geoffreypayton.com"
    const samUrl = "https://samwells.dev"
    const williamUrl = "https://WilliamScript.com"
    const junoUrl = "https://junocollege.com"

    return (
        <Fragment>
            <footer>
                <div className="wrapper">
                    We made this app using the GIPHY and MDB APIs. Made by:  
                    <a href={alexUrl}>Alex</a>,  
                    <a href={geoffUrl}>Geoff</a>, 
                    <a href={samUrl}>Sam</a>, 
                    <a href={williamUrl}>William</a> at 
                    <a href={junoUrl}>Juno College</a>
                </div>
            </footer>
        </Fragment>    
    )
}

export default Footer;