package dessa.api.domain.enums;

public enum TipoTel {

    FIXO(0, "FIXO"), CELULAR(1, "CELULAR");

    private Integer codigo;
    private String descricao;

    private TipoTel(Integer codigo, String descricao) {
        this.codigo = codigo;
        this.descricao = descricao;
    }

    public Integer getCodigo() {
        return codigo;
    }

    public String getDescricao() {
        return this.descricao;
    }

    // Retorna o enum, dado um código
    public static TipoTel toEnum(Integer cod) {
        if (cod == null) {
            return null;
        }
        for (TipoTel tipo : TipoTel.values()) {
            if (cod.equals(tipo.getCodigo())) {
                return tipo;
            }
        }
        throw new IllegalArgumentException("Tipo de telefone inválido");
    }
}
