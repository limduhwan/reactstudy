import * as React from 'react';

function sortableElement(
    WrappedComponent,
)
{
    return class WithSortableElement extends React.Component {
        return() {
            return <WrappedComponent />
        }



    }
};

export default sortableElement;

