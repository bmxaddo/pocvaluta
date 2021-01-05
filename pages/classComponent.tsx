import React from 'react';
import Link from "next/link";

export default class classComponent extends React.Component {

    render() {
        return (
            <div>
                Example of class component for Next.js
                <div>
                    <Link href='/'>GO TO MAIN PAGE</Link>
                </div>

            </div>
        );
    }
}
