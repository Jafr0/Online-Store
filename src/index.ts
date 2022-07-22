import flowers from './moduls/flowers';
import Render from './moduls/render';
import './style.css';

const all = new Render(flowers);

all.renderCards(flowers);
