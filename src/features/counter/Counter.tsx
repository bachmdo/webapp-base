import React from 'react';
import { useSelector } from 'react-redux';
import { selectCount } from './counterSlice';

export function Counter() {
  const count = useSelector(selectCount);

  return (
    <div>
      <pre>{count}</pre>
    </div>
  );
}
