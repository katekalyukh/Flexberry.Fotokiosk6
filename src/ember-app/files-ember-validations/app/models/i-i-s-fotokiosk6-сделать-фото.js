import {
  defineNamespace,
  defineProjections,
  Model as СделатьФотоMixin
} from '../mixins/regenerated/models/i-i-s-fotokiosk6-сделать-фото';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(СделатьФотоMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
