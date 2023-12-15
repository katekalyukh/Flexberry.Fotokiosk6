package Fotokiosk6.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Fotokiosk6.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import java.util.List;

/**
 * Entity implementation class for Entity: СделатьФото
 */
@Entity(name = "IISFotokiosk6СделатьФото")
@Table(schema = "public", name = "СделатьФото")
public class SdelatFoto {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "КолВоФото")
    private Integer колвофото;

    @Column(name = "КатегорФото")
    private String категорфото;

    @Column(name = "Цена")
    private Integer цена;

    @OneToMany(mappedBy = "sdelatfoto", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<DopNastrojki> dopnastrojkis;


    public SdelatFoto() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getКолВоФото() {
      return колвофото;
    }

    public void setКолВоФото(Integer колвофото) {
      this.колвофото = колвофото;
    }

    public String getКатегорФото() {
      return категорфото;
    }

    public void setКатегорФото(String категорфото) {
      this.категорфото = категорфото;
    }

    public Integer getЦена() {
      return цена;
    }

    public void setЦена(Integer цена) {
      this.цена = цена;
    }


}