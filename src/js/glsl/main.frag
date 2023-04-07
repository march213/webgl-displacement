precision highp float;

uniform float uTime;
uniform vec3 uColor;
uniform float uOffset;
uniform sampler2D uTexture1;
uniform sampler2D uTexture2;

varying vec2 vUv;
varying vec2 vUvMap1;
varying vec2 vUvMap2;


void main() {
  vec4 texture1 = texture2D(uTexture1, vUvMap1); 
  vec4 texture2 = texture2D(uTexture2, vUvMap2); 

  gl_FragColor = texture2;
}