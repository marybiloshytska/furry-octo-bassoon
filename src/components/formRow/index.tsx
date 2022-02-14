import React from 'react';
import classes from './FormRow.module.css';

interface FormRowProps {
    title: string;
    inputType: React.HTMLInputTypeAttribute;
    required?: boolean;
}

export const FormRow = ({ title, inputType, required}: FormRowProps) => {
  return (
        <div className={classes.formRow}>
            <h5 className={classes.rowTitle}>
                {title} {required && <p className={classes.star}>*</p>}
            </h5>
          <input type={inputType} />
        </div>
  );
}
