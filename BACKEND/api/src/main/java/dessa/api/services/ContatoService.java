package dessa.api.services;

import dessa.api.domain.Contato;
import dessa.api.domain.dtos.ContatoDTO;
import dessa.api.domain.dtos.TipoTelDTO;
import dessa.api.domain.enums.TipoTel;
import dessa.api.repositories.ContatoRepository;
import dessa.api.services.exceptions.DataIntegrityViolationException;
import dessa.api.services.exceptions.ObjectNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class ContatoService {

    @Autowired
    private ContatoRepository contatoRepository;

    public List<Contato> findAll() {
        return contatoRepository.findAll();
    }

    public List<TipoTelDTO> tiposTel() {
        return TipoTel.getAllTipoTelDTO();
    }

    public Contato findById(Integer id) {
        Optional<Contato> contato = contatoRepository.findById(id);
        return contato.orElseThrow(
                () -> new ObjectNotFoundException("Contato não encontrado para o id " + id)
        );
    }

    public Contato create(ContatoDTO contatoDTO) {
        validaCodigoTipoTel(contatoDTO.getCodTipoTel());
        Contato contato = new Contato(contatoDTO, false);
        return contatoRepository.save(contato);
    }

    public Contato update(ContatoDTO contatoDTO) {
        validaCodigoTipoTel(contatoDTO.getCodTipoTel());
        Integer id = contatoDTO.getId();
        Contato oldContato = this.findById(id);  // acusa erro se não encontrar id
        Contato newContato = new Contato(contatoDTO, true);
        return contatoRepository.save(newContato);
    }



    private void validaCodigoTipoTel(Integer cod) {
        Set codigos = TipoTel.getAllCodigos();
        if (!codigos.contains(cod)) {
            throw new DataIntegrityViolationException("Tipo de telefone não existe: código " + cod);
        }
    }
}
