import $ from 'jquery';

import styles from './styles.css';

const div = $('<div>Hello Xsolla school!</div>');

div.addClass(styles.message)

$(document.body).append(div);