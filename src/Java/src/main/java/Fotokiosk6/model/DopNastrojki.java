package Fotokiosk6.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Fotokiosk6.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: ДопНастройки
 */
@Entity(name = "IISFotokiosk6ДопНастройки")
@Table(schema = "public", name = "ДопНастройки")
public class DopNastrojki {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Уголок")
    private Boolean уголок;

    @Column(name = "ЧбЦвет")
    private Boolean чбцвет;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "SdelatFoto")
    @Convert("SdelatFoto")
    @Column(name = "СделатьФото", length = 16, unique = true, nullable = false)
    private UUID _sdelatfotoid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "SdelatFoto", insertable = false, updatable = false)
    private SdelatFoto sdelatfoto;


    public DopNastrojki() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Boolean getУголок() {
      return уголок;
    }

    public void setУголок(Boolean уголок) {
      this.уголок = уголок;
    }

    public Boolean getЧбЦвет() {
      return чбцвет;
    }

    public void setЧбЦвет(Boolean чбцвет) {
      this.чбцвет = чбцвет;
    }


}