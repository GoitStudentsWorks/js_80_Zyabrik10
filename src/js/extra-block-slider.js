// Слайдер для Support Ukrain
import { support_array } from './support-data';

const supportEl = document.querySelector('ul.support-list');

const supportUkraineMarkup = support_array
  .map(({ title, url }, index) => {
    return `<li class="support-item"><span class="item-number">${addNum(
      index + 1
    )}</span>
     <a class="support-link global-link" href=${url} target="_blank">
  ${title}
</a>
</li>
    `;
  })
  .join('');

supportEl.insertAdjacentHTML('beforeend', supportUkraineMarkup);

function addNum(value) {
  return value.toString().padStart(2, '0');
}
