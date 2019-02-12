import castArray from 'lodash/castArray';
import {StyleSheet} from 'aphrodite';
import merge from 'lodash/merge';

export const useStyles = (styles, props) => {
    return {
        styles: StyleSheet.create(
            [...castArray(styles), ...castArray(props.styles)]
                .reduce((agg, next) => (merge(agg, next))),
        )
    };
};
