import { Container } from '../container';
import React from 'react';
import classes from './Card.module.css';

export const Card = ({children}: {children: React.ReactChild | React.ReactChild[]}) => {
  return (
      <Container>
        <div className={classes.card}>
          {children}
        </div>
      </Container>
  );
}
