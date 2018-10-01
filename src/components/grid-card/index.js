import React from 'react';
import './style.css'

import { CSSTransition } from "react-transition-group";

export default class GridCard extends React.Component {
    render() {
        return (
            <div onClick={this.props.clickFunc}>
                <CSSTransition appear in key={this.props.dataId} classNames="slide" timeout={300} >
                    <div data-id={this.props.key} className='grid-card'></div>
                </CSSTransition>
            </div>
        )
    }
}