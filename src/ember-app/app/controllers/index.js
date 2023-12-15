import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.fotokiosk6.caption'),
          title: i18n.t('forms.application.sitemap.fotokiosk6.title'),
          children: [{
            link: 'i-i-s-fotokiosk6-печать-фото-l',
            caption: i18n.t('forms.application.sitemap.fotokiosk6.i-i-s-fotokiosk6-печать-фото-l.caption'),
            title: i18n.t('forms.application.sitemap.fotokiosk6.i-i-s-fotokiosk6-печать-фото-l.title'),
            icon: 'chart bar',
            children: null
          }, {
            link: 'отправить-на-почту',
            caption: i18n.t('forms.application.sitemap.fotokiosk6.отправить-на-почту.caption'),
            title: i18n.t('forms.application.sitemap.fotokiosk6.отправить-на-почту.title'),
            children: null
          }, {
            link: 'i-i-s-fotokiosk6-клиент-l',
            caption: i18n.t('forms.application.sitemap.fotokiosk6.i-i-s-fotokiosk6-клиент-l.caption'),
            title: i18n.t('forms.application.sitemap.fotokiosk6.i-i-s-fotokiosk6-клиент-l.title'),
            icon: 'building',
            children: null
          }, {
            link: 'i-i-s-fotokiosk6-оплата-l',
            caption: i18n.t('forms.application.sitemap.fotokiosk6.i-i-s-fotokiosk6-оплата-l.caption'),
            title: i18n.t('forms.application.sitemap.fotokiosk6.i-i-s-fotokiosk6-оплата-l.title'),
            icon: 'chart bar',
            children: null
          }, {
            link: 'сделать-фото',
            caption: i18n.t('forms.application.sitemap.fotokiosk6.сделать-фото.caption'),
            title: i18n.t('forms.application.sitemap.fotokiosk6.сделать-фото.title'),
            icon: 'folder',
            children: null
          }]
        }
      ]
    };
  }),
})