export const SlewFlagsTypeDefs = `#graphql
  type SlewFlags {
    pk: Int!                             # Record primary key
    zeroChopThrow: Boolean!              # 
    zeroSourceOffset: Boolean!           # 
    zeroSourceDiffTrack: Boolean!        # 
    zeroMountOffset: Boolean!            # 
    zeroMountDiffTrack: Boolean!         # 
    shortcircuitTargetFilter: Boolean!   # 
    shortcircuitMountFilter: Boolean!    # 
    resetPointing: Boolean!              # 
    stopGuide: Boolean!                  # 
    zeroGuideOffset: Boolean!            # 
    zeroInstrumentOffset: Boolean!       # 
    autoparkPwfs1: Boolean!              # 
    autoparkPwfs2: Boolean!              # 
    autoparkOiwfs: Boolean!              # 
    autoparkGems: Boolean!               # 
    autoparkAowfs: Boolean!              # 
  }

  type Query {
    slewFlags: SlewFlags
  }

  type Mutation {
    updateSlewFlags(
      pk: Int!                            # Primary key
      zeroChopThrow: Boolean              # 
      zeroSourceOffset: Boolean           # 
      zeroSourceDiffTrack: Boolean        # 
      zeroMountOffset: Boolean            # 
      zeroMountDiffTrack: Boolean         # 
      shortcircuitTargetFilter: Boolean   # 
      shortcircuitMountFilter: Boolean    # 
      resetPointing: Boolean              # 
      stopGuide: Boolean                  # 
      zeroGuideOffset: Boolean            # 
      zeroInstrumentOffset: Boolean       # 
      autoparkPwfs1: Boolean              # 
      autoparkPwfs2: Boolean              # 
      autoparkOiwfs: Boolean              # 
      autoparkGems: Boolean               # 
      autoparkAowfs: Boolean              # 
    ): SlewFlags!
  }
`;
