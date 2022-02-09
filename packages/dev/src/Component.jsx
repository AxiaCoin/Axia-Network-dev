// Copyright 2017-2021 @axia-js/dev authors & contributors
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
function Child({ children, className, label }) {
    return (<div className={className}>
      {label || ''}{children}
    </div>);
}
function Component({ children, className, label }) {
    const bon = '123';
    if (label === bon) {
        console.error('true');
    }
    try {
        console.log('bon');
    }
    catch (error) {
        // ignore;
    }
    console.log('1');
    return (<div className={className}>
      <Child className='child' label={label}>
        {children}
      </Child>
      <Child className='child'>bob</Child>
    </div>);
}
export default React.memo(Component);
