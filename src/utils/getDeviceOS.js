import * as constants from '@/constants';

function formatOSRange(min, max) {
  return {min, max}
}
const appMinVersionIOS = constants.iOS_14_0;
const appMaxVersionIOS = constants.iOS_17_0_3;
// const appMinVersionMacOS = constants.macOS_11;
const appMaxVersionMacOS = constants.macOS_14;

const deviceSupport = {
  // iPhone
  [constants.iPhone_6s]: formatOSRange(appMinVersionIOS, constants.iOS_15_7_9),
  [constants.iPhone_6sPlus]: formatOSRange(appMinVersionIOS, constants.iOS_15_7_9),
  [constants.iPhone_SE_1stGen]: formatOSRange(appMinVersionIOS, constants.iOS_15_7_9),
  [constants.iPhone_7]: formatOSRange(appMinVersionIOS, constants.iOS_15_7_9),
  [constants.iPhone_7Plus]: formatOSRange(appMinVersionIOS, constants.iOS_15_7_9),
  [constants.iPhone_8]: formatOSRange(appMinVersionIOS, constants.iOS_16_7),
  [constants.iPhone_8Plus]: formatOSRange(appMinVersionIOS, constants.iOS_16_7),
  [constants.iPhone_X]: formatOSRange(appMinVersionIOS, constants.iOS_16_7),
  [constants.iPhone_XR]: formatOSRange(appMinVersionIOS, appMaxVersionIOS),
  [constants.iPhone_XS]: formatOSRange(appMinVersionIOS, appMaxVersionIOS),
  [constants.iPhone_XSMax]: formatOSRange(appMinVersionIOS, appMaxVersionIOS),
  [constants.iPhone_11]: formatOSRange(appMinVersionIOS, appMaxVersionIOS),
  [constants.iPhone_11Pro]: formatOSRange(appMinVersionIOS, appMaxVersionIOS),
  [constants.iPhone_11ProMax]: formatOSRange(appMinVersionIOS, appMaxVersionIOS),
  [constants.iPhone_SE_2ndGen]: formatOSRange(appMinVersionIOS, appMaxVersionIOS),
  [constants.iPhone_12Mini]: formatOSRange(appMinVersionIOS, appMaxVersionIOS),
  [constants.iPhone_12]: formatOSRange(appMinVersionIOS, appMaxVersionIOS),
  [constants.iPhone_12Pro]: formatOSRange(appMinVersionIOS, appMaxVersionIOS),
  [constants.iPhone_12ProMax]: formatOSRange(appMinVersionIOS, appMaxVersionIOS),
  [constants.iPhone_13Mini]: formatOSRange(appMinVersionIOS, appMaxVersionIOS),
  [constants.iPhone_13]: formatOSRange(appMinVersionIOS, appMaxVersionIOS),
  [constants.iPhone_13Pro]: formatOSRange(appMinVersionIOS, appMaxVersionIOS),
  [constants.iPhone_13ProMax]: formatOSRange(appMinVersionIOS, appMaxVersionIOS),
  [constants.iPhone_14]: formatOSRange(appMinVersionIOS, appMaxVersionIOS),
  [constants.iPhone_14Plus]: formatOSRange(appMinVersionIOS, appMaxVersionIOS),
  [constants.iPhone_14Pro]: formatOSRange(appMinVersionIOS, appMaxVersionIOS),
  [constants.iPhone_14ProMax]: formatOSRange(appMinVersionIOS, appMaxVersionIOS),
  [constants.iPhone_15]: formatOSRange(appMinVersionIOS, appMaxVersionIOS),
  [constants.iPhone_15Plus]: formatOSRange(appMinVersionIOS, appMaxVersionIOS),
  [constants.iPhone_15Pro]: formatOSRange(appMinVersionIOS, appMaxVersionIOS),
  [constants.iPhone_15ProMax]: formatOSRange(appMinVersionIOS, appMaxVersionIOS),
  // iPod
  [constants.iPodTouch_7thGen]: formatOSRange(appMinVersionIOS, constants.iOS_15_7_9),
  // iPad
  [constants.iPad_8thGen]: formatOSRange(constants.iOS_14_0, appMaxVersionIOS),
  [constants.iPad_9thGen]: formatOSRange(constants.iOS_15_0, appMaxVersionIOS),
  [constants.iPad_10thGen]: formatOSRange(constants.iOS_16_1, appMaxVersionIOS),
  [constants.iPad_mini_4thGen]: formatOSRange(appMinVersionIOS, constants.iOS_15_7_9),
  [constants.iPad_mini_5thGen]: formatOSRange(appMinVersionIOS, appMaxVersionIOS),
  [constants.iPad_mini_6thGen]: formatOSRange(constants.iOS_15_0, appMaxVersionIOS),
  [constants.iPad_air_2thGen]: formatOSRange(appMinVersionIOS, constants.iOS_15_7_9),
  [constants.iPad_air_3thGen]: formatOSRange(appMinVersionIOS, appMaxVersionIOS),
  [constants.iPad_air_4thGen]: formatOSRange(constants.iOS_14_0, appMaxVersionIOS),
  [constants.iPad_air_5thGen]: formatOSRange(constants.iOS_15_4, appMaxVersionIOS),
  [constants.iPad_Pro_1stGen_9_7]: formatOSRange(appMinVersionIOS, constants.iOS_16_7),
  [constants.iPad_Pro_1stGen_12_9]: formatOSRange(appMinVersionIOS, constants.iOS_16_7),
  [constants.iPad_Pro_2ndGen_10_5]: formatOSRange(appMinVersionIOS, appMaxVersionIOS),
  [constants.iPad_Pro_2ndGen_12_9]: formatOSRange(appMinVersionIOS, appMaxVersionIOS),
  [constants.iPad_Pro_3rdGen_11]: formatOSRange(appMinVersionIOS, appMaxVersionIOS),
  [constants.iPad_Pro_3rdGen_12_9]: formatOSRange(appMinVersionIOS, appMaxVersionIOS),
  [constants.iPad_Pro_4thGen_11]: formatOSRange(appMinVersionIOS, appMaxVersionIOS),
  [constants.iPad_Pro_4thGen_12_9]: formatOSRange(appMinVersionIOS, appMaxVersionIOS),
  [constants.iPad_Pro_5thGen_11]: formatOSRange(constants.iOS_14_5, appMaxVersionIOS),
  [constants.iPad_Pro_5thGen_12_9]: formatOSRange(constants.iOS_14_5, appMaxVersionIOS),
  [constants.iPad_Pro_6thGen_11]: formatOSRange(constants.iOS_16_1, appMaxVersionIOS),
  [constants.iPad_Pro_6thGen_12_9]: formatOSRange(constants.iOS_16_1, appMaxVersionIOS),
  // Macbook Pro
  [constants.MacbookPro_2023]: formatOSRange(constants.macOS_13, appMaxVersionMacOS),
  [constants.MacbookPro_2022]: formatOSRange(constants.macOS_12, appMaxVersionMacOS),
  [constants.MacbookPro_2021]: formatOSRange(constants.macOS_12, appMaxVersionMacOS),
  [constants.MacbookPro_2020]: formatOSRange(constants.macOS_11, appMaxVersionMacOS),
  [constants.MacbookAir_2020]: formatOSRange(constants.macOS_11, appMaxVersionMacOS),
  [constants.MacbookAir_2022]: formatOSRange(constants.macOS_12, appMaxVersionMacOS),
  [constants.MacbookAir_2023]: formatOSRange(constants.macOS_13, appMaxVersionMacOS),
  [constants.MacMini_2020]: formatOSRange(constants.macOS_11, appMaxVersionMacOS),
  [constants.MacMini_2023]: formatOSRange(constants.macOS_13, appMaxVersionMacOS),
  [constants.MacStudio_2022]: formatOSRange(constants.macOS_12, appMaxVersionMacOS),
  [constants.MacStudio_2023]: formatOSRange(constants.macOS_13, appMaxVersionMacOS),
  [constants.MacPro2023]: formatOSRange(constants.macOS_13, appMaxVersionMacOS)
}

export default function getDeviceOS(deviceType) {
  switch (deviceType) {
      case constants.deviceType_Mac:
        return getDeviceModelsByPrefix('macOS', constants);
      case constants.deviceType_iPad:
      case constants.deviceType_iPhone:
      case constants.deviceType_iPod_touch:
        return getDeviceModelsByPrefix('iOS', constants);
      default:
        return [];
  } 

}