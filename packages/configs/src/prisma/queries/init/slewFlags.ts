import type { Prisma } from '../../../../gen/prisma/index.js';

export const INITIAL_SLEW_FLAGS: Prisma.SlewFlagsCreateInput = {
  zeroChopThrow: true,
  zeroSourceOffset: true,
  zeroSourceDiffTrack: true,
  zeroMountOffset: true,
  zeroMountDiffTrack: true,
  shortcircuitTargetFilter: true,
  shortcircuitMountFilter: true,
  resetPointing: true,
  stopGuide: true,
  zeroGuideOffset: true,
  zeroInstrumentOffset: true,
  autoparkPwfs1: false,
  autoparkPwfs2: false,
  autoparkOiwfs: false,
  autoparkGems: false,
  autoparkAowfs: false,
};
