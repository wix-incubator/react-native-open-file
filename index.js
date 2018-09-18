import {NativeModules, Platform} from 'react-native';

const open = Platform.OS === 'ios' ? NativeModules.RNDocumentInteractionController.open : () => true

export default {
  open
}
