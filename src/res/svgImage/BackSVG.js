import * as React from "react";
import { SvgXml } from "react-native-svg";

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" width="23.207" height="17.414" viewBox="0 0 23.207 17.414">
  <g id="Group_72" data-name="Group 72" transform="translate(-29.793 -56.793)">
    <line id="Line_43" data-name="Line 43" x2="22" transform="translate(30.5 65.5)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="1"/>
    <line id="Line_44" data-name="Line 44" x1="8" y2="8" transform="translate(30.5 57.5)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="1"/>
    <line id="Line_45" data-name="Line 45" x1="8" y1="8" transform="translate(30.5 65.5)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="1"/>
  </g>
</svg>
`;

export default () => <SvgXml xml={xml} width="100%" height="100%" />;
