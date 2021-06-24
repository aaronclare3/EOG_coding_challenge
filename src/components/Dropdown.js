import React from 'react';
import { useState, useEffect } from 'react';
import { LOAD_METRICS } from '../GraphQL/Queries';
import { useQuery } from '@apollo/client';
import CurrentMeasurement from './CurrentMeasurement';

const Dropdown = () => {
  const [metrics, setMetrics] = useState([]);
  const [current, setCurrent] = useState('oilTemp');
  const { error, loading, data } = useQuery(LOAD_METRICS);

  useEffect(() => {
    if (data) {
      setMetrics(data.getMetrics);
    }
  }, [data]);

  const metricsList =
    metrics.length > 0 &&
    metrics.map(metric => {
      return (
        <option value={metric} key={metric}>
          {metric}
        </option>
      );
    });

  return (
    <div>
      <select onChange={e => setCurrent(e.target.value)}>{metricsList}</select>
      <CurrentMeasurement current={current} />
    </div>
  );
};

export default Dropdown;
