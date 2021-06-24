import { gql } from '@apollo/client';

export const LOAD_METRICS = gql`
  query {
    getMetrics
  }
`;
