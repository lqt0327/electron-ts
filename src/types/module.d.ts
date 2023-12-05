declare module 'file-type' {
  export function fileTypeFromFile(filePath: string): Promise
}

declare module 'downloadjs';

declare module 'screenCapture' {
  export function captureScreen(x: number, y: number, width: number, height: number): int;
}