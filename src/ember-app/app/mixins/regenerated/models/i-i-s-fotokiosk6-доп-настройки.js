import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  уголок: DS.attr('boolean'),
  чбЦвет: DS.attr('boolean'),
  сделатьФото: DS.belongsTo('i-i-s-fotokiosk6-сделать-фото', { inverse: 'допНастройки', async: false })
});

export let ValidationRules = {
  уголок: {
    descriptionKey: 'models.i-i-s-fotokiosk6-доп-настройки.validations.уголок.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  чбЦвет: {
    descriptionKey: 'models.i-i-s-fotokiosk6-доп-настройки.validations.чбЦвет.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  сделатьФото: {
    descriptionKey: 'models.i-i-s-fotokiosk6-доп-настройки.validations.сделатьФото.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ДопНастройкиE', 'i-i-s-fotokiosk6-доп-настройки', {
    уголок: attr('Уголок', { index: 0 }),
    чбЦвет: attr('Чб цвет', { index: 1 })
  });
};
