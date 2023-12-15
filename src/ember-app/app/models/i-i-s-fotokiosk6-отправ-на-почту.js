import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ОтправНаПочтуMixin
} from '../mixins/regenerated/models/i-i-s-fotokiosk6-отправ-на-почту';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ОтправНаПочтуMixin, Validations, {
});

defineProjections(Model);

export default Model;
