import { Serializer as ОтправНаПочтуSerializer } from
  '../mixins/regenerated/serializers/i-i-s-fotokiosk6-отправ-на-почту';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ОтправНаПочтуSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
