import {activateForm, deactivateForm} from './stateOfForm.js'
import {activateMapFilters, deactivateMapFilters} from './stateOfMapFilters.js'

function deactivatePage(){
  // 1.1. Неактивное состояние. При открытии страница находится в неактивном состоянии:
  // На месте карты отображается серый прямоугольник.

  // Форма заполнения информации об объявлении .ad-form содержит класс ad-form--disabled;
  // Все интерактивные элементы формы .ad-form должны быть заблокированы с помощью атрибута disabled, добавленного на них или на их родительские блоки fieldset;
  deactivateForm();
  // Форма с фильтрами .map__filters заблокирована так же, как и форма .ad-form — на форму добавлен специальный класс, а на её интерактивные элементы атрибуты disabled;
  deactivateMapFilters();
}

function activatePage() {
  activateForm();
  activateMapFilters();
}

export {deactivatePage, activatePage};



