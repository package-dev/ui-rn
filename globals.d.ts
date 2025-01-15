declare module '*.svg' {
  const content: string;
  export default content;
}

export class Log {
  static e: (...message: any[]) => void;
  static e1: (...message: any[]) => void;
  static d: (...message: any[]) => void;
  static d1: (...message: any[]) => void;
  static g: (...message: any[]) => void;
  static g1: (...message: any[]) => void;
  static y: (...message: any[]) => void;
  static y1: (...message: any[]) => void;
  static format: (...message: any[]) => void;
}