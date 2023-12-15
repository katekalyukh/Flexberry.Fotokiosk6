package Fotokiosk6.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Fotokiosk6.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: ПечатьФото
 */
@Entity(name = "IISFotokiosk6ПечатьФото")
@Table(schema = "public", name = "ПечатьФото")
public class PechatFoto {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Размер")
    private String размер;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "SdelatFoto")
    @Convert("SdelatFoto")
    @Column(name = "СделатьФото", length = 16, unique = true, nullable = false)
    private UUID _sdelatfotoid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "SdelatFoto", insertable = false, updatable = false)
    private SdelatFoto sdelatfoto;


    public PechatFoto() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getРазмер() {
      return размер;
    }

    public void setРазмер(String размер) {
      this.размер = размер;
    }


}