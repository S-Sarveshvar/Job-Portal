import React from 'react';
import {BarLoader} from 'react-spinners';

const styling = {
  display: 'block',
  margin: '100px auto',
};

const Spinners = ({ loading }) => {
  return (
    <BarLoader
      color="#4338ca"
      loading={loading}
      cssOverride={styling}
      width={150}
    />
  );
};

export default Spinners;