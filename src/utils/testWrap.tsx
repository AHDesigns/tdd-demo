import React from 'react';

export function testWrap<A>(Component: A, testId: string): A {
  // @ts-expect-error meh
  return process.env.NODE_ENV === 'test'
    ? // @ts-expect-error meh
    ({ children }) => <span data-testid={testId}>{children}</span>
    : // @ts-expect-error meh
    (props) => <Component {...props} />;
}
