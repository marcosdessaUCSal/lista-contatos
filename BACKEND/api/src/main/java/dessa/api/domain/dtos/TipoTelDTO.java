package dessa.api.domain.dtos;

import dessa.api.domain.enums.TipoTel;

public class TipoTelDTO {

    public Integer codigo;
    public String descricao;

    public TipoTelDTO(Integer codigo, String descricao) {
        this.codigo = codigo;
        this.descricao = descricao;
    }
}
