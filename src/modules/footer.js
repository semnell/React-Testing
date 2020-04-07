import React from "react";
import {  MDBContainer,  MDBFooter } from "mdbreact";
import './footer.scss';



class Footer extends React.Component {
    render() {
        return (
            <div className="Footer">
                &copy; {new Date().getFullYear()} Copyright: Sem den broeder
            </div>
        );
    }
}

export default Footer;