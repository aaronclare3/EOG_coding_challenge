import React from 'react';
import { useState, useEffect } from 'react';
import { LOAD_METRICS } from '../GraphQL/Queries';
import { useQuery } from '@apollo/client';

const Dropdown = () => {
  const [metrics, setMetrics] = useState([]);

  const { error, loading, data } = useQuery(LOAD_METRICS);

  useEffect(() => {
    if (data) {
      setMetrics(data.getMetrics);
    }
  }, [data]);
  return (
    <div>
      <select>
        <option defaultValue="Select a Metric" hidden>
          Select a metric
        </option>
      </select>
      <div>{metrics}</div>
    </div>
  );
};

export default Dropdown;
