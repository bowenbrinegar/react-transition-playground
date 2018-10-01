import React from 'react';
import './style.css'

import { CSSTransition } from "react-transition-group";

export default class GridCard extends React.Component {
    render() {
        return (
            <div>
                <CSSTransition appear in classNames="slide" timeout={300} >
                    <div onClick={this.props.clickFunc} className='grid-card'></div>
                </CSSTransition>
            </div>
        )
    }
}