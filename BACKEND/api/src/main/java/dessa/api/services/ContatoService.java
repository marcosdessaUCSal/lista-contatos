package dessa.api.services;

import dessa.api.domain.Contato;
import dessa.api.domain.dtos.TipoTelDTO;
import dessa.api.domain.enums.TipoTel;
import dessa.api.repositories.ContatoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

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
}
