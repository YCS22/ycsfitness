import { gql } from '@apollo/client';

export const WORKOUT_CATEGORY = gql`
  query MyQuery {
    workoutcategory {
      id
      created_at
      name
      workoutCategory {
        id
        image
        name
        categoryid
        description
      }
    }
  }
`;

export const PROGRAM = gql`
  query MyQuery {
    program {
      program_prog_work {
        id
        re
        set
        program_workout {
          id
          image
          name
          description
          categoryid
        }
      }
      id
      level
      name
      description
      created_at
    }
  }
`;
