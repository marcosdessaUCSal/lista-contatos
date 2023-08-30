package dessa.api.resources;

import dessa.api.domain.Contato;
import dessa.api.domain.dtos.ContatoDTO;
import dessa.api.domain.dtos.TipoTelDTO;
import dessa.api.services.ContatoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping(value = "/contatos")
public class ContatoResource {

    @Autowired
    private ContatoService contatoService;

    @GetMapping
    public ResponseEntity<List<ContatoDTO>> findAll() {
        List<Contato> lista = contatoService.findAll();
        List<ContatoDTO> listaDTO = lista.stream().map(
                contato -> new ContatoDTO(contato)
        ).collect(Collectors.toList());
        return ResponseEntity.ok().body(listaDTO);
    }

    @GetMapping(value = "/tipostel")
    public ResponseEntity<List<TipoTelDTO>> tiposTel() {
        return ResponseEntity.ok().body(contatoService.tiposTel());
    }
}
