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
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "\n  subscription acquisitionAdjustmentState {\n    acquisitionAdjustmentState {\n      offset {\n        p {\n          arcseconds\n        }\n        q {\n          arcseconds\n        }\n      }\n      ipa {\n        degrees\n      }\n      iaa {\n        degrees\n      }\n      command\n    }\n  }\n": typeof types.AcquisitionAdjustmentStateDocument,
    "\n  mutation acquisitionAdjustment($input: AcquisitionAdjustmentInput!) {\n    acquisitionAdjustment(adjustment: $input) {\n      result\n      msg\n    }\n  }\n": typeof types.AcquisitionAdjustmentDocument,
    "\n  mutation acObserve($period: TimeSpanInput!) {\n    acObserve(period: $period) {\n      result\n      msg\n    }\n  }\n": typeof types.AcObserveDocument,
    "\n  mutation acStopObserve {\n    acStopObserve {\n      result\n      msg\n    }\n  }\n": typeof types.AcStopObserveDocument,
    "\n  mutation runSlew($slewOptions: SlewOptionsInput!, $config: TcsConfigInput!, $obsId: ObservationId) {\n    slew(slewOptions: $slewOptions, config: $config, obsId: $obsId) {\n      result\n    }\n  }\n": typeof types.RunSlewDocument,
    "\n  subscription guidersQualityValues {\n    guidersQualityValues {\n      pwfs1 {\n        flux\n        centroidDetected\n      }\n      pwfs2 {\n        flux\n        centroidDetected\n      }\n      oiwfs {\n        flux\n        centroidDetected\n      }\n    }\n  }\n": typeof types.GuidersQualityValuesDocument,
    "\n  subscription guideState {\n    guideState {\n      m2Inputs\n      m2Coma\n      m1Input\n      mountOffload\n      p1Integrating\n      p2Integrating\n      oiIntegrating\n      acIntegrating\n    }\n  }\n": typeof types.GuideStateDocument,
    "\n  query getGuideState {\n    guideState {\n      m2Inputs\n      m2Coma\n      m1Input\n      mountOffload\n      p1Integrating\n      p2Integrating\n      oiIntegrating\n      acIntegrating\n    }\n  }\n": typeof types.GetGuideStateDocument,
    "\n  mutation guideEnable($config: GuideConfigurationInput!) {\n    guideEnable(config: $config) {\n      result\n      msg\n    }\n  }\n": typeof types.GuideEnableDocument,
    "\n  mutation guideDisable {\n    guideDisable {\n      result\n      msg\n    }\n  }\n": typeof types.GuideDisableDocument,
    "\n  mutation lightpathConfig($from: LightSource!, $to: LightSink!) {\n    lightpathConfig(from: $from, to: $to) {\n      result\n      msg\n    }\n  }\n": typeof types.LightpathConfigDocument,
    "\n  subscription logMessage {\n    logMessage {\n      timestamp\n      level\n      thread\n      message\n    }\n  }\n": typeof types.LogMessageDocument,
    "\n  query getNavigateState {\n    navigateState {\n      onSwappedTarget\n    }\n  }\n": typeof types.GetNavigateStateDocument,
    "\n  subscription navigateStates {\n    navigateState {\n      onSwappedTarget\n    }\n  }\n": typeof types.NavigateStatesDocument,
    "\n  mutation swapTarget($swapConfig: SwapConfigInput!) {\n    swapTarget(swapConfig: $swapConfig) {\n      result\n      msg\n    }\n  }\n": typeof types.SwapTargetDocument,
    "\n  mutation restoreTarget($config: TcsConfigInput!) {\n    restoreTarget(config: $config) {\n      result\n      msg\n    }\n  }\n": typeof types.RestoreTargetDocument,
    "\n  query getTelescopeState {\n    telescopeState {\n      mount {\n        parked\n        follow\n      }\n      scs {\n        parked\n        follow\n      }\n      crcs {\n        parked\n        follow\n      }\n      pwfs1 {\n        parked\n        follow\n      }\n      pwfs2 {\n        parked\n        follow\n      }\n      oiwfs {\n        parked\n        follow\n      }\n    }\n  }\n": typeof types.GetTelescopeStateDocument,
    "\n  subscription telescopeStates {\n    telescopeState {\n      mount {\n        parked\n        follow\n      }\n      scs {\n        parked\n        follow\n      }\n      crcs {\n        parked\n        follow\n      }\n      pwfs1 {\n        parked\n        follow\n      }\n      pwfs2 {\n        parked\n        follow\n      }\n      oiwfs {\n        parked\n        follow\n      }\n    }\n  }\n": typeof types.TelescopeStatesDocument,
    "\n  query version {\n    serverVersion\n  }\n": typeof types.VersionDocument,
    "\n  mutation oiwfsObserve($period: TimeSpanInput!) {\n    oiwfsObserve(period: $period) {\n      result\n      msg\n    }\n  }\n": typeof types.OiwfsObserveDocument,
    "\n  mutation oiwfsStopObserve {\n    oiwfsStopObserve {\n      result\n      msg\n    }\n  }\n": typeof types.OiwfsStopObserveDocument,
    "\n  mutation changeMountState($enable: Boolean!) {\n    mountFollow(enable: $enable) {\n      result\n      msg\n    }\n  }\n": typeof types.ChangeMountStateDocument,
    "\n  mutation changeRotatorState($enable: Boolean!) {\n    rotatorFollow(enable: $enable) {\n      result\n      msg\n    }\n  }\n": typeof types.ChangeRotatorStateDocument,
    "\n  mutation changeScsState($enable: Boolean!) {\n    scsFollow(enable: $enable) {\n      result\n      msg\n    }\n  }\n": typeof types.ChangeScsStateDocument,
    "\n  mutation changeOiwfsState($enable: Boolean!) {\n    oiwfsFollow(enable: $enable) {\n      result\n      msg\n    }\n  }\n": typeof types.ChangeOiwfsStateDocument,
    "\n  mutation mountPark {\n    mountPark {\n      result\n      msg\n    }\n  }\n": typeof types.MountParkDocument,
    "\n  mutation rotatorPark {\n    rotatorPark {\n      result\n      msg\n    }\n  }\n": typeof types.RotatorParkDocument,
    "\n  mutation oiwfsPark {\n    oiwfsPark {\n      result\n      msg\n    }\n  }\n": typeof types.OiwfsParkDocument,
};
const documents: Documents = {
    "\n  subscription acquisitionAdjustmentState {\n    acquisitionAdjustmentState {\n      offset {\n        p {\n          arcseconds\n        }\n        q {\n          arcseconds\n        }\n      }\n      ipa {\n        degrees\n      }\n      iaa {\n        degrees\n      }\n      command\n    }\n  }\n": types.AcquisitionAdjustmentStateDocument,
    "\n  mutation acquisitionAdjustment($input: AcquisitionAdjustmentInput!) {\n    acquisitionAdjustment(adjustment: $input) {\n      result\n      msg\n    }\n  }\n": types.AcquisitionAdjustmentDocument,
    "\n  mutation acObserve($period: TimeSpanInput!) {\n    acObserve(period: $period) {\n      result\n      msg\n    }\n  }\n": types.AcObserveDocument,
    "\n  mutation acStopObserve {\n    acStopObserve {\n      result\n      msg\n    }\n  }\n": types.AcStopObserveDocument,
    "\n  mutation runSlew($slewOptions: SlewOptionsInput!, $config: TcsConfigInput!, $obsId: ObservationId) {\n    slew(slewOptions: $slewOptions, config: $config, obsId: $obsId) {\n      result\n    }\n  }\n": types.RunSlewDocument,
    "\n  subscription guidersQualityValues {\n    guidersQualityValues {\n      pwfs1 {\n        flux\n        centroidDetected\n      }\n      pwfs2 {\n        flux\n        centroidDetected\n      }\n      oiwfs {\n        flux\n        centroidDetected\n      }\n    }\n  }\n": types.GuidersQualityValuesDocument,
    "\n  subscription guideState {\n    guideState {\n      m2Inputs\n      m2Coma\n      m1Input\n      mountOffload\n      p1Integrating\n      p2Integrating\n      oiIntegrating\n      acIntegrating\n    }\n  }\n": types.GuideStateDocument,
    "\n  query getGuideState {\n    guideState {\n      m2Inputs\n      m2Coma\n      m1Input\n      mountOffload\n      p1Integrating\n      p2Integrating\n      oiIntegrating\n      acIntegrating\n    }\n  }\n": types.GetGuideStateDocument,
    "\n  mutation guideEnable($config: GuideConfigurationInput!) {\n    guideEnable(config: $config) {\n      result\n      msg\n    }\n  }\n": types.GuideEnableDocument,
    "\n  mutation guideDisable {\n    guideDisable {\n      result\n      msg\n    }\n  }\n": types.GuideDisableDocument,
    "\n  mutation lightpathConfig($from: LightSource!, $to: LightSink!) {\n    lightpathConfig(from: $from, to: $to) {\n      result\n      msg\n    }\n  }\n": types.LightpathConfigDocument,
    "\n  subscription logMessage {\n    logMessage {\n      timestamp\n      level\n      thread\n      message\n    }\n  }\n": types.LogMessageDocument,
    "\n  query getNavigateState {\n    navigateState {\n      onSwappedTarget\n    }\n  }\n": types.GetNavigateStateDocument,
    "\n  subscription navigateStates {\n    navigateState {\n      onSwappedTarget\n    }\n  }\n": types.NavigateStatesDocument,
    "\n  mutation swapTarget($swapConfig: SwapConfigInput!) {\n    swapTarget(swapConfig: $swapConfig) {\n      result\n      msg\n    }\n  }\n": types.SwapTargetDocument,
    "\n  mutation restoreTarget($config: TcsConfigInput!) {\n    restoreTarget(config: $config) {\n      result\n      msg\n    }\n  }\n": types.RestoreTargetDocument,
    "\n  query getTelescopeState {\n    telescopeState {\n      mount {\n        parked\n        follow\n      }\n      scs {\n        parked\n        follow\n      }\n      crcs {\n        parked\n        follow\n      }\n      pwfs1 {\n        parked\n        follow\n      }\n      pwfs2 {\n        parked\n        follow\n      }\n      oiwfs {\n        parked\n        follow\n      }\n    }\n  }\n": types.GetTelescopeStateDocument,
    "\n  subscription telescopeStates {\n    telescopeState {\n      mount {\n        parked\n        follow\n      }\n      scs {\n        parked\n        follow\n      }\n      crcs {\n        parked\n        follow\n      }\n      pwfs1 {\n        parked\n        follow\n      }\n      pwfs2 {\n        parked\n        follow\n      }\n      oiwfs {\n        parked\n        follow\n      }\n    }\n  }\n": types.TelescopeStatesDocument,
    "\n  query version {\n    serverVersion\n  }\n": types.VersionDocument,
    "\n  mutation oiwfsObserve($period: TimeSpanInput!) {\n    oiwfsObserve(period: $period) {\n      result\n      msg\n    }\n  }\n": types.OiwfsObserveDocument,
    "\n  mutation oiwfsStopObserve {\n    oiwfsStopObserve {\n      result\n      msg\n    }\n  }\n": types.OiwfsStopObserveDocument,
    "\n  mutation changeMountState($enable: Boolean!) {\n    mountFollow(enable: $enable) {\n      result\n      msg\n    }\n  }\n": types.ChangeMountStateDocument,
    "\n  mutation changeRotatorState($enable: Boolean!) {\n    rotatorFollow(enable: $enable) {\n      result\n      msg\n    }\n  }\n": types.ChangeRotatorStateDocument,
    "\n  mutation changeScsState($enable: Boolean!) {\n    scsFollow(enable: $enable) {\n      result\n      msg\n    }\n  }\n": types.ChangeScsStateDocument,
    "\n  mutation changeOiwfsState($enable: Boolean!) {\n    oiwfsFollow(enable: $enable) {\n      result\n      msg\n    }\n  }\n": types.ChangeOiwfsStateDocument,
    "\n  mutation mountPark {\n    mountPark {\n      result\n      msg\n    }\n  }\n": types.MountParkDocument,
    "\n  mutation rotatorPark {\n    rotatorPark {\n      result\n      msg\n    }\n  }\n": types.RotatorParkDocument,
    "\n  mutation oiwfsPark {\n    oiwfsPark {\n      result\n      msg\n    }\n  }\n": types.OiwfsParkDocument,
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
export function graphql(source: "\n  subscription acquisitionAdjustmentState {\n    acquisitionAdjustmentState {\n      offset {\n        p {\n          arcseconds\n        }\n        q {\n          arcseconds\n        }\n      }\n      ipa {\n        degrees\n      }\n      iaa {\n        degrees\n      }\n      command\n    }\n  }\n"): (typeof documents)["\n  subscription acquisitionAdjustmentState {\n    acquisitionAdjustmentState {\n      offset {\n        p {\n          arcseconds\n        }\n        q {\n          arcseconds\n        }\n      }\n      ipa {\n        degrees\n      }\n      iaa {\n        degrees\n      }\n      command\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation acquisitionAdjustment($input: AcquisitionAdjustmentInput!) {\n    acquisitionAdjustment(adjustment: $input) {\n      result\n      msg\n    }\n  }\n"): (typeof documents)["\n  mutation acquisitionAdjustment($input: AcquisitionAdjustmentInput!) {\n    acquisitionAdjustment(adjustment: $input) {\n      result\n      msg\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation acObserve($period: TimeSpanInput!) {\n    acObserve(period: $period) {\n      result\n      msg\n    }\n  }\n"): (typeof documents)["\n  mutation acObserve($period: TimeSpanInput!) {\n    acObserve(period: $period) {\n      result\n      msg\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation acStopObserve {\n    acStopObserve {\n      result\n      msg\n    }\n  }\n"): (typeof documents)["\n  mutation acStopObserve {\n    acStopObserve {\n      result\n      msg\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation runSlew($slewOptions: SlewOptionsInput!, $config: TcsConfigInput!, $obsId: ObservationId) {\n    slew(slewOptions: $slewOptions, config: $config, obsId: $obsId) {\n      result\n    }\n  }\n"): (typeof documents)["\n  mutation runSlew($slewOptions: SlewOptionsInput!, $config: TcsConfigInput!, $obsId: ObservationId) {\n    slew(slewOptions: $slewOptions, config: $config, obsId: $obsId) {\n      result\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  subscription guidersQualityValues {\n    guidersQualityValues {\n      pwfs1 {\n        flux\n        centroidDetected\n      }\n      pwfs2 {\n        flux\n        centroidDetected\n      }\n      oiwfs {\n        flux\n        centroidDetected\n      }\n    }\n  }\n"): (typeof documents)["\n  subscription guidersQualityValues {\n    guidersQualityValues {\n      pwfs1 {\n        flux\n        centroidDetected\n      }\n      pwfs2 {\n        flux\n        centroidDetected\n      }\n      oiwfs {\n        flux\n        centroidDetected\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  subscription guideState {\n    guideState {\n      m2Inputs\n      m2Coma\n      m1Input\n      mountOffload\n      p1Integrating\n      p2Integrating\n      oiIntegrating\n      acIntegrating\n    }\n  }\n"): (typeof documents)["\n  subscription guideState {\n    guideState {\n      m2Inputs\n      m2Coma\n      m1Input\n      mountOffload\n      p1Integrating\n      p2Integrating\n      oiIntegrating\n      acIntegrating\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getGuideState {\n    guideState {\n      m2Inputs\n      m2Coma\n      m1Input\n      mountOffload\n      p1Integrating\n      p2Integrating\n      oiIntegrating\n      acIntegrating\n    }\n  }\n"): (typeof documents)["\n  query getGuideState {\n    guideState {\n      m2Inputs\n      m2Coma\n      m1Input\n      mountOffload\n      p1Integrating\n      p2Integrating\n      oiIntegrating\n      acIntegrating\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation guideEnable($config: GuideConfigurationInput!) {\n    guideEnable(config: $config) {\n      result\n      msg\n    }\n  }\n"): (typeof documents)["\n  mutation guideEnable($config: GuideConfigurationInput!) {\n    guideEnable(config: $config) {\n      result\n      msg\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation guideDisable {\n    guideDisable {\n      result\n      msg\n    }\n  }\n"): (typeof documents)["\n  mutation guideDisable {\n    guideDisable {\n      result\n      msg\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation lightpathConfig($from: LightSource!, $to: LightSink!) {\n    lightpathConfig(from: $from, to: $to) {\n      result\n      msg\n    }\n  }\n"): (typeof documents)["\n  mutation lightpathConfig($from: LightSource!, $to: LightSink!) {\n    lightpathConfig(from: $from, to: $to) {\n      result\n      msg\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  subscription logMessage {\n    logMessage {\n      timestamp\n      level\n      thread\n      message\n    }\n  }\n"): (typeof documents)["\n  subscription logMessage {\n    logMessage {\n      timestamp\n      level\n      thread\n      message\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getNavigateState {\n    navigateState {\n      onSwappedTarget\n    }\n  }\n"): (typeof documents)["\n  query getNavigateState {\n    navigateState {\n      onSwappedTarget\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  subscription navigateStates {\n    navigateState {\n      onSwappedTarget\n    }\n  }\n"): (typeof documents)["\n  subscription navigateStates {\n    navigateState {\n      onSwappedTarget\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation swapTarget($swapConfig: SwapConfigInput!) {\n    swapTarget(swapConfig: $swapConfig) {\n      result\n      msg\n    }\n  }\n"): (typeof documents)["\n  mutation swapTarget($swapConfig: SwapConfigInput!) {\n    swapTarget(swapConfig: $swapConfig) {\n      result\n      msg\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation restoreTarget($config: TcsConfigInput!) {\n    restoreTarget(config: $config) {\n      result\n      msg\n    }\n  }\n"): (typeof documents)["\n  mutation restoreTarget($config: TcsConfigInput!) {\n    restoreTarget(config: $config) {\n      result\n      msg\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getTelescopeState {\n    telescopeState {\n      mount {\n        parked\n        follow\n      }\n      scs {\n        parked\n        follow\n      }\n      crcs {\n        parked\n        follow\n      }\n      pwfs1 {\n        parked\n        follow\n      }\n      pwfs2 {\n        parked\n        follow\n      }\n      oiwfs {\n        parked\n        follow\n      }\n    }\n  }\n"): (typeof documents)["\n  query getTelescopeState {\n    telescopeState {\n      mount {\n        parked\n        follow\n      }\n      scs {\n        parked\n        follow\n      }\n      crcs {\n        parked\n        follow\n      }\n      pwfs1 {\n        parked\n        follow\n      }\n      pwfs2 {\n        parked\n        follow\n      }\n      oiwfs {\n        parked\n        follow\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  subscription telescopeStates {\n    telescopeState {\n      mount {\n        parked\n        follow\n      }\n      scs {\n        parked\n        follow\n      }\n      crcs {\n        parked\n        follow\n      }\n      pwfs1 {\n        parked\n        follow\n      }\n      pwfs2 {\n        parked\n        follow\n      }\n      oiwfs {\n        parked\n        follow\n      }\n    }\n  }\n"): (typeof documents)["\n  subscription telescopeStates {\n    telescopeState {\n      mount {\n        parked\n        follow\n      }\n      scs {\n        parked\n        follow\n      }\n      crcs {\n        parked\n        follow\n      }\n      pwfs1 {\n        parked\n        follow\n      }\n      pwfs2 {\n        parked\n        follow\n      }\n      oiwfs {\n        parked\n        follow\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query version {\n    serverVersion\n  }\n"): (typeof documents)["\n  query version {\n    serverVersion\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation oiwfsObserve($period: TimeSpanInput!) {\n    oiwfsObserve(period: $period) {\n      result\n      msg\n    }\n  }\n"): (typeof documents)["\n  mutation oiwfsObserve($period: TimeSpanInput!) {\n    oiwfsObserve(period: $period) {\n      result\n      msg\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation oiwfsStopObserve {\n    oiwfsStopObserve {\n      result\n      msg\n    }\n  }\n"): (typeof documents)["\n  mutation oiwfsStopObserve {\n    oiwfsStopObserve {\n      result\n      msg\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation changeMountState($enable: Boolean!) {\n    mountFollow(enable: $enable) {\n      result\n      msg\n    }\n  }\n"): (typeof documents)["\n  mutation changeMountState($enable: Boolean!) {\n    mountFollow(enable: $enable) {\n      result\n      msg\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation changeRotatorState($enable: Boolean!) {\n    rotatorFollow(enable: $enable) {\n      result\n      msg\n    }\n  }\n"): (typeof documents)["\n  mutation changeRotatorState($enable: Boolean!) {\n    rotatorFollow(enable: $enable) {\n      result\n      msg\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation changeScsState($enable: Boolean!) {\n    scsFollow(enable: $enable) {\n      result\n      msg\n    }\n  }\n"): (typeof documents)["\n  mutation changeScsState($enable: Boolean!) {\n    scsFollow(enable: $enable) {\n      result\n      msg\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation changeOiwfsState($enable: Boolean!) {\n    oiwfsFollow(enable: $enable) {\n      result\n      msg\n    }\n  }\n"): (typeof documents)["\n  mutation changeOiwfsState($enable: Boolean!) {\n    oiwfsFollow(enable: $enable) {\n      result\n      msg\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation mountPark {\n    mountPark {\n      result\n      msg\n    }\n  }\n"): (typeof documents)["\n  mutation mountPark {\n    mountPark {\n      result\n      msg\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation rotatorPark {\n    rotatorPark {\n      result\n      msg\n    }\n  }\n"): (typeof documents)["\n  mutation rotatorPark {\n    rotatorPark {\n      result\n      msg\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation oiwfsPark {\n    oiwfsPark {\n      result\n      msg\n    }\n  }\n"): (typeof documents)["\n  mutation oiwfsPark {\n    oiwfsPark {\n      result\n      msg\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;