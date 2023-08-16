import React from "react";

import "./header.css"

function Header() {
    return (
        <section className="header">
            <div className="bouncing-name">
                <div class="b">B</div>
                <div class="a">A</div>
                <div class="t">T</div>
                <div class="g">G</div>
                <div class="i">I</div>
                <div class="r">R</div>
                <div class="l">L</div>
            </div>
            <br/>
            <div className="bouncing-quilt">
                <div class="q">Q</div>
                <div class="u">U</div>
                <div class="i2">I</div>
                <div class="l2">L</div>
                <div class="t2">T</div>
                <div class="s">S</div>
                <div class="e-point">!</div>
            </div>
        </section>
    )
}

export default Header;