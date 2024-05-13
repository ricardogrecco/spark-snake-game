declare module "use-sound" {
  export default function useSound(
    sound: any,
    options?: {
      volume?: number;
      playbackRate?: number;
      soundEnabled?: boolean;
      interrupt?: boolean;
      onend?: () => void;
      onload?: () => void;
      onloaderror?: (error: Error) => void;
    }
  ): any;
}
