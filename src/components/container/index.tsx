import React from 'react';

export const Container = ({children}: {children: React.ReactChild}) => {
  return (
        <div className='container'>
          {children}
        </div>
  );
}
