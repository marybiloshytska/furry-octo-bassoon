import { Card } from './components/card';
import { Container } from './components/container';
import { FormHeader } from './components/formHeader';
import classes from './App.module.css';

function App() {
  return (
    <div className={classes.App}>
      <header className={classes.appHedaer}>
        <div className={classes.blue}></div>
        <Container>
          <h1>New Event</h1>
        </Container>
      </header>
        <Card>
          <FormHeader>about</FormHeader>
          <FormHeader>about</FormHeader>
          <FormHeader>about</FormHeader>
          <FormHeader>about</FormHeader>
        </Card>
    </div>
  );
}

export default App;
