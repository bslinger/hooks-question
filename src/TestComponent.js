import React from 'react';
import {useStyles} from "./useStyles";
import {Link} from 'react-router-dom';
import {css} from 'aphrodite';
import baseStyles from './styles';

function TestComponent(props) {
    const {styles} = useStyles(baseStyles, props);

    return <div>
        <div><Link to={"/"}>No style props</Link></div>
        <div><Link to={"/withProps"}>With style props</Link></div>
        <div className={css(styles.test)}>Test Text</div>
    </div>
}

export default TestComponent;
