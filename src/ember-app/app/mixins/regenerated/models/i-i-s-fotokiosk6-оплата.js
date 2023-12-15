import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  время: DS.attr('string'),
  дата: DS.attr('date'),
  способОпл: DS.attr('i-i-s-fotokiosk6-вид-оплаты'),
  сумма: DS.attr('number'),
  сделатьФото: DS.belongsTo('i-i-s-fotokiosk6-сделать-фото', { inverse: null, async: false })
});

export let ValidationRules = {
  время: {
    descriptionKey: 'models.i-i-s-fotokiosk6-оплата.validations.время.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  дата: {
    descriptionKey: 'models.i-i-s-fotokiosk6-оплата.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  способОпл: {
    descriptionKey: 'models.i-i-s-fotokiosk6-оплата.validations.способОпл.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  сумма: {
    descriptionKey: 'models.i-i-s-fotokiosk6-оплата.validations.сумма.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  сделатьФото: {
    descriptionKey: 'models.i-i-s-fotokiosk6-оплата.validations.сделатьФото.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ОплатаE', 'i-i-s-fotokiosk6-оплата', {
    способОпл: attr('Способ оплаты', { index: 0 }),
    время: attr('Время', { index: 1 }),
    дата: attr('Дата', { index: 2 }),
    сделатьФото: belongsTo('i-i-s-fotokiosk6-сделать-фото', 'Сделанное фото', {
      категорФото: attr('Сделанное фото', { index: 3 }),
      цена: attr('Стоимость', { index: 4 })
    }, { index: -1, hidden: true })
  });

  modelClass.defineProjection('ОплатаL', 'i-i-s-fotokiosk6-оплата', {
    способОпл: attr('Способ оплаты', { index: 0 }),
    время: attr('Время оплаты', { index: 1 }),
    дата: attr('Дата оплаты', { index: 2 }),
    сделатьФото: belongsTo('i-i-s-fotokiosk6-сделать-фото', 'Сделанное фото', {
      категорФото: attr('Сделанное фото', { index: 3 }),
      цена: attr('Стоимость', { index: 4 })
    }, { index: -1, hidden: true })
  });
};
