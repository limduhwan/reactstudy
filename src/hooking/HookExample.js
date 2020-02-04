import React, { useState, useEffect } from 'react';

function HookExample() {
    const [count, setCount] = useState(0);

    useEffect( () => {
        document.title = `You clicked ${count} times`;
    });

    return (
      <div>
          <p>You clicked {count} </p>
          <button onClick={ ()=> setCount(count+1)}>click me</button>
      </div>
    );
}

export default HookExample;