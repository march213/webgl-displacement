precision highp float;
uniform float uTime;
uniform vec3 uColor;
uniform float uOffset;
varying vec2 vUv;
uniform sampler2D uTexture1;

void main() {
  gl_FragColor = texture2D(uTexture1, vUv);
}