import React from "react";

import "./header.css"

function Header() {
    return (
        <section className="header">
            <div className="bouncing-name">
                <div className="b">B</div>
                <div className="a">A</div>
                <div className="t">T</div>
                <div className="g">G</div>
                <div className="i">I</div>
                <div className="r">R</div>
                <div className="l">L</div>
            </div>
            <br/>
            <div className="bouncing-quilt">
                <div className="q">Q</div>
                <div className="u">U</div>
                <div className="i2">I</div>
                <div className="l2">L</div>
                <div className="t2">T</div>
                <div className="s">S</div>
                <div className="e-point">!</div>
            </div>
        </section>
    )
}

export default Header;