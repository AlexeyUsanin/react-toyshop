import $ from 'jquery';
import './styles/app.scss';

import { header } from './scripts/header';
import { main } from './scripts/main';
import { footer } from './scripts/footer';

$('body').append(header(), main(), footer());
