package dessa.api.domain.dtos;

import dessa.api.domain.Contato;
import jakarta.validation.constraints.NotNull;

import java.io.Serializable;
import java.time.LocalDate;

public class ContatoDTO implements Serializable {
    private static final long serialVersionUID = 1L;

    private Integer id; // Pode estar nulo na criação do contato
    @NotNull(message = "O campo NOME é requerido")
    private String nome;
    @NotNull(message = "O campo TELEFONE é requerido")
    private String tel;
    @NotNull(message = "O campo TIPO DE TELEFONE é requerido")
    private Integer codTipoTel;
    private String email;
    private String dataCriacao;
    private String dataModificacao;

    public ContatoDTO() {}

    public ContatoDTO(Contato contato) {
        this.id = contato.getId();
        this.nome = contato.getNome();
        this.tel = contato.getTel();
        this.codTipoTel = contato.getCodTipoTel();
        this.email = contato.getEmail();
        this.dataCriacao = contato.getDataCriacao().toString();
        this.dataModificacao = contato.getDataModificacao().toString();
    }

    // Getters

    public Integer getId() {
        return id;
    }

    public String getNome() {
        return nome;
    }

    public String getTel() {
        return tel;
    }

    public Integer getCodTipoTel() {
        return codTipoTel;
    }

    public String getEmail() {
        return email;
    }

    public String getDataCriacao() {
        return dataCriacao;
    }

    public String getDataModificacao() {
        return dataModificacao;
    }

    // Setters

    public void setId(Integer id) {
        this.id = id;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public void setTel(String tel) {
        this.tel = tel;
    }

    public void setCodTipoTel(Integer codTipoTel) {
        this.codTipoTel = codTipoTel;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setDataCriacao(LocalDate dataCriacao) {
        this.dataCriacao = dataCriacao.toString();
    }

    public void setDataModificacao(LocalDate dataModificacao) {
        this.dataModificacao = dataModificacao.toString();
    }
}
