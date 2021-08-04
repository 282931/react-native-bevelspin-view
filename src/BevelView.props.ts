import { StyleProp, ViewStyle } from 'react-native';

export interface BevelViewProps extends ViewStyle {
  /**
   * Children components.
   */
  children?: React.ReactNode;
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>;

  /**
   * Degress of the horizontal surface and view default is 30 deg
   */
  bevelDeg?: number;
  /**
   * The time of spin a circle,if duration = 0 not spin
   */
  duration?: number;
  /**
   * The time to dealy to spin
   */
  delay?: number;
  /**
   * default transform perspective property
   */
  perspective?: number;
}
