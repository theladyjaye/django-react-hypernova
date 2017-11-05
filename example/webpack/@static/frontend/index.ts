import {Coffee} from '../components/coffee';
import {Pie} from '../components/pie';
import { renderReact } from 'hypernova-react';

// All instances of `Component` (aka `Coffee` or `Pie`) on the page will
// be hydrated by Hypernova with the following
renderReact('Coffee', Coffee);
renderReact('Pie', Pie);