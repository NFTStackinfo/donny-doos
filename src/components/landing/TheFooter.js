import React from 'react';
import {Discord, Twitter} from "../ui/icons";

function TheFooter(props) {
    return (
        <footer className="section footer margin-bottom-6">
            <div className="container flex flex-col items-center">
                <ul className="list-style-none flex gap-4 padding-0">
                    <li>
                        <a href="https://twitter.com/TheDonnyDoos" rel="noreferrer" target="_blank">
                            <Twitter fill="#000000"/>
                        </a>
                    </li>
                    {/*<li>*/}
                    {/*    <a href="#" rel="noreferrer" target="_blank">*/}
                    {/*        <Discord fill="#000000"/>*/}
                    {/*    </a>*/}
                    {/*</li>*/}
                </ul>

                <p className="text-center black-text margin-top-4">©All rights reserved. 2022</p>
            </div>
        </footer>
    );
}

export default TheFooter;
