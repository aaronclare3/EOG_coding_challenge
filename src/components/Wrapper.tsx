import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../components/Header';
import NowWhat from '../components/NowWhat';
import { ToastContainer } from 'react-toastify';


const useStyles = makeStyles({
  wrapper: {
    height: '100vh',
  },
});

const Wrapper: React.FC = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <Header />
      <NowWhat />
      <ToastContainer />
    </div>
  );
};

export default Wrapper;
