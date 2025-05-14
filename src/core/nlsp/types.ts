/**
 * Type definitions for the NLSP (Natural Language Song Production) module
 */

export interface NLSPConfig {
  /** Model configuration for language processing */
  modelConfig: {
    /** Type of language model to use */
    modelType: 'roberta' | 't5';
    /** Model checkpoint or version */
    modelVersion: string;
    /** Temperature for generation */
    temperature: number;
  };

  /** Audio generation settings */
  audioConfig: {
    /** Sample rate in Hz */
    sampleRate: number;
    /** Number of channels */
    channels: number;
    /** Bit depth */
    bitDepth: number;
  };

  /** Voice synthesis parameters */
  voiceConfig: {
    /** Voice model type */
    modelType: string;
    /** Voice characteristics */
    characteristics: {
      /** Voice pitch adjustment */
      pitch: number;
      /** Voice timbre characteristics */
      timbre: string;
      /** Voice style (e.g., 'ballad', 'rock') */
      style: string;
    };
  };
}

export interface MusicAttributes {
  /** Musical genre */
  genre: string;
  /** Emotional mood */
  mood: string;
  /** Tempo in BPM */
  tempo: number;
  /** Key signature */
  key: string;
  /** Time signature */
  timeSignature: string;
  /** Instrumentation preferences */
  instruments: string[];
}