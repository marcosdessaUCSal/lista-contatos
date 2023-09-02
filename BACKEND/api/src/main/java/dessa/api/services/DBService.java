package dessa.api.services;

import dessa.api.domain.Contato;
import dessa.api.repositories.ContatoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Arrays;

@Service
public class DBService {

    @Autowired
    private ContatoRepository contatoRepository;

    public void instanciaDB() {
        Contato c1 = new Contato(null, "Pato Donald", "34510371", 0, "pato@mail.com");
        Contato c2 = new Contato(null, "Mickey", "939521234", 1, "mickey@mail.com");
        Contato c3 = new Contato(null, "Pateta", "54325432", 0, "pateta@mail.com");
        Contato c4 = new Contato(null, "Peninha", "261762761", 1, "peninha@mail.com");
        Contato c5 = new Contato(null, "Pluto", "836196391", 0, "pluto@mail.com");

        contatoRepository.saveAll(Arrays.asList(c1, c2, c3, c4, c5));
    }
}
