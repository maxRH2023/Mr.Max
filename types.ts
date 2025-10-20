/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import {Video} from '@google/genai';

export enum AppState {
  IDLE,
  LOADING,
  SUCCESS,
  ERROR,
}

export enum VeoModel {
  VEO_FAST = 'veo-3.1-fast-generate-preview',
  VEO = 'veo-3.1-generate-preview',
}

export enum AspectRatio {
  LANDSCAPE = '16:9',
  PORTRAIT = '9:16',
}

export enum Resolution {
  P720 = '720p',
  P1080 = '1080p',
}

export enum GenerationMode {
  TEXT_TO_VIDEO = 'Text to Video',
  FRAMES_TO_VIDEO = 'Frames to Video',
  REFERENCES_TO_VIDEO = 'References to Video',
  EXTEND_VIDEO = 'Extend Video',
}

export enum VideoStyle {
  NONE = 'None',
  CINEMATIC = 'Cinematic',
  VINTAGE = 'Vintage',
  BLACK_AND_WHITE = 'Black and White',
  DREAMY = 'Dreamy',
  ANIME = 'Anime',
  CLAYMATION = 'Claymation',
}

export const videoStylePrompts: Record<VideoStyle, string> = {
  [VideoStyle.NONE]: '',
  [VideoStyle.CINEMATIC]:
    ', cinematic style, high contrast, dramatic lighting, high quality, sharp focus',
  [VideoStyle.VINTAGE]:
    ', vintage film look, 8mm, grainy, scratches, sepia tones, flickering light',
  [VideoStyle.BLACK_AND_WHITE]:
    ', black and white, monochrome, high contrast, noir style',
  [VideoStyle.DREAMY]:
    ', dreamy, ethereal, soft focus, pastel colors, glowing, magical',
  [VideoStyle.ANIME]:
    ', anime style, cel shaded, vibrant colors, hand-drawn look',
  [VideoStyle.CLAYMATION]:
    ', claymation style, stop motion animation, handcrafted look, playful',
};

export enum CssFilter {
  NONE = 'None',
  VINTAGE = 'Vintage',
  BLACK_AND_WHITE = 'B&W',
  SEPIA = 'Sepia',
  INVERT = 'Invert',
  SATURATE = 'Saturate',
}

export const cssFilterValues: Record<CssFilter, string> = {
  [CssFilter.NONE]: 'none',
  [CssFilter.VINTAGE]: 'sepia(0.6) contrast(1.1) brightness(0.9) grayscale(0.2)',
  [CssFilter.BLACK_AND_WHITE]: 'grayscale(1) contrast(1.1)',
  [CssFilter.SEPIA]: 'sepia(1)',
  [CssFilter.INVERT]: 'invert(1)',
  [CssFilter.SATURATE]: 'saturate(2)',
};

export interface ImageFile {
  file: File;
  base64: string;
}

export interface VideoFile {
  file: File;
  base64: string;
}

export interface GenerateVideoParams {
  prompt: string;
  model: VeoModel;
  aspectRatio: AspectRatio;
  resolution: Resolution;
  mode: GenerationMode;
  videoStyle?: VideoStyle;
  startFrame?: ImageFile | null;
  endFrame?: ImageFile | null;
  referenceImages?: ImageFile[];
  styleImage?: ImageFile | null;
  inputVideo?: VideoFile | null;
  inputVideoObject?: Video | null;
  isLooping?: boolean;
}
