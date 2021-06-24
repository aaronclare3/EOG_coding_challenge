import { gql } from '@apollo/client';

export const LOAD_METRICS = gql`
  query {
    getMetrics
  }
`;

export const LOAD_LAST_KNOWN_MEASUREMENT = gql`
  query GetLastKnownMeasurement($metric: String!) {
    getLastKnownMeasurement(metricName: $metric) {
      metric
      at
      value
      unit
    }
  }
`;
