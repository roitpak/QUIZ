import * as React from "react";
import { SvgXml } from "react-native-svg";

const xml = `
<svg version="1.1" id="Capa_1" fill="#FF660D" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 448 448" style="enable-background:new 0 0 448 448;" xml:space="preserve">
<g>
	<g>
		<polygon points="0.213,32 0,181.333 320,224 0,266.667 0.213,416 448,224 		"/>
	</g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>`;

export default () => <SvgXml xml={xml} width="100%" height="100%" />;
