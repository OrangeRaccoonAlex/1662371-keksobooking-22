import * as adForm from './adForm.js'
import * as filterForm from './filterForm.js'

function activate() {
  adForm.activate();
  filterForm.activate();
}

function deactivate(){
  adForm.deactivate();
  filterForm.deactivate();
}

export {deactivate, activate};
