import React from "react";
import classes from './styles.scss';

interface Props {
    text: string;
}
export const MainComponent: React.FC<Props> = (props) => {
    const { text } = props;

    return (
        <div className={classes["sample-text"]}>{text}</div>
    );
}