precision highp float;

uniform float uTime;
uniform vec3 uColor;
uniform float uOffset;
uniform sampler2D uTexture1;
uniform sampler2D uTexture2;
uniform sampler2D uDisplacementTexture;

varying vec2 vUv;
varying vec2 vUvMap1;
varying vec2 vUvMap2;

const float displacementCoef = 0.3;


void main() {
  // vec4 texture1 = texture2D(uTexture1, vUvMap1); 
  // vec4 texture2 = texture2D(uTexture2, vUvMap2);
  vec4 displacementTexture = texture2D(uDisplacementTexture, vUv);

  // get displacement force based of one color canal of the image,
  // then use uOffset to control the amount of displacement
  float displacementForce1 = displacementTexture.r * uOffset * displacementCoef;
  vec2 uvDisplaced1 = vec2(vUvMap1.x + displacementForce1, vUvMap1.y + displacementForce1);
  vec4 displacedTexture1 = texture2D(uTexture1, uvDisplaced1);

  // get texture of image 2
  float displacementForce2 = displacementTexture.r * (1.0 - uOffset) * displacementCoef;
  vec2 uvDisplaced2 = vec2(vUvMap2.x - displacementForce2, vUvMap2.y - displacementForce2);
  vec4 displacedTexture2 = texture2D(uTexture2, uvDisplaced2);

  // texture1 transitions to texture2 based on uOffset
  gl_FragColor = (displacedTexture1 * (1.0 - uOffset) + displacedTexture2 * uOffset);
}