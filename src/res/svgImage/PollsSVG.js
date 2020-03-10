import * as React from "react";
import { SvgXml } from "react-native-svg";

const xml = `
<svg id="Layer_1" fill="#633371" enable-background="new 0 0 512.043 512.043" viewBox="0 0 512.043 512.043" xmlns="http://www.w3.org/2000/svg"><g><g><path d="m505.536 64.887-149.333-64c-4.395-1.877-9.536-.597-12.523 3.136l-42.667 53.333c-2.005 2.517-2.773 5.803-2.091 8.96.64 2.965 2.603 5.44 5.248 6.912l-133.952 50.24c-11.243 4.224-20.843 12.203-27.029 22.507l-44.288 73.813c-9.429 15.723-10.176 34.901-1.963 51.285l3.136 6.272h-46.741c-5.888 0-10.667 4.779-10.667 10.667v202.667h-32c-5.887 0-10.666 4.779-10.666 10.667s4.779 10.667 10.667 10.667h362.667c5.888 0 10.667-4.779 10.667-10.667s-4.779-10.667-10.667-10.667h-32v-109.013c0-3.648-1.877-7.061-4.949-9.003-3.072-1.941-6.955-2.197-10.261-.64-11.669 5.504-20.309 8.32-24.427 9.515-.896.256-1.728.619-2.517 1.109l-69.461 41.664c-11.072 6.656-23.701 10.176-36.523 10.176-23.595 0-45.611-11.691-59.136-31.723-10.688-16.043-14.379-35.264-10.389-54.101 3.989-18.837 15.104-34.901 31.36-45.248l10.091-6.379c7.253-4.565 13.845-8.683 19.755-12.331 4.117-2.56 6.016-7.552 4.587-12.203-2.624-8.555-6.997-16.149-11.157-22.037 16.341-6.997 38.229-19.691 49.323-32.64.064.021.128.064.192.107 2.389 1.408 5.141 2.88 8.277 4.395.171.085.299.171.469.256.021 0 .043 0 .064.021 7.915 3.819 17.899 7.659 29.632 9.941-12.459 15.424-25.152 34.517-29.76 47.232-8.811 3.968-27.2 14.357-70.037 41.643-11.371 7.232-19.136 18.453-21.931 31.637-2.773 13.184-.192 26.645 7.317 37.909 9.557 14.336 25.28 22.165 41.344 22.165 8.725 0 17.557-2.304 25.579-7.104l73.301-43.968c11.477-2.795 68.501-19.861 111.701-89.749 33.856-54.763 52.907-98.88 60.757-118.763l1.195.597c4.523 2.261 9.344 3.413 14.293 3.413 8.213 0 16.32-3.285 22.272-9.024 6.272-6.059 9.749-14.229 9.749-22.997v-50.814c-.044-4.31-2.583-8.171-6.508-9.835z"/></g></g><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/></svg>
`;

export default () => <SvgXml xml={xml} width="100%" height="100%" />;