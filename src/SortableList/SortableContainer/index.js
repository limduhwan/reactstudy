import * as React from 'react';
import PropTypes from 'prop-types';

export default function sortableContainer(
    WrappedComponent,
) {
    return class WithSortableContainer extends React.Component{
        render() {
            return <WrappedComponent/>
        }
    }
}
