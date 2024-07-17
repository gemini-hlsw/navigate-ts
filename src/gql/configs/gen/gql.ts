/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
  '\n  query getAltairGuideLoop {\n    altairGuideLoop {\n      pk\n      aoEnabled\n      oiBlend\n      focus\n      p1Ttf\n      strap\n      oiTtf\n      ttgs\n      sfo\n    }\n  }\n':
    types.GetAltairGuideLoopDocument,
  '\n  mutation updateAltairGuideLoop(\n    $pk: Int!\n    $aoEnabled: Boolean\n    $oiBlend: Boolean\n    $focus: Boolean\n    $p1Ttf: Boolean\n    $strap: Boolean\n    $oiTtf: Boolean\n    $ttgs: Boolean\n    $sfo: Boolean\n  ) {\n    updateAltairGuideLoop(\n      pk: $pk\n      aoEnabled: $aoEnabled\n      oiBlend: $oiBlend\n      focus: $focus\n      p1Ttf: $p1Ttf\n      strap: $strap\n      oiTtf: $oiTtf\n      ttgs: $ttgs\n      sfo: $sfo\n    ) {\n      pk\n      aoEnabled\n      oiBlend\n      focus\n      p1Ttf\n      strap\n      oiTtf\n      ttgs\n      sfo\n    }\n  }\n':
    types.UpdateAltairGuideLoopDocument,
  '\n  query getAltairInstrument {\n    altairInstrument {\n      pk\n      beamsplitter\n      startMagnitude\n      seeing\n      windSpeed\n      forceMode\n      ndFilter\n      fieldLens\n      deployAdc\n      adjustAdc\n      lgs\n    }\n  }\n':
    types.GetAltairInstrumentDocument,
  '\n  mutation updateAltairInstrument(\n    $pk: Int!\n    $beamsplitter: String\n    $startMagnitude: Float\n    $seeing: Float\n    $windSpeed: Float\n    $forceMode: Boolean\n    $ndFilter: Boolean\n    $fieldLens: Boolean\n    $deployAdc: Boolean\n    $adjustAdc: Boolean\n    $lgs: Boolean\n  ) {\n    updateAltairInstrument(\n      pk: $pk\n      beamsplitter: $beamsplitter\n      startMagnitude: $startMagnitude\n      seeing: $seeing\n      windSpeed: $windSpeed\n      forceMode: $forceMode\n      ndFilter: $ndFilter\n      fieldLens: $fieldLens\n      deployAdc: $deployAdc\n      adjustAdc: $adjustAdc\n      lgs: $lgs\n    ) {\n      pk\n      beamsplitter\n      startMagnitude\n      seeing\n      windSpeed\n      forceMode\n      ndFilter\n      fieldLens\n      deployAdc\n      adjustAdc\n      lgs\n    }\n  }\n':
    types.UpdateAltairInstrumentDocument,
  '\n  query getConfiguration {\n    configuration {\n      pk\n      site\n      selectedTarget\n      selectedOiTarget\n      selectedP1Target\n      selectedP2Target\n      oiGuidingType\n      p1GuidingType\n      p2GuidingType\n      obsTitle\n      obsId\n      obsInstrument\n      obsSubtitle\n    }\n  }\n':
    types.GetConfigurationDocument,
  '\n  mutation updateConfiguration(\n    $pk: Int!\n    $site: SiteType\n    $selectedTarget: Int\n    $selectedOiTarget: Int\n    $selectedP1Target: Int\n    $selectedP2Target: Int\n    $oiGuidingType: GuidingType\n    $p1GuidingType: GuidingType\n    $p2GuidingType: GuidingType\n    $obsTitle: String\n    $obsId: String\n    $obsInstrument: String\n    $obsSubtitle: String\n  ) {\n    updateConfiguration(\n      pk: $pk\n      site: $site\n      selectedTarget: $selectedTarget\n      selectedOiTarget: $selectedOiTarget\n      selectedP1Target: $selectedP1Target\n      selectedP2Target: $selectedP2Target\n      oiGuidingType: $oiGuidingType\n      p1GuidingType: $p1GuidingType\n      p2GuidingType: $p2GuidingType\n      obsTitle: $obsTitle\n      obsId: $obsId\n      obsInstrument: $obsInstrument\n      obsSubtitle: $obsSubtitle\n    ) {\n      pk\n      site\n      selectedTarget\n      selectedOiTarget\n      selectedP1Target\n      selectedP2Target\n      oiGuidingType\n      p1GuidingType\n      p2GuidingType\n      obsTitle\n      obsId\n      obsInstrument\n      obsSubtitle\n    }\n  }\n':
    types.UpdateConfigurationDocument,
  '\n  query getGemsGuideLoop {\n    gemsGuideLoop {\n      pk\n      aoEnabled\n      focus\n      rotation\n      tipTilt\n      anisopl\n      flexure\n    }\n  }\n':
    types.GetGemsGuideLoopDocument,
  '\n  mutation updateGemsGuideLoop(\n    $pk: Int!\n    $aoEnabled: Boolean\n    $focus: Boolean\n    $rotation: Boolean\n    $tipTilt: Boolean\n    $anisopl: Boolean\n    $flexure: Boolean\n  ) {\n    updateGemsGuideLoop(\n      pk: $pk\n      aoEnabled: $aoEnabled\n      focus: $focus\n      rotation: $rotation\n      tipTilt: $tipTilt\n      anisopl: $anisopl\n      flexure: $flexure\n    ) {\n      pk\n      aoEnabled\n      focus\n      rotation\n      tipTilt\n      anisopl\n      flexure\n    }\n  }\n':
    types.UpdateGemsGuideLoopDocument,
  '\n  query getGemsInstrument {\n    gemsInstrument {\n      pk\n      beamsplitter\n      adc\n      astrometricMode\n    }\n  }\n':
    types.GetGemsInstrumentDocument,
  '\n  mutation updateGemsInstrument($pk: Int!, $beamsplitter: String, $adc: Boolean, $astrometricMode: String) {\n    updateGemsInstrument(pk: $pk, beamsplitter: $beamsplitter, adc: $adc, astrometricMode: $astrometricMode) {\n      pk\n      beamsplitter\n      adc\n      astrometricMode\n    }\n  }\n':
    types.UpdateGemsInstrumentDocument,
  '\n  query guideAlarms {\n    guideAlarms {\n      OIWFS {\n        wfs\n        limit\n        enabled\n      }\n      PWFS1 {\n        wfs\n        limit\n        enabled\n      }\n      PWFS2 {\n        wfs\n        limit\n        enabled\n      }\n    }\n  }\n':
    types.GuideAlarmsDocument,
  '\n  mutation updateGuideAlarm($wfs: WfsType!, $enabled: Boolean, $limit: Int) {\n    updateGuideAlarm(wfs: $wfs, enabled: $enabled, limit: $limit) {\n      wfs\n      limit\n      enabled\n    }\n  }\n':
    types.UpdateGuideAlarmDocument,
  '\n  query getGuideLoop {\n    guideLoop {\n      pk\n      m2TipTiltEnable\n      m2TipTiltSource\n      m2FocusEnable\n      m2FocusSource\n      m2TipTiltFocusLink\n      m2ComaEnable\n      m1CorrectionsEnable\n      m2ComaM1CorrectionsSource\n      mountOffload\n      daytimeMode\n      probeTracking\n      lightPath\n    }\n  }\n':
    types.GetGuideLoopDocument,
  '\n  mutation updateGuideLoop(\n    $pk: Int!\n    $m2TipTiltEnable: Boolean\n    $m2TipTiltSource: String\n    $m2FocusEnable: Boolean\n    $m2FocusSource: String\n    $m2TipTiltFocusLink: Boolean\n    $m2ComaEnable: Boolean\n    $m1CorrectionsEnable: Boolean\n    $m2ComaM1CorrectionsSource: String\n    $mountOffload: Boolean\n    $daytimeMode: Boolean\n    $probeTracking: String\n    $lightPath: String\n  ) {\n    updateGuideLoop(\n      pk: $pk\n      m2TipTiltEnable: $m2TipTiltEnable\n      m2TipTiltSource: $m2TipTiltSource\n      m2FocusEnable: $m2FocusEnable\n      m2FocusSource: $m2FocusSource\n      m2TipTiltFocusLink: $m2TipTiltFocusLink\n      m2ComaEnable: $m2ComaEnable\n      m1CorrectionsEnable: $m1CorrectionsEnable\n      m2ComaM1CorrectionsSource: $m2ComaM1CorrectionsSource\n      mountOffload: $mountOffload\n      daytimeMode: $daytimeMode\n      probeTracking: $probeTracking\n      lightPath: $lightPath\n    ) {\n      pk\n      m2TipTiltEnable\n      m2TipTiltSource\n      m2FocusEnable\n      m2FocusSource\n      m2TipTiltFocusLink\n      m2ComaEnable\n      m1CorrectionsEnable\n      m2ComaM1CorrectionsSource\n      mountOffload\n      daytimeMode\n      probeTracking\n      lightPath\n    }\n  }\n':
    types.UpdateGuideLoopDocument,
  '\n  query getDistinctInstruments {\n    distinctInstruments {\n      name\n    }\n  }\n':
    types.GetDistinctInstrumentsDocument,
  '\n  query getDistinctPorts($name: String!) {\n    distinctPorts(name: $name) {\n      issPort\n    }\n  }\n':
    types.GetDistinctPortsDocument,
  '\n  query getInstruments($name: String!, $issPort: Int!) {\n    instruments(name: $name, issPort: $issPort) {\n      pk\n      name\n      iaa\n      issPort\n      focusOffset\n      wfs\n      originX\n      originY\n      ao\n      extraParams\n    }\n  }\n':
    types.GetInstrumentsDocument,
  '\n  query getInstrument($name: String!, $issPort: Int!, $wfs: WfsType) {\n    instrument(name: $name, issPort: $issPort, wfs: $wfs) {\n      pk\n      name\n      iaa\n      issPort\n      focusOffset\n      wfs\n      originX\n      originY\n      ao\n      extraParams\n    }\n  }\n':
    types.GetInstrumentDocument,
  '\n  query getMechanism {\n    mechanism {\n      pk\n      mcs\n      mcsPark\n      mcsUnwrap\n      scs\n      crcs\n      crcsPark\n      crcsUnwrap\n      pwfs1\n      pwfs1Park\n      pwfs1Unwrap\n      pwfs2\n      pwfs2Park\n      pwfs2Unwrap\n      oiwfs\n      oiwfsPark\n      odgw\n      odgwPark\n      aowfs\n      aowfsPark\n      dome\n      domePark\n      domeMode\n      shutters\n      shuttersPark\n      shutterMode\n      shutterAperture\n      wVGate\n      wVGateClose\n      wVGateValue\n      eVGate\n      eVGateClose\n      eVGateValue\n      agScienceFoldPark\n      agAoFoldPark\n      agAcPickoffPark\n      agParkAll\n    }\n  }\n':
    types.GetMechanismDocument,
  '\n  mutation updateMechanism(\n    $pk: Int!\n    $mcs: StatusType\n    $mcsPark: StatusType\n    $mcsUnwrap: StatusType\n    $scs: StatusType\n    $crcs: StatusType\n    $crcsPark: StatusType\n    $crcsUnwrap: StatusType\n    $pwfs1: StatusType\n    $pwfs1Park: StatusType\n    $pwfs1Unwrap: StatusType\n    $pwfs2: StatusType\n    $pwfs2Park: StatusType\n    $pwfs2Unwrap: StatusType\n    $oiwfs: StatusType\n    $oiwfsPark: StatusType\n    $odgw: StatusType\n    $odgwPark: StatusType\n    $aowfs: StatusType\n    $aowfsPark: StatusType\n    $dome: StatusType\n    $domePark: StatusType\n    $domeMode: String\n    $shutters: StatusType\n    $shuttersPark: StatusType\n    $shutterMode: String\n    $shutterAperture: Int\n    $wVGate: StatusType\n    $wVGateClose: StatusType\n    $wVGateValue: Int\n    $eVGate: StatusType\n    $eVGateClose: StatusType\n    $eVGateValue: Int\n    $agScienceFoldPark: StatusType\n    $agAoFoldPark: StatusType\n    $agAcPickoffPark: StatusType\n    $agParkAll: StatusType\n  ) {\n    updateMechanism(\n      pk: $pk\n      mcs: $mcs\n      mcsPark: $mcsPark\n      mcsUnwrap: $mcsUnwrap\n      scs: $scs\n      crcs: $crcs\n      crcsPark: $crcsPark\n      crcsUnwrap: $crcsUnwrap\n      pwfs1: $pwfs1\n      pwfs1Park: $pwfs1Park\n      pwfs1Unwrap: $pwfs1Unwrap\n      pwfs2: $pwfs2\n      pwfs2Park: $pwfs2Park\n      pwfs2Unwrap: $pwfs2Unwrap\n      oiwfs: $oiwfs\n      oiwfsPark: $oiwfsPark\n      odgw: $odgw\n      odgwPark: $odgwPark\n      aowfs: $aowfs\n      aowfsPark: $aowfsPark\n      dome: $dome\n      domePark: $domePark\n      domeMode: $domeMode\n      shutters: $shutters\n      shuttersPark: $shuttersPark\n      shutterMode: $shutterMode\n      shutterAperture: $shutterAperture\n      wVGate: $wVGate\n      wVGateClose: $wVGateClose\n      wVGateValue: $wVGateValue\n      eVGate: $eVGate\n      eVGateClose: $eVGateClose\n      eVGateValue: $eVGateValue\n      agScienceFoldPark: $agScienceFoldPark\n      agAoFoldPark: $agAoFoldPark\n      agAcPickoffPark: $agAcPickoffPark\n      agParkAll: $agParkAll\n    ) {\n      pk\n      mcs\n      mcsPark\n      mcsUnwrap\n      scs\n      crcs\n      crcsPark\n      crcsUnwrap\n      pwfs1\n      pwfs1Park\n      pwfs1Unwrap\n      pwfs2\n      pwfs2Park\n      pwfs2Unwrap\n      oiwfs\n      oiwfsPark\n      odgw\n      odgwPark\n      aowfs\n      aowfsPark\n      dome\n      domePark\n      domeMode\n      shutters\n      shuttersPark\n      shutterMode\n      shutterAperture\n      wVGate\n      wVGateClose\n      wVGateValue\n      eVGate\n      eVGateClose\n      eVGateValue\n      agScienceFoldPark\n      agAoFoldPark\n      agAcPickoffPark\n      agParkAll\n    }\n  }\n':
    types.UpdateMechanismDocument,
  '\n  query getRotator {\n    rotator {\n      pk\n      angle\n      tracking\n    }\n  }\n':
    types.GetRotatorDocument,
  '\n  mutation updateRotator($pk: Int!, $angle: Float, $tracking: TrackingType) {\n    updateRotator(pk: $pk, angle: $angle, tracking: $tracking) {\n      pk\n      angle\n      tracking\n    }\n  }\n':
    types.UpdateRotatorDocument,
  '\n  query getSlewFlags {\n    slewFlags {\n      pk\n      zeroChopThrow\n      zeroSourceOffset\n      zeroSourceDiffTrack\n      zeroMountOffset\n      zeroMountDiffTrack\n      shortcircuitTargetFilter\n      shortcircuitMountFilter\n      resetPointing\n      stopGuide\n      zeroGuideOffset\n      zeroInstrumentOffset\n      autoparkPwfs1\n      autoparkPwfs2\n      autoparkOiwfs\n      autoparkGems\n      autoparkAowfs\n    }\n  }\n':
    types.GetSlewFlagsDocument,
  '\n  mutation updateSlewFlags(\n    $pk: Int!\n    $zeroChopThrow: Boolean\n    $zeroSourceOffset: Boolean\n    $zeroSourceDiffTrack: Boolean\n    $zeroMountOffset: Boolean\n    $zeroMountDiffTrack: Boolean\n    $shortcircuitTargetFilter: Boolean\n    $shortcircuitMountFilter: Boolean\n    $resetPointing: Boolean\n    $stopGuide: Boolean\n    $zeroGuideOffset: Boolean\n    $zeroInstrumentOffset: Boolean\n    $autoparkPwfs1: Boolean\n    $autoparkPwfs2: Boolean\n    $autoparkOiwfs: Boolean\n    $autoparkGems: Boolean\n    $autoparkAowfs: Boolean\n  ) {\n    updateSlewFlags(\n      pk: $pk\n      zeroChopThrow: $zeroChopThrow\n      zeroSourceOffset: $zeroSourceOffset\n      zeroSourceDiffTrack: $zeroSourceDiffTrack\n      zeroMountOffset: $zeroMountOffset\n      zeroMountDiffTrack: $zeroMountDiffTrack\n      shortcircuitTargetFilter: $shortcircuitTargetFilter\n      shortcircuitMountFilter: $shortcircuitMountFilter\n      resetPointing: $resetPointing\n      stopGuide: $stopGuide\n      zeroGuideOffset: $zeroGuideOffset\n      zeroInstrumentOffset: $zeroInstrumentOffset\n      autoparkPwfs1: $autoparkPwfs1\n      autoparkPwfs2: $autoparkPwfs2\n      autoparkOiwfs: $autoparkOiwfs\n      autoparkGems: $autoparkGems\n      autoparkAowfs: $autoparkAowfs\n    ) {\n      pk\n      zeroChopThrow\n      zeroSourceOffset\n      zeroSourceDiffTrack\n      zeroMountOffset\n      zeroMountDiffTrack\n      shortcircuitTargetFilter\n      shortcircuitMountFilter\n      resetPointing\n      stopGuide\n      zeroGuideOffset\n      zeroInstrumentOffset\n      autoparkPwfs1\n      autoparkPwfs2\n      autoparkOiwfs\n      autoparkGems\n      autoparkAowfs\n    }\n  }\n':
    types.UpdateSlewFlagsDocument,
  '\n  query getTargets {\n    targets {\n      pk\n      id\n      name\n      ra {\n        degrees\n        hms\n      }\n      dec {\n        degrees\n        dms\n      }\n      az {\n        degrees\n        dms\n      }\n      el {\n        degrees\n        dms\n      }\n      epoch\n      type\n      createdAt\n    }\n  }\n':
    types.GetTargetsDocument,
  '\n  mutation updateTarget(\n    $pk: Int!\n    $id: String\n    $name: String\n    $coord1: Float\n    $coord2: Float\n    $epoch: String\n    $type: TargetType\n  ) {\n    updateTarget(pk: $pk, id: $id, name: $name, coord1: $coord1, coord2: $coord2, epoch: $epoch, type: $type) {\n      pk\n      id\n      name\n      ra {\n        degrees\n        hms\n      }\n      dec {\n        degrees\n        dms\n      }\n      az {\n        degrees\n        dms\n      }\n      el {\n        degrees\n        dms\n      }\n      epoch\n      type\n      createdAt\n    }\n  }\n':
    types.UpdateTargetDocument,
  '\n  mutation createTarget(\n    $id: String\n    $name: String!\n    $ra: Float\n    $az: Float\n    $dec: Float\n    $el: Float\n    $epoch: String\n    $type: TargetType!\n  ) {\n    createTarget(id: $id, name: $name, ra: $ra, az: $az, dec: $dec, el: $el, epoch: $epoch, type: $type) {\n      pk\n      id\n      name\n      ra {\n        degrees\n        hms\n      }\n      dec {\n        degrees\n        dms\n      }\n      az {\n        degrees\n        dms\n      }\n      el {\n        degrees\n        dms\n      }\n      epoch\n      type\n      createdAt\n    }\n  }\n':
    types.CreateTargetDocument,
  '\n  mutation removeAndCreateBaseTargets($targets: [TargetInput!]) {\n    removeAndCreateBaseTargets(targets: $targets) {\n      pk\n      id\n      name\n      ra {\n        degrees\n        hms\n      }\n      dec {\n        degrees\n        dms\n      }\n      az {\n        degrees\n        dms\n      }\n      el {\n        degrees\n        dms\n      }\n      epoch\n      type\n      createdAt\n    }\n  }\n':
    types.RemoveAndCreateBaseTargetsDocument,
  '\n  mutation removeAndCreateWfsTargets($wfs: TargetType, $targets: [TargetInput!]) {\n    removeAndCreateWfsTargets(wfs: $wfs, targets: $targets) {\n      pk\n      id\n      name\n      ra {\n        degrees\n        hms\n      }\n      dec {\n        degrees\n        dms\n      }\n      az {\n        degrees\n        dms\n      }\n      el {\n        degrees\n        dms\n      }\n      epoch\n      type\n      createdAt\n    }\n  }\n':
    types.RemoveAndCreateWfsTargetsDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query getAltairGuideLoop {\n    altairGuideLoop {\n      pk\n      aoEnabled\n      oiBlend\n      focus\n      p1Ttf\n      strap\n      oiTtf\n      ttgs\n      sfo\n    }\n  }\n',
): (typeof documents)['\n  query getAltairGuideLoop {\n    altairGuideLoop {\n      pk\n      aoEnabled\n      oiBlend\n      focus\n      p1Ttf\n      strap\n      oiTtf\n      ttgs\n      sfo\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation updateAltairGuideLoop(\n    $pk: Int!\n    $aoEnabled: Boolean\n    $oiBlend: Boolean\n    $focus: Boolean\n    $p1Ttf: Boolean\n    $strap: Boolean\n    $oiTtf: Boolean\n    $ttgs: Boolean\n    $sfo: Boolean\n  ) {\n    updateAltairGuideLoop(\n      pk: $pk\n      aoEnabled: $aoEnabled\n      oiBlend: $oiBlend\n      focus: $focus\n      p1Ttf: $p1Ttf\n      strap: $strap\n      oiTtf: $oiTtf\n      ttgs: $ttgs\n      sfo: $sfo\n    ) {\n      pk\n      aoEnabled\n      oiBlend\n      focus\n      p1Ttf\n      strap\n      oiTtf\n      ttgs\n      sfo\n    }\n  }\n',
): (typeof documents)['\n  mutation updateAltairGuideLoop(\n    $pk: Int!\n    $aoEnabled: Boolean\n    $oiBlend: Boolean\n    $focus: Boolean\n    $p1Ttf: Boolean\n    $strap: Boolean\n    $oiTtf: Boolean\n    $ttgs: Boolean\n    $sfo: Boolean\n  ) {\n    updateAltairGuideLoop(\n      pk: $pk\n      aoEnabled: $aoEnabled\n      oiBlend: $oiBlend\n      focus: $focus\n      p1Ttf: $p1Ttf\n      strap: $strap\n      oiTtf: $oiTtf\n      ttgs: $ttgs\n      sfo: $sfo\n    ) {\n      pk\n      aoEnabled\n      oiBlend\n      focus\n      p1Ttf\n      strap\n      oiTtf\n      ttgs\n      sfo\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query getAltairInstrument {\n    altairInstrument {\n      pk\n      beamsplitter\n      startMagnitude\n      seeing\n      windSpeed\n      forceMode\n      ndFilter\n      fieldLens\n      deployAdc\n      adjustAdc\n      lgs\n    }\n  }\n',
): (typeof documents)['\n  query getAltairInstrument {\n    altairInstrument {\n      pk\n      beamsplitter\n      startMagnitude\n      seeing\n      windSpeed\n      forceMode\n      ndFilter\n      fieldLens\n      deployAdc\n      adjustAdc\n      lgs\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation updateAltairInstrument(\n    $pk: Int!\n    $beamsplitter: String\n    $startMagnitude: Float\n    $seeing: Float\n    $windSpeed: Float\n    $forceMode: Boolean\n    $ndFilter: Boolean\n    $fieldLens: Boolean\n    $deployAdc: Boolean\n    $adjustAdc: Boolean\n    $lgs: Boolean\n  ) {\n    updateAltairInstrument(\n      pk: $pk\n      beamsplitter: $beamsplitter\n      startMagnitude: $startMagnitude\n      seeing: $seeing\n      windSpeed: $windSpeed\n      forceMode: $forceMode\n      ndFilter: $ndFilter\n      fieldLens: $fieldLens\n      deployAdc: $deployAdc\n      adjustAdc: $adjustAdc\n      lgs: $lgs\n    ) {\n      pk\n      beamsplitter\n      startMagnitude\n      seeing\n      windSpeed\n      forceMode\n      ndFilter\n      fieldLens\n      deployAdc\n      adjustAdc\n      lgs\n    }\n  }\n',
): (typeof documents)['\n  mutation updateAltairInstrument(\n    $pk: Int!\n    $beamsplitter: String\n    $startMagnitude: Float\n    $seeing: Float\n    $windSpeed: Float\n    $forceMode: Boolean\n    $ndFilter: Boolean\n    $fieldLens: Boolean\n    $deployAdc: Boolean\n    $adjustAdc: Boolean\n    $lgs: Boolean\n  ) {\n    updateAltairInstrument(\n      pk: $pk\n      beamsplitter: $beamsplitter\n      startMagnitude: $startMagnitude\n      seeing: $seeing\n      windSpeed: $windSpeed\n      forceMode: $forceMode\n      ndFilter: $ndFilter\n      fieldLens: $fieldLens\n      deployAdc: $deployAdc\n      adjustAdc: $adjustAdc\n      lgs: $lgs\n    ) {\n      pk\n      beamsplitter\n      startMagnitude\n      seeing\n      windSpeed\n      forceMode\n      ndFilter\n      fieldLens\n      deployAdc\n      adjustAdc\n      lgs\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query getConfiguration {\n    configuration {\n      pk\n      site\n      selectedTarget\n      selectedOiTarget\n      selectedP1Target\n      selectedP2Target\n      oiGuidingType\n      p1GuidingType\n      p2GuidingType\n      obsTitle\n      obsId\n      obsInstrument\n      obsSubtitle\n    }\n  }\n',
): (typeof documents)['\n  query getConfiguration {\n    configuration {\n      pk\n      site\n      selectedTarget\n      selectedOiTarget\n      selectedP1Target\n      selectedP2Target\n      oiGuidingType\n      p1GuidingType\n      p2GuidingType\n      obsTitle\n      obsId\n      obsInstrument\n      obsSubtitle\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation updateConfiguration(\n    $pk: Int!\n    $site: SiteType\n    $selectedTarget: Int\n    $selectedOiTarget: Int\n    $selectedP1Target: Int\n    $selectedP2Target: Int\n    $oiGuidingType: GuidingType\n    $p1GuidingType: GuidingType\n    $p2GuidingType: GuidingType\n    $obsTitle: String\n    $obsId: String\n    $obsInstrument: String\n    $obsSubtitle: String\n  ) {\n    updateConfiguration(\n      pk: $pk\n      site: $site\n      selectedTarget: $selectedTarget\n      selectedOiTarget: $selectedOiTarget\n      selectedP1Target: $selectedP1Target\n      selectedP2Target: $selectedP2Target\n      oiGuidingType: $oiGuidingType\n      p1GuidingType: $p1GuidingType\n      p2GuidingType: $p2GuidingType\n      obsTitle: $obsTitle\n      obsId: $obsId\n      obsInstrument: $obsInstrument\n      obsSubtitle: $obsSubtitle\n    ) {\n      pk\n      site\n      selectedTarget\n      selectedOiTarget\n      selectedP1Target\n      selectedP2Target\n      oiGuidingType\n      p1GuidingType\n      p2GuidingType\n      obsTitle\n      obsId\n      obsInstrument\n      obsSubtitle\n    }\n  }\n',
): (typeof documents)['\n  mutation updateConfiguration(\n    $pk: Int!\n    $site: SiteType\n    $selectedTarget: Int\n    $selectedOiTarget: Int\n    $selectedP1Target: Int\n    $selectedP2Target: Int\n    $oiGuidingType: GuidingType\n    $p1GuidingType: GuidingType\n    $p2GuidingType: GuidingType\n    $obsTitle: String\n    $obsId: String\n    $obsInstrument: String\n    $obsSubtitle: String\n  ) {\n    updateConfiguration(\n      pk: $pk\n      site: $site\n      selectedTarget: $selectedTarget\n      selectedOiTarget: $selectedOiTarget\n      selectedP1Target: $selectedP1Target\n      selectedP2Target: $selectedP2Target\n      oiGuidingType: $oiGuidingType\n      p1GuidingType: $p1GuidingType\n      p2GuidingType: $p2GuidingType\n      obsTitle: $obsTitle\n      obsId: $obsId\n      obsInstrument: $obsInstrument\n      obsSubtitle: $obsSubtitle\n    ) {\n      pk\n      site\n      selectedTarget\n      selectedOiTarget\n      selectedP1Target\n      selectedP2Target\n      oiGuidingType\n      p1GuidingType\n      p2GuidingType\n      obsTitle\n      obsId\n      obsInstrument\n      obsSubtitle\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query getGemsGuideLoop {\n    gemsGuideLoop {\n      pk\n      aoEnabled\n      focus\n      rotation\n      tipTilt\n      anisopl\n      flexure\n    }\n  }\n',
): (typeof documents)['\n  query getGemsGuideLoop {\n    gemsGuideLoop {\n      pk\n      aoEnabled\n      focus\n      rotation\n      tipTilt\n      anisopl\n      flexure\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation updateGemsGuideLoop(\n    $pk: Int!\n    $aoEnabled: Boolean\n    $focus: Boolean\n    $rotation: Boolean\n    $tipTilt: Boolean\n    $anisopl: Boolean\n    $flexure: Boolean\n  ) {\n    updateGemsGuideLoop(\n      pk: $pk\n      aoEnabled: $aoEnabled\n      focus: $focus\n      rotation: $rotation\n      tipTilt: $tipTilt\n      anisopl: $anisopl\n      flexure: $flexure\n    ) {\n      pk\n      aoEnabled\n      focus\n      rotation\n      tipTilt\n      anisopl\n      flexure\n    }\n  }\n',
): (typeof documents)['\n  mutation updateGemsGuideLoop(\n    $pk: Int!\n    $aoEnabled: Boolean\n    $focus: Boolean\n    $rotation: Boolean\n    $tipTilt: Boolean\n    $anisopl: Boolean\n    $flexure: Boolean\n  ) {\n    updateGemsGuideLoop(\n      pk: $pk\n      aoEnabled: $aoEnabled\n      focus: $focus\n      rotation: $rotation\n      tipTilt: $tipTilt\n      anisopl: $anisopl\n      flexure: $flexure\n    ) {\n      pk\n      aoEnabled\n      focus\n      rotation\n      tipTilt\n      anisopl\n      flexure\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query getGemsInstrument {\n    gemsInstrument {\n      pk\n      beamsplitter\n      adc\n      astrometricMode\n    }\n  }\n',
): (typeof documents)['\n  query getGemsInstrument {\n    gemsInstrument {\n      pk\n      beamsplitter\n      adc\n      astrometricMode\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation updateGemsInstrument($pk: Int!, $beamsplitter: String, $adc: Boolean, $astrometricMode: String) {\n    updateGemsInstrument(pk: $pk, beamsplitter: $beamsplitter, adc: $adc, astrometricMode: $astrometricMode) {\n      pk\n      beamsplitter\n      adc\n      astrometricMode\n    }\n  }\n',
): (typeof documents)['\n  mutation updateGemsInstrument($pk: Int!, $beamsplitter: String, $adc: Boolean, $astrometricMode: String) {\n    updateGemsInstrument(pk: $pk, beamsplitter: $beamsplitter, adc: $adc, astrometricMode: $astrometricMode) {\n      pk\n      beamsplitter\n      adc\n      astrometricMode\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query guideAlarms {\n    guideAlarms {\n      OIWFS {\n        wfs\n        limit\n        enabled\n      }\n      PWFS1 {\n        wfs\n        limit\n        enabled\n      }\n      PWFS2 {\n        wfs\n        limit\n        enabled\n      }\n    }\n  }\n',
): (typeof documents)['\n  query guideAlarms {\n    guideAlarms {\n      OIWFS {\n        wfs\n        limit\n        enabled\n      }\n      PWFS1 {\n        wfs\n        limit\n        enabled\n      }\n      PWFS2 {\n        wfs\n        limit\n        enabled\n      }\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation updateGuideAlarm($wfs: WfsType!, $enabled: Boolean, $limit: Int) {\n    updateGuideAlarm(wfs: $wfs, enabled: $enabled, limit: $limit) {\n      wfs\n      limit\n      enabled\n    }\n  }\n',
): (typeof documents)['\n  mutation updateGuideAlarm($wfs: WfsType!, $enabled: Boolean, $limit: Int) {\n    updateGuideAlarm(wfs: $wfs, enabled: $enabled, limit: $limit) {\n      wfs\n      limit\n      enabled\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query getGuideLoop {\n    guideLoop {\n      pk\n      m2TipTiltEnable\n      m2TipTiltSource\n      m2FocusEnable\n      m2FocusSource\n      m2TipTiltFocusLink\n      m2ComaEnable\n      m1CorrectionsEnable\n      m2ComaM1CorrectionsSource\n      mountOffload\n      daytimeMode\n      probeTracking\n      lightPath\n    }\n  }\n',
): (typeof documents)['\n  query getGuideLoop {\n    guideLoop {\n      pk\n      m2TipTiltEnable\n      m2TipTiltSource\n      m2FocusEnable\n      m2FocusSource\n      m2TipTiltFocusLink\n      m2ComaEnable\n      m1CorrectionsEnable\n      m2ComaM1CorrectionsSource\n      mountOffload\n      daytimeMode\n      probeTracking\n      lightPath\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation updateGuideLoop(\n    $pk: Int!\n    $m2TipTiltEnable: Boolean\n    $m2TipTiltSource: String\n    $m2FocusEnable: Boolean\n    $m2FocusSource: String\n    $m2TipTiltFocusLink: Boolean\n    $m2ComaEnable: Boolean\n    $m1CorrectionsEnable: Boolean\n    $m2ComaM1CorrectionsSource: String\n    $mountOffload: Boolean\n    $daytimeMode: Boolean\n    $probeTracking: String\n    $lightPath: String\n  ) {\n    updateGuideLoop(\n      pk: $pk\n      m2TipTiltEnable: $m2TipTiltEnable\n      m2TipTiltSource: $m2TipTiltSource\n      m2FocusEnable: $m2FocusEnable\n      m2FocusSource: $m2FocusSource\n      m2TipTiltFocusLink: $m2TipTiltFocusLink\n      m2ComaEnable: $m2ComaEnable\n      m1CorrectionsEnable: $m1CorrectionsEnable\n      m2ComaM1CorrectionsSource: $m2ComaM1CorrectionsSource\n      mountOffload: $mountOffload\n      daytimeMode: $daytimeMode\n      probeTracking: $probeTracking\n      lightPath: $lightPath\n    ) {\n      pk\n      m2TipTiltEnable\n      m2TipTiltSource\n      m2FocusEnable\n      m2FocusSource\n      m2TipTiltFocusLink\n      m2ComaEnable\n      m1CorrectionsEnable\n      m2ComaM1CorrectionsSource\n      mountOffload\n      daytimeMode\n      probeTracking\n      lightPath\n    }\n  }\n',
): (typeof documents)['\n  mutation updateGuideLoop(\n    $pk: Int!\n    $m2TipTiltEnable: Boolean\n    $m2TipTiltSource: String\n    $m2FocusEnable: Boolean\n    $m2FocusSource: String\n    $m2TipTiltFocusLink: Boolean\n    $m2ComaEnable: Boolean\n    $m1CorrectionsEnable: Boolean\n    $m2ComaM1CorrectionsSource: String\n    $mountOffload: Boolean\n    $daytimeMode: Boolean\n    $probeTracking: String\n    $lightPath: String\n  ) {\n    updateGuideLoop(\n      pk: $pk\n      m2TipTiltEnable: $m2TipTiltEnable\n      m2TipTiltSource: $m2TipTiltSource\n      m2FocusEnable: $m2FocusEnable\n      m2FocusSource: $m2FocusSource\n      m2TipTiltFocusLink: $m2TipTiltFocusLink\n      m2ComaEnable: $m2ComaEnable\n      m1CorrectionsEnable: $m1CorrectionsEnable\n      m2ComaM1CorrectionsSource: $m2ComaM1CorrectionsSource\n      mountOffload: $mountOffload\n      daytimeMode: $daytimeMode\n      probeTracking: $probeTracking\n      lightPath: $lightPath\n    ) {\n      pk\n      m2TipTiltEnable\n      m2TipTiltSource\n      m2FocusEnable\n      m2FocusSource\n      m2TipTiltFocusLink\n      m2ComaEnable\n      m1CorrectionsEnable\n      m2ComaM1CorrectionsSource\n      mountOffload\n      daytimeMode\n      probeTracking\n      lightPath\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query getDistinctInstruments {\n    distinctInstruments {\n      name\n    }\n  }\n',
): (typeof documents)['\n  query getDistinctInstruments {\n    distinctInstruments {\n      name\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query getDistinctPorts($name: String!) {\n    distinctPorts(name: $name) {\n      issPort\n    }\n  }\n',
): (typeof documents)['\n  query getDistinctPorts($name: String!) {\n    distinctPorts(name: $name) {\n      issPort\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query getInstruments($name: String!, $issPort: Int!) {\n    instruments(name: $name, issPort: $issPort) {\n      pk\n      name\n      iaa\n      issPort\n      focusOffset\n      wfs\n      originX\n      originY\n      ao\n      extraParams\n    }\n  }\n',
): (typeof documents)['\n  query getInstruments($name: String!, $issPort: Int!) {\n    instruments(name: $name, issPort: $issPort) {\n      pk\n      name\n      iaa\n      issPort\n      focusOffset\n      wfs\n      originX\n      originY\n      ao\n      extraParams\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query getInstrument($name: String!, $issPort: Int!, $wfs: WfsType) {\n    instrument(name: $name, issPort: $issPort, wfs: $wfs) {\n      pk\n      name\n      iaa\n      issPort\n      focusOffset\n      wfs\n      originX\n      originY\n      ao\n      extraParams\n    }\n  }\n',
): (typeof documents)['\n  query getInstrument($name: String!, $issPort: Int!, $wfs: WfsType) {\n    instrument(name: $name, issPort: $issPort, wfs: $wfs) {\n      pk\n      name\n      iaa\n      issPort\n      focusOffset\n      wfs\n      originX\n      originY\n      ao\n      extraParams\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query getMechanism {\n    mechanism {\n      pk\n      mcs\n      mcsPark\n      mcsUnwrap\n      scs\n      crcs\n      crcsPark\n      crcsUnwrap\n      pwfs1\n      pwfs1Park\n      pwfs1Unwrap\n      pwfs2\n      pwfs2Park\n      pwfs2Unwrap\n      oiwfs\n      oiwfsPark\n      odgw\n      odgwPark\n      aowfs\n      aowfsPark\n      dome\n      domePark\n      domeMode\n      shutters\n      shuttersPark\n      shutterMode\n      shutterAperture\n      wVGate\n      wVGateClose\n      wVGateValue\n      eVGate\n      eVGateClose\n      eVGateValue\n      agScienceFoldPark\n      agAoFoldPark\n      agAcPickoffPark\n      agParkAll\n    }\n  }\n',
): (typeof documents)['\n  query getMechanism {\n    mechanism {\n      pk\n      mcs\n      mcsPark\n      mcsUnwrap\n      scs\n      crcs\n      crcsPark\n      crcsUnwrap\n      pwfs1\n      pwfs1Park\n      pwfs1Unwrap\n      pwfs2\n      pwfs2Park\n      pwfs2Unwrap\n      oiwfs\n      oiwfsPark\n      odgw\n      odgwPark\n      aowfs\n      aowfsPark\n      dome\n      domePark\n      domeMode\n      shutters\n      shuttersPark\n      shutterMode\n      shutterAperture\n      wVGate\n      wVGateClose\n      wVGateValue\n      eVGate\n      eVGateClose\n      eVGateValue\n      agScienceFoldPark\n      agAoFoldPark\n      agAcPickoffPark\n      agParkAll\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation updateMechanism(\n    $pk: Int!\n    $mcs: StatusType\n    $mcsPark: StatusType\n    $mcsUnwrap: StatusType\n    $scs: StatusType\n    $crcs: StatusType\n    $crcsPark: StatusType\n    $crcsUnwrap: StatusType\n    $pwfs1: StatusType\n    $pwfs1Park: StatusType\n    $pwfs1Unwrap: StatusType\n    $pwfs2: StatusType\n    $pwfs2Park: StatusType\n    $pwfs2Unwrap: StatusType\n    $oiwfs: StatusType\n    $oiwfsPark: StatusType\n    $odgw: StatusType\n    $odgwPark: StatusType\n    $aowfs: StatusType\n    $aowfsPark: StatusType\n    $dome: StatusType\n    $domePark: StatusType\n    $domeMode: String\n    $shutters: StatusType\n    $shuttersPark: StatusType\n    $shutterMode: String\n    $shutterAperture: Int\n    $wVGate: StatusType\n    $wVGateClose: StatusType\n    $wVGateValue: Int\n    $eVGate: StatusType\n    $eVGateClose: StatusType\n    $eVGateValue: Int\n    $agScienceFoldPark: StatusType\n    $agAoFoldPark: StatusType\n    $agAcPickoffPark: StatusType\n    $agParkAll: StatusType\n  ) {\n    updateMechanism(\n      pk: $pk\n      mcs: $mcs\n      mcsPark: $mcsPark\n      mcsUnwrap: $mcsUnwrap\n      scs: $scs\n      crcs: $crcs\n      crcsPark: $crcsPark\n      crcsUnwrap: $crcsUnwrap\n      pwfs1: $pwfs1\n      pwfs1Park: $pwfs1Park\n      pwfs1Unwrap: $pwfs1Unwrap\n      pwfs2: $pwfs2\n      pwfs2Park: $pwfs2Park\n      pwfs2Unwrap: $pwfs2Unwrap\n      oiwfs: $oiwfs\n      oiwfsPark: $oiwfsPark\n      odgw: $odgw\n      odgwPark: $odgwPark\n      aowfs: $aowfs\n      aowfsPark: $aowfsPark\n      dome: $dome\n      domePark: $domePark\n      domeMode: $domeMode\n      shutters: $shutters\n      shuttersPark: $shuttersPark\n      shutterMode: $shutterMode\n      shutterAperture: $shutterAperture\n      wVGate: $wVGate\n      wVGateClose: $wVGateClose\n      wVGateValue: $wVGateValue\n      eVGate: $eVGate\n      eVGateClose: $eVGateClose\n      eVGateValue: $eVGateValue\n      agScienceFoldPark: $agScienceFoldPark\n      agAoFoldPark: $agAoFoldPark\n      agAcPickoffPark: $agAcPickoffPark\n      agParkAll: $agParkAll\n    ) {\n      pk\n      mcs\n      mcsPark\n      mcsUnwrap\n      scs\n      crcs\n      crcsPark\n      crcsUnwrap\n      pwfs1\n      pwfs1Park\n      pwfs1Unwrap\n      pwfs2\n      pwfs2Park\n      pwfs2Unwrap\n      oiwfs\n      oiwfsPark\n      odgw\n      odgwPark\n      aowfs\n      aowfsPark\n      dome\n      domePark\n      domeMode\n      shutters\n      shuttersPark\n      shutterMode\n      shutterAperture\n      wVGate\n      wVGateClose\n      wVGateValue\n      eVGate\n      eVGateClose\n      eVGateValue\n      agScienceFoldPark\n      agAoFoldPark\n      agAcPickoffPark\n      agParkAll\n    }\n  }\n',
): (typeof documents)['\n  mutation updateMechanism(\n    $pk: Int!\n    $mcs: StatusType\n    $mcsPark: StatusType\n    $mcsUnwrap: StatusType\n    $scs: StatusType\n    $crcs: StatusType\n    $crcsPark: StatusType\n    $crcsUnwrap: StatusType\n    $pwfs1: StatusType\n    $pwfs1Park: StatusType\n    $pwfs1Unwrap: StatusType\n    $pwfs2: StatusType\n    $pwfs2Park: StatusType\n    $pwfs2Unwrap: StatusType\n    $oiwfs: StatusType\n    $oiwfsPark: StatusType\n    $odgw: StatusType\n    $odgwPark: StatusType\n    $aowfs: StatusType\n    $aowfsPark: StatusType\n    $dome: StatusType\n    $domePark: StatusType\n    $domeMode: String\n    $shutters: StatusType\n    $shuttersPark: StatusType\n    $shutterMode: String\n    $shutterAperture: Int\n    $wVGate: StatusType\n    $wVGateClose: StatusType\n    $wVGateValue: Int\n    $eVGate: StatusType\n    $eVGateClose: StatusType\n    $eVGateValue: Int\n    $agScienceFoldPark: StatusType\n    $agAoFoldPark: StatusType\n    $agAcPickoffPark: StatusType\n    $agParkAll: StatusType\n  ) {\n    updateMechanism(\n      pk: $pk\n      mcs: $mcs\n      mcsPark: $mcsPark\n      mcsUnwrap: $mcsUnwrap\n      scs: $scs\n      crcs: $crcs\n      crcsPark: $crcsPark\n      crcsUnwrap: $crcsUnwrap\n      pwfs1: $pwfs1\n      pwfs1Park: $pwfs1Park\n      pwfs1Unwrap: $pwfs1Unwrap\n      pwfs2: $pwfs2\n      pwfs2Park: $pwfs2Park\n      pwfs2Unwrap: $pwfs2Unwrap\n      oiwfs: $oiwfs\n      oiwfsPark: $oiwfsPark\n      odgw: $odgw\n      odgwPark: $odgwPark\n      aowfs: $aowfs\n      aowfsPark: $aowfsPark\n      dome: $dome\n      domePark: $domePark\n      domeMode: $domeMode\n      shutters: $shutters\n      shuttersPark: $shuttersPark\n      shutterMode: $shutterMode\n      shutterAperture: $shutterAperture\n      wVGate: $wVGate\n      wVGateClose: $wVGateClose\n      wVGateValue: $wVGateValue\n      eVGate: $eVGate\n      eVGateClose: $eVGateClose\n      eVGateValue: $eVGateValue\n      agScienceFoldPark: $agScienceFoldPark\n      agAoFoldPark: $agAoFoldPark\n      agAcPickoffPark: $agAcPickoffPark\n      agParkAll: $agParkAll\n    ) {\n      pk\n      mcs\n      mcsPark\n      mcsUnwrap\n      scs\n      crcs\n      crcsPark\n      crcsUnwrap\n      pwfs1\n      pwfs1Park\n      pwfs1Unwrap\n      pwfs2\n      pwfs2Park\n      pwfs2Unwrap\n      oiwfs\n      oiwfsPark\n      odgw\n      odgwPark\n      aowfs\n      aowfsPark\n      dome\n      domePark\n      domeMode\n      shutters\n      shuttersPark\n      shutterMode\n      shutterAperture\n      wVGate\n      wVGateClose\n      wVGateValue\n      eVGate\n      eVGateClose\n      eVGateValue\n      agScienceFoldPark\n      agAoFoldPark\n      agAcPickoffPark\n      agParkAll\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query getRotator {\n    rotator {\n      pk\n      angle\n      tracking\n    }\n  }\n',
): (typeof documents)['\n  query getRotator {\n    rotator {\n      pk\n      angle\n      tracking\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation updateRotator($pk: Int!, $angle: Float, $tracking: TrackingType) {\n    updateRotator(pk: $pk, angle: $angle, tracking: $tracking) {\n      pk\n      angle\n      tracking\n    }\n  }\n',
): (typeof documents)['\n  mutation updateRotator($pk: Int!, $angle: Float, $tracking: TrackingType) {\n    updateRotator(pk: $pk, angle: $angle, tracking: $tracking) {\n      pk\n      angle\n      tracking\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query getSlewFlags {\n    slewFlags {\n      pk\n      zeroChopThrow\n      zeroSourceOffset\n      zeroSourceDiffTrack\n      zeroMountOffset\n      zeroMountDiffTrack\n      shortcircuitTargetFilter\n      shortcircuitMountFilter\n      resetPointing\n      stopGuide\n      zeroGuideOffset\n      zeroInstrumentOffset\n      autoparkPwfs1\n      autoparkPwfs2\n      autoparkOiwfs\n      autoparkGems\n      autoparkAowfs\n    }\n  }\n',
): (typeof documents)['\n  query getSlewFlags {\n    slewFlags {\n      pk\n      zeroChopThrow\n      zeroSourceOffset\n      zeroSourceDiffTrack\n      zeroMountOffset\n      zeroMountDiffTrack\n      shortcircuitTargetFilter\n      shortcircuitMountFilter\n      resetPointing\n      stopGuide\n      zeroGuideOffset\n      zeroInstrumentOffset\n      autoparkPwfs1\n      autoparkPwfs2\n      autoparkOiwfs\n      autoparkGems\n      autoparkAowfs\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation updateSlewFlags(\n    $pk: Int!\n    $zeroChopThrow: Boolean\n    $zeroSourceOffset: Boolean\n    $zeroSourceDiffTrack: Boolean\n    $zeroMountOffset: Boolean\n    $zeroMountDiffTrack: Boolean\n    $shortcircuitTargetFilter: Boolean\n    $shortcircuitMountFilter: Boolean\n    $resetPointing: Boolean\n    $stopGuide: Boolean\n    $zeroGuideOffset: Boolean\n    $zeroInstrumentOffset: Boolean\n    $autoparkPwfs1: Boolean\n    $autoparkPwfs2: Boolean\n    $autoparkOiwfs: Boolean\n    $autoparkGems: Boolean\n    $autoparkAowfs: Boolean\n  ) {\n    updateSlewFlags(\n      pk: $pk\n      zeroChopThrow: $zeroChopThrow\n      zeroSourceOffset: $zeroSourceOffset\n      zeroSourceDiffTrack: $zeroSourceDiffTrack\n      zeroMountOffset: $zeroMountOffset\n      zeroMountDiffTrack: $zeroMountDiffTrack\n      shortcircuitTargetFilter: $shortcircuitTargetFilter\n      shortcircuitMountFilter: $shortcircuitMountFilter\n      resetPointing: $resetPointing\n      stopGuide: $stopGuide\n      zeroGuideOffset: $zeroGuideOffset\n      zeroInstrumentOffset: $zeroInstrumentOffset\n      autoparkPwfs1: $autoparkPwfs1\n      autoparkPwfs2: $autoparkPwfs2\n      autoparkOiwfs: $autoparkOiwfs\n      autoparkGems: $autoparkGems\n      autoparkAowfs: $autoparkAowfs\n    ) {\n      pk\n      zeroChopThrow\n      zeroSourceOffset\n      zeroSourceDiffTrack\n      zeroMountOffset\n      zeroMountDiffTrack\n      shortcircuitTargetFilter\n      shortcircuitMountFilter\n      resetPointing\n      stopGuide\n      zeroGuideOffset\n      zeroInstrumentOffset\n      autoparkPwfs1\n      autoparkPwfs2\n      autoparkOiwfs\n      autoparkGems\n      autoparkAowfs\n    }\n  }\n',
): (typeof documents)['\n  mutation updateSlewFlags(\n    $pk: Int!\n    $zeroChopThrow: Boolean\n    $zeroSourceOffset: Boolean\n    $zeroSourceDiffTrack: Boolean\n    $zeroMountOffset: Boolean\n    $zeroMountDiffTrack: Boolean\n    $shortcircuitTargetFilter: Boolean\n    $shortcircuitMountFilter: Boolean\n    $resetPointing: Boolean\n    $stopGuide: Boolean\n    $zeroGuideOffset: Boolean\n    $zeroInstrumentOffset: Boolean\n    $autoparkPwfs1: Boolean\n    $autoparkPwfs2: Boolean\n    $autoparkOiwfs: Boolean\n    $autoparkGems: Boolean\n    $autoparkAowfs: Boolean\n  ) {\n    updateSlewFlags(\n      pk: $pk\n      zeroChopThrow: $zeroChopThrow\n      zeroSourceOffset: $zeroSourceOffset\n      zeroSourceDiffTrack: $zeroSourceDiffTrack\n      zeroMountOffset: $zeroMountOffset\n      zeroMountDiffTrack: $zeroMountDiffTrack\n      shortcircuitTargetFilter: $shortcircuitTargetFilter\n      shortcircuitMountFilter: $shortcircuitMountFilter\n      resetPointing: $resetPointing\n      stopGuide: $stopGuide\n      zeroGuideOffset: $zeroGuideOffset\n      zeroInstrumentOffset: $zeroInstrumentOffset\n      autoparkPwfs1: $autoparkPwfs1\n      autoparkPwfs2: $autoparkPwfs2\n      autoparkOiwfs: $autoparkOiwfs\n      autoparkGems: $autoparkGems\n      autoparkAowfs: $autoparkAowfs\n    ) {\n      pk\n      zeroChopThrow\n      zeroSourceOffset\n      zeroSourceDiffTrack\n      zeroMountOffset\n      zeroMountDiffTrack\n      shortcircuitTargetFilter\n      shortcircuitMountFilter\n      resetPointing\n      stopGuide\n      zeroGuideOffset\n      zeroInstrumentOffset\n      autoparkPwfs1\n      autoparkPwfs2\n      autoparkOiwfs\n      autoparkGems\n      autoparkAowfs\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query getTargets {\n    targets {\n      pk\n      id\n      name\n      ra {\n        degrees\n        hms\n      }\n      dec {\n        degrees\n        dms\n      }\n      az {\n        degrees\n        dms\n      }\n      el {\n        degrees\n        dms\n      }\n      epoch\n      type\n      createdAt\n    }\n  }\n',
): (typeof documents)['\n  query getTargets {\n    targets {\n      pk\n      id\n      name\n      ra {\n        degrees\n        hms\n      }\n      dec {\n        degrees\n        dms\n      }\n      az {\n        degrees\n        dms\n      }\n      el {\n        degrees\n        dms\n      }\n      epoch\n      type\n      createdAt\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation updateTarget(\n    $pk: Int!\n    $id: String\n    $name: String\n    $coord1: Float\n    $coord2: Float\n    $epoch: String\n    $type: TargetType\n  ) {\n    updateTarget(pk: $pk, id: $id, name: $name, coord1: $coord1, coord2: $coord2, epoch: $epoch, type: $type) {\n      pk\n      id\n      name\n      ra {\n        degrees\n        hms\n      }\n      dec {\n        degrees\n        dms\n      }\n      az {\n        degrees\n        dms\n      }\n      el {\n        degrees\n        dms\n      }\n      epoch\n      type\n      createdAt\n    }\n  }\n',
): (typeof documents)['\n  mutation updateTarget(\n    $pk: Int!\n    $id: String\n    $name: String\n    $coord1: Float\n    $coord2: Float\n    $epoch: String\n    $type: TargetType\n  ) {\n    updateTarget(pk: $pk, id: $id, name: $name, coord1: $coord1, coord2: $coord2, epoch: $epoch, type: $type) {\n      pk\n      id\n      name\n      ra {\n        degrees\n        hms\n      }\n      dec {\n        degrees\n        dms\n      }\n      az {\n        degrees\n        dms\n      }\n      el {\n        degrees\n        dms\n      }\n      epoch\n      type\n      createdAt\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation createTarget(\n    $id: String\n    $name: String!\n    $ra: Float\n    $az: Float\n    $dec: Float\n    $el: Float\n    $epoch: String\n    $type: TargetType!\n  ) {\n    createTarget(id: $id, name: $name, ra: $ra, az: $az, dec: $dec, el: $el, epoch: $epoch, type: $type) {\n      pk\n      id\n      name\n      ra {\n        degrees\n        hms\n      }\n      dec {\n        degrees\n        dms\n      }\n      az {\n        degrees\n        dms\n      }\n      el {\n        degrees\n        dms\n      }\n      epoch\n      type\n      createdAt\n    }\n  }\n',
): (typeof documents)['\n  mutation createTarget(\n    $id: String\n    $name: String!\n    $ra: Float\n    $az: Float\n    $dec: Float\n    $el: Float\n    $epoch: String\n    $type: TargetType!\n  ) {\n    createTarget(id: $id, name: $name, ra: $ra, az: $az, dec: $dec, el: $el, epoch: $epoch, type: $type) {\n      pk\n      id\n      name\n      ra {\n        degrees\n        hms\n      }\n      dec {\n        degrees\n        dms\n      }\n      az {\n        degrees\n        dms\n      }\n      el {\n        degrees\n        dms\n      }\n      epoch\n      type\n      createdAt\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation removeAndCreateBaseTargets($targets: [TargetInput!]) {\n    removeAndCreateBaseTargets(targets: $targets) {\n      pk\n      id\n      name\n      ra {\n        degrees\n        hms\n      }\n      dec {\n        degrees\n        dms\n      }\n      az {\n        degrees\n        dms\n      }\n      el {\n        degrees\n        dms\n      }\n      epoch\n      type\n      createdAt\n    }\n  }\n',
): (typeof documents)['\n  mutation removeAndCreateBaseTargets($targets: [TargetInput!]) {\n    removeAndCreateBaseTargets(targets: $targets) {\n      pk\n      id\n      name\n      ra {\n        degrees\n        hms\n      }\n      dec {\n        degrees\n        dms\n      }\n      az {\n        degrees\n        dms\n      }\n      el {\n        degrees\n        dms\n      }\n      epoch\n      type\n      createdAt\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation removeAndCreateWfsTargets($wfs: TargetType, $targets: [TargetInput!]) {\n    removeAndCreateWfsTargets(wfs: $wfs, targets: $targets) {\n      pk\n      id\n      name\n      ra {\n        degrees\n        hms\n      }\n      dec {\n        degrees\n        dms\n      }\n      az {\n        degrees\n        dms\n      }\n      el {\n        degrees\n        dms\n      }\n      epoch\n      type\n      createdAt\n    }\n  }\n',
): (typeof documents)['\n  mutation removeAndCreateWfsTargets($wfs: TargetType, $targets: [TargetInput!]) {\n    removeAndCreateWfsTargets(wfs: $wfs, targets: $targets) {\n      pk\n      id\n      name\n      ra {\n        degrees\n        hms\n      }\n      dec {\n        degrees\n        dms\n      }\n      az {\n        degrees\n        dms\n      }\n      el {\n        degrees\n        dms\n      }\n      epoch\n      type\n      createdAt\n    }\n  }\n'];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never;
