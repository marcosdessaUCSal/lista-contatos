package dessa.api.domain;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import java.io.Serializable;
import java.time.LocalDate;

@Entity
public class Contato implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String nome;
    private String tel;
    private Integer codTipoTel;
    private String email;
    @JsonFormat(pattern = "dd/MM/yyyy")
    private LocalDate dataCriacao = LocalDate.now();
    @JsonFormat(pattern = "dd/MM/yyyy")
    private LocalDate dataModificacao = LocalDate.now();

    public Contato() {}

    public Contato(Integer id, String nome, String tel, Integer codTipoTel, String email) {
        this.id = id;
        this.nome = nome;
        this.tel = tel;
        this.codTipoTel = codTipoTel;
        this.email = email;
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

    public LocalDate getDataCriacao() {
        return dataCriacao;
    }

    public LocalDate getDataModificacao() {
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

    public void setDataModificacao(LocalDate dataModificacao) {
        this.dataModificacao = dataModificacao;
    }
}
