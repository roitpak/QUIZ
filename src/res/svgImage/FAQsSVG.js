import * as React from "react";
import { SvgXml } from "react-native-svg";

const xml = `
<svg height="512" fill="#FF660D" viewBox="0 0 56 56" width="512" xmlns="http://www.w3.org/2000/svg"><g id="011---Question-Answer-Question"><path id="Shape" d="m39.38 25h3.24l-1.62-4.21z"/><path id="Shape" d="m54.93 14h-27.86c-.5907162.0005513-1.0694487.4792838-1.07 1.07v13.93h2.93c1.6930086.0060338 3.0639662 1.3769914 3.07 3.07v3.93h13.47c.481 0 .039-.228 7.53 5.51v-4.51c0-.5522847.4477153-1 1-1h.93c.5907162-.0005513 1.0694487-.4792838 1.07-1.07v-19.86c-.0005513-.5907162-.4792838-1.0694487-1.07-1.07zm-8.57 17.93c-.2465006.0975078-.5218091.0920857-.7642792-.0150523-.2424702-.107138-.4318452-.3070411-.5257208-.5549477l-1.68-4.36h-4.78l-1.68 4.36c-.1090661.3587945-.4097051.6264106-.778718.6931818s-.7443669-.0785271-.9722455-.3763531c-.2278785-.2978259-.2699742-.6981135-.1090365-1.0368287l5-13c.1508496-.38168.5195914-.6324405.93-.6324405s.7791504.2507605.93.6324405l5 13c.197185.5135854-.0575069 1.0899933-.57 1.29z"/><path id="Shape" d="m0 48.93c.0005513.5907162.47928382 1.0694487 1.07 1.07h.93c.55228475 0 1 .4477153 1 1v4.5c7.205-5.508 7.029-5.5 7.53-5.5h18.4c.5907162-.0005513 1.0694487-.4792838 1.07-1.07v-16.86c-.0005513-.5907162-.4792838-1.0694487-1.07-1.07h-27.86c-.59071618.0005513-1.0694487.4792838-1.07 1.07zm14-1.93c-.5522847 0-1-.4477153-1-1s.4477153-1 1-1 1 .4477153 1 1-.4477153 1-1 1zm0-14c2.0098387.0057389 3.7033294 1.5019627 3.9566732 3.4957785s-1.0121382 3.8660208-2.9566732 4.3742215v1.13c0 .5522847-.4477153 1-1 1s-1-.4477153-1-1v-2c0-.5522847.4477153-1 1-1 1.1045695 0 2-.8954305 2-2s-.8954305-2-2-2-2 .8954305-2 2c0 .5522847-.4477153 1-1 1-2.089 0-.824-5 3-5z"/><path id="Shape" d="m9.92 19.21c.42-.327-.356-.21 14.08-.21v-3.93c.0038492-1.6939172 1.3760828-3.0661508 3.07-3.07h2.93v-10.93c-.0005513-.59071618-.4792838-1.0694487-1.07-1.07h-27.86c-.59071618.0005513-1.0694487.47928382-1.07 1.07v16.86c.0005513.5907162.47928382 1.0694487 1.07 1.07h.93c.55228475 0 1 .4477153 1 1v4.51zm4.08-3.21c-.5522847 0-1-.4477153-1-1s.4477153-1 1-1 1 .4477153 1 1-.4477153 1-1 1zm0-14c2.0098387.00573895 3.7033294 1.50196273 3.9566732 3.4957785.2533438 1.99381576-1.0121382 3.86602084-2.9566732 4.3742215v1.13c0 .5522847-.4477153 1-1 1s-1-.4477153-1-1v-2c0-.55228475.4477153-1 1-1 1.1045695 0 2-.8954305 2-2s-.8954305-2-2-2-2 .8954305-2 2c0 .55228475-.4477153 1-1 1-2.089 0-.824-5 3-5z"/></g></svg>
`;

export default () => <SvgXml xml={xml} width="100%" height="100%" />;