import * as adForm from './ad-form.js'
import * as filterForm from './filter-form.js'

function activate() {
  adForm.activate();
  filterForm.activate();
}

function deactivate(){
  adForm.deactivate();
  filterForm.deactivate();
}

export {deactivate, activate};
