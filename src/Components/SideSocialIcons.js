import React from 'react'
import  "./SideSocialIcons.css";

const SideSocialIcons = () => {
    return (
        <div>
            <div className="socialbox">
                <a href="https://web.facebook.com/profile.php?id=100083859820031&sk=about" id="box-one"><i className="fa fa-facebook"></i></a>
                <a href="https://twitter.com/AbionaAgnes" id="box-two"><i className="fa fa-twitter"></i></a>
                <a href="mailto:agnesabionafoundation@gmail.com" id="box-three"><i className="fa fa-google"></i></a>
                <a href="https://www.linkedin.com/in/agnes-abiona-foundation-748472246/" id="box-four"><i className="fa fa-linkedin" target="_blank"></i></a>
            </div>
        </div>
    );
}

export default SideSocialIcons;