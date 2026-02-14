// Tuple: [isMuted, volume, fxBypassed, ...rest]
export type MixerState = [boolean, number, boolean, ...boolean[]];

export type MixerID = 'com.elgato.mix.local' | 'com.elgato.mix.stream';

export interface WaveLinkInput {
  identifier: string;
  name: string;
  inputType: number;
  isAvailable: boolean;
  isWaveMicInput?: boolean;
  localMixer: MixerState;
  streamMixer: MixerState;
}

export interface InputMuteChangedEvent {
  identifier: string;
  mixerID: MixerID;
  value: boolean;
}

export interface InputsChangedEvent {
  inputs: WaveLinkInput[];
}

export type ConnectionState = 'connected' | 'disconnected' | 'connecting';
