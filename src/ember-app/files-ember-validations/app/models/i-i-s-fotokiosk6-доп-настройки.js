import {
  defineNamespace,
  defineProjections,
  Model as ДопНастройкиMixin
} from '../mixins/regenerated/models/i-i-s-fotokiosk6-доп-настройки';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ДопНастройкиMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
