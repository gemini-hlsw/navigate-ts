export const RotatorTypeDefs = `#graphql
  enum TrackingType {
    TRACKING
    FIXED
  }

  type Rotator {
    pk: Int!                         # Record primary key
    angle: Float!                    # Rotator angle
    tracking: TrackingType!          # Tracking mode
  }

  type Query {
    rotator: Rotator
  }

  type Mutation {
    updateRotator(
      pk: Int!                # Primary key
      angle: Float            # Rotator angle
      tracking: TrackingType  # Tracking mode
    ): Rotator!
  }
`;
