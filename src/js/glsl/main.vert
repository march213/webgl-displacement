attribute vec2 uv;
attribute vec2 position;

varying vec2 vUv;
varying vec2 vUvMap1;
varying vec2 vUvMap2;

uniform vec2 uvRepeat1;
uniform vec2 uvOffset1;
uniform vec2 uvRepeat2;
uniform vec2 uvOffset2;

void main() {
  vUv = uv;

  // first image
  vUvMap1 = uv;
  // Get the backgroun cover effect in shader
  vUvMap1 *= uvRepeat1;
  vUvMap1 += uvOffset1;

  // second image
  vUvMap2 = uv;
  // Get the backgroun cover effect in shader
  vUvMap2 *= uvRepeat2;
  vUvMap2 += uvOffset2;

  gl_Position = vec4(position, 0, 1);
}
