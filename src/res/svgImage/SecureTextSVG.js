import * as React from "react";
import { SvgXml } from "react-native-svg";

const xml = `
<svg height="512pt" fill="#808080" viewBox="0 -63 512.00084 512" width="512pt" xmlns="http://www.w3.org/2000/svg"><path d="m256.152344 385.945312c-62.21875 0-119.355469-22.378906-169.820313-66.511718-41.078125-35.921875-67.402343-77.890625-79.4375-99.710938-9.265625-16.796875-9.1875-36.8125.210938-53.546875 12.238281-21.789062 38.910156-63.707031 80.039062-99.609375 50.609375-44.171875 107.472657-66.566406 169.007813-66.566406 61.558594 0 118.402344 22.414062 168.941406 66.617188 41.070312 35.914062 67.65625 77.839843 79.847656 99.632812 9.335938 16.6875 9.417969 36.648438.210938 53.398438-5.558594 10.117187-14.871094 25.820312-27.671875 43.179687-6.550781 8.890625-19.070313 10.78125-27.960938 4.230469-8.890625-6.554688-10.78125-19.074219-4.230469-27.964844 11.496094-15.589844 19.835938-29.652344 24.8125-38.707031 2.515626-4.582031 2.492188-10.042969-.0625-14.609375-24.523437-43.832032-94.453124-145.785156-213.886718-145.785156-119.421875 0-189.5625 101.9375-214.175782 145.765624-2.570312 4.578126-2.59375 10.054688-.0625 14.644532 24.136719 43.761718 93.335938 145.542968 214.238282 145.542968 44.515625 0 86.320312-13.914062 124.253906-41.359374 8.949219-6.472657 21.449219-4.464844 27.921875 4.480468 6.476563 8.949219 4.46875 21.449219-4.476563 27.925782-44.898437 32.480468-94.59375 48.953124-147.699218 48.953124zm117.832031-192.972656c0-65.054687-52.925781-117.980468-117.980469-117.980468-65.054687 0-117.976562 52.925781-117.976562 117.980468 0 65.054688 52.925781 117.976563 117.976562 117.976563 65.054688 0 117.980469-52.921875 117.980469-117.976563zm-39.992187 0c0 43-34.984376 77.984375-77.988282 77.984375-43 0-77.984375-34.984375-77.984375-77.984375s34.984375-77.984375 77.984375-77.984375c43.003906 0 77.988282 34.984375 77.988282 77.984375zm-55.558594 5.429688c-15.335938-1.027344-27.5625-13.847656-27.917969-29.214844-.003906-.125-.007813-.253906-.007813-.378906-.09375-8.730469-9.757812-13.824219-16.976562-8.914063-11.378906 7.742188-18.554688 21.195313-17.398438 36.238281 1.5 19.472657 17.238282 35.214844 36.710938 36.710938 15.042969 1.15625 28.496094-6.019531 36.238281-17.394531 4.90625-7.214844-.175781-16.886719-8.902343-16.980469-.578126-.003906-1.160157-.027344-1.746094-.066406zm0 0"/></svg>`;

export default () => <SvgXml xml={xml} width="100%" height="100%" />;
