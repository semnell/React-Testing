import React from "react";
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