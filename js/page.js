import * as adForm from './adForm.js'
import * as filterForm from './filterForm.js'

function activate() {
  console.log('page activated')

  adForm.activate();
  filterForm.activate();
}

function deactivate(){
  console.log('page deactivated')

  adForm.deactivate();
  filterForm.deactivate();
}

export {deactivate, activate};
