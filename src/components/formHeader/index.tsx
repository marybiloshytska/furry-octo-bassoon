import React from 'react';
import classes from './FormHeader.module.css';

export const FormHeader = ({children}: {children: React.ReactChild}) => {
  return (
        <h2 className={classes.formHeader}>
          {children}
        </h2>
  );
}
