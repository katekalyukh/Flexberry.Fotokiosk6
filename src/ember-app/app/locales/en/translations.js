import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISFotokiosk6КлиентLForm from './forms/i-i-s-fotokiosk6-клиент-l';
import IISFotokiosk6ОплатаLForm from './forms/i-i-s-fotokiosk6-оплата-l';
import IISFotokiosk6ПечатьФотоLForm from './forms/i-i-s-fotokiosk6-печать-фото-l';
import Отправить на почтуForm from './forms/отправить-на-почту';
import Сделать фотоForm from './forms/сделать-фото';
import IISFotokiosk6КлиентEForm from './forms/i-i-s-fotokiosk6-клиент-e';
import IISFotokiosk6ОплатаEForm from './forms/i-i-s-fotokiosk6-оплата-e';
import IISFotokiosk6ПечатьФотоEForm from './forms/i-i-s-fotokiosk6-печать-фото-e';
import Отправить на почтуForm from './forms/отправить-на-почту';
import Сделать фотоForm from './forms/сделать-фото';
import IISFotokiosk6ДопНастройкиModel from './models/i-i-s-fotokiosk6-доп-настройки';
import IISFotokiosk6КлиентModel from './models/i-i-s-fotokiosk6-клиент';
import IISFotokiosk6ОплатаModel from './models/i-i-s-fotokiosk6-оплата';
import IISFotokiosk6ОтправНаПочтуModel from './models/i-i-s-fotokiosk6-отправ-на-почту';
import IISFotokiosk6ПечатьФотоModel from './models/i-i-s-fotokiosk6-печать-фото';
import IISFotokiosk6СделатьФотоModel from './models/i-i-s-fotokiosk6-сделать-фото';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-fotokiosk6-доп-настройки': IISFotokiosk6ДопНастройкиModel,
    'i-i-s-fotokiosk6-клиент': IISFotokiosk6КлиентModel,
    'i-i-s-fotokiosk6-оплата': IISFotokiosk6ОплатаModel,
    'i-i-s-fotokiosk6-отправ-на-почту': IISFotokiosk6ОтправНаПочтуModel,
    'i-i-s-fotokiosk6-печать-фото': IISFotokiosk6ПечатьФотоModel,
    'i-i-s-fotokiosk6-сделать-фото': IISFotokiosk6СделатьФотоModel
  },

  'application-name': 'Fotokiosk6',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Fotokiosk6',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Fotokiosk6',
          title: 'Fotokiosk6'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        fotokiosk6: {
          caption: 'Fotokiosk6',
          title: 'Fotokiosk6',
          'i-i-s-fotokiosk6-печать-фото-l': {
            caption: 'Печать фото',
            title: ''
          },
          'отправить-на-почту': {
            caption: 'Отправ на почту',
            title: ''
          },
          'i-i-s-fotokiosk6-клиент-l': {
            caption: 'Клиент',
            title: ''
          },
          'i-i-s-fotokiosk6-оплата-l': {
            caption: 'Оплата',
            title: ''
          },
          'сделать-фото': {
            caption: 'Сделать фото',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-fotokiosk6-клиент-l': IISFotokiosk6КлиентLForm,
    'i-i-s-fotokiosk6-оплата-l': IISFotokiosk6ОплатаLForm,
    'i-i-s-fotokiosk6-печать-фото-l': IISFotokiosk6ПечатьФотоLForm,
    'отправить-на-почту': Отправить на почтуForm,
    'сделать-фото': Сделать фотоForm,
    'i-i-s-fotokiosk6-клиент-e': IISFotokiosk6КлиентEForm,
    'i-i-s-fotokiosk6-оплата-e': IISFotokiosk6ОплатаEForm,
    'i-i-s-fotokiosk6-печать-фото-e': IISFotokiosk6ПечатьФотоEForm,
    'отправить-на-почту': Отправить на почтуForm,
    'сделать-фото': Сделать фотоForm
  },

});

export default translations;
