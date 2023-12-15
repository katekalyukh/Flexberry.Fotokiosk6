import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ДопНастройкиMixin
} from '../mixins/regenerated/models/i-i-s-fotokiosk6-доп-настройки';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ДопНастройкиMixin, Validations, {
});

defineProjections(Model);

export default Model;
