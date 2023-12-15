import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as СделатьФотоMixin
} from '../mixins/regenerated/models/i-i-s-fotokiosk6-сделать-фото';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(СделатьФотоMixin, Validations, {
});

defineProjections(Model);

export default Model;
