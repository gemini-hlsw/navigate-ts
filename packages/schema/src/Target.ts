export const TargetTypeDefs = `#graphql

  enum TargetType {
    FIXED
    SCIENCE
    BLINDOFFSET
    PWFS1
    PWFS2
    OIWFS
  }

  type RA {
    degrees: Float!
    hms: String!
  }

  type Dec {
    degrees: Float!
    dms: String!
  }

  type Az {
    degrees: Float!
    dms: String!
  }

  type El {
    degrees: Float!
    dms: String!
  }

  type Target {
    pk: Int!             # Primary Key
    id: String          # Target ID
    name: String!        # Name of the target
    ra: RA              # Right Ascention
    az: Az              # Azimuth
    el: El              # Elevation
    dec: Dec            # Declination
    magnitude: Float    # Magnitude
    epoch: String!       # Epoch of target
    type: TargetType!    # FIXED | SCIENCE | BLINDOFFSET | PWFS1 | PWFS2 | OIWFS
    wavelength: Int      # Wavelength
    createdAt: DateTime!   # Datetime when it was created
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    target(pk: Int, id: String, name: String): Target
    targets(type: TargetType): [Target!]!
  }

  input TargetInput {
    id: String
    name: String
    coord1: Float
    coord2: Float
    magnitude: Float
    epoch: String
    type: String
    wavelength: Int
  }

  type Mutation {
    createTarget(
      id: String
      name: String!
      ra: Float
      az: Float
      dec: Float
      el: Float
      magnitude: Float
      epoch: String
      type: TargetType!
      wavelength: Int
    ): Target!

    updateTarget(
      pk: Int!
      id: String
      name: String
      coord1: Float
      coord2: Float
      magnitude: Float
      epoch: String
      type: TargetType
      wavelength: Int
    ): Target!

    removeAndCreateBaseTargets(
      targets: [TargetInput!]
    ): [Target!]!

    removeAndCreateWfsTargets(
      wfs: TargetType
      targets: [TargetInput!]
    ): [Target!]!
  }
`;
