import * as React from 'react';

export default function sortableElement(
    WrappedComponent,
)
{
    return class WithSortableElement extends React.Component {
        return() {
            return <WrappedComponent />
        }



    }
};
