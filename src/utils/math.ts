export function lerp(
  startValue: number,
  endValue: number,
  lerpAmount: number
): number {
  const smoothedLerpAmount = (1 - Math.cos(lerpAmount * Math.PI)) / 2;
  const easedLerpAmount =
    smoothedLerpAmount * smoothedLerpAmount * (3 - 2 * smoothedLerpAmount);
  const interpolatedValue =
    startValue * (1 - easedLerpAmount) + endValue * easedLerpAmount;
  return interpolatedValue;
}
