export const EngineeringTargetTypeDefs = `#graphql
  type EngineeringTarget {
    pk: Int!             # Primary Key
    id: String          # Target ID
    name: String!        # Name of the target
    ra: RA              # Right Ascention
    az: Az              # Azimuth
    el: El              # Elevation
    dec: Dec            # Declination
    epoch: String       # Epoch of target
    type: TargetType!    # FIXED | SCIENCE | BLINDOFFSET | PWFS1 | PWFS2 | OIWFS
    wavelength: Int      # Wavelength
    instrument: String!   # Instrument name
    rotatorMode: TrackingType # Rotator type
    rotatorAngle: Float  # Rotator angle
    createdAt: DateTime!   # Datetime when it was created
  }

  type Query {
    engineeringTarget(pk: Int, id: String, name: String): EngineeringTarget
    engineeringTargets(type: TargetType): [EngineeringTarget!]!
  }

  type Mutation {
    createEngineeringTarget(
      id: String
      name: String!
      ra: Float
      az: Float
      dec: Float
      el: Float
      epoch: String
      type: TargetType!
      instrument: String!
      wavelength: Int
      rotatorMode: TrackingType
      rotatorAngle: Float
    ): EngineeringTarget!

    updateEngineeringTarget(
      pk: Int!
      id: String
      name: String
      coord1: Float
      coord2: Float
      epoch: String
      type: TargetType
      instrument: String
      wavelength: Int
      rotatorMode: TrackingType
      rotatorAngle: Float
    ): EngineeringTarget!
  }
`;
