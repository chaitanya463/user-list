import React from 'react';
import Card from './Card';
import Button  from './Button';
import styles from './ErrorDialog.module.css';
import ReactDOM from 'react-dom';

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onConfirm} />;
}

const ModelOverlay = (props) => {
  return (
    <Card className={styles.modal}>
      <header className={styles.header}>
        <h2> {props.title} </h2>
      </header>
      <div className={styles.content}>
        <p> {props.message} </p>
      </div>
      <footer className={styles.actions}>
        <Button onClick={props.onConfirm}> Ok </Button>
      </footer>
    </Card>
  );
}

const ErrorDialog = (props) => {
  return (

    <React.Fragment>
      {ReactDOM.createPortal(<Backdrop onConfirm={props.onConfirm}/>, document.getElementById('backdrop-root'))}
      {ReactDOM.createPortal(<ModelOverlay title={props.title} message={props.message} onConfirm={props.onConfirm}/>, document.getElementById('overlay-root'))}
    </React.Fragment>
  );
}

export default ErrorDialog;
