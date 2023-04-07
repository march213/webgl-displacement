attribute vec2 uv;
attribute vec2 position;

varying vec2 vUv;
varying vec2 vUvMap1;

uniform vec2 uvRepeat1;
uniform vec2 uvOffset1;

void main() {
  vUv = uv;

  vUvMap1 = uv;
  // Get the backgroun cover effect in shader
  vUvMap1 *= uvRepeat1;
  vUvMap1 += uvOffset1;

  gl_Position = vec4(position, 0, 1);
}
