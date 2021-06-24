import React from 'react';
import { useState, useEffect } from 'react';

import { useQuery } from '@apollo/client';
import { LOAD_LAST_KNOWN_MEASUREMENT } from '../GraphQL/Queries';

const CurrentMeasurement = ({ current }) => {
  const [metric, setMetric] = useState('');
  const [at, setAt] = useState('');
  const [value, setValue] = useState('');
  const [unit, setUnit] = useState('');

  const { error, loading, data } = useQuery(LOAD_LAST_KNOWN_MEASUREMENT, {
    variables: { metric: current },
  });

  useEffect(() => {
    if (data) {
      setMetric(data.getLastKnownMeasurement.metric);
      setAt(data.getLastKnownMeasurement.at);
      setValue(data.getLastKnownMeasurement.value);
      setUnit(data.getLastKnownMeasurement.unit);
    }
  }, [data]);

  return (
    <div>
      <div>Metric: {metric}</div>
      <div>At: {at}</div>
      <div>Value: {value}</div>
      <div>Unit: {unit}</div>
    </div>
  );
};

export default CurrentMeasurement;
