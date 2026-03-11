import { Platform } from 'react-native';

export type AppPlatform = 'web' | 'mobile';

export const defaultPlatform: AppPlatform =
    Platform.OS === 'web' ? 'web' : 'mobile';
