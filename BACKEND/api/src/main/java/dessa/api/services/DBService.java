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
        Contato c1 = new Contato(null, "Albert Einstein", "34510371", 0, "einstein@mail.com");
        Contato c2 = new Contato(null, "Sigmund Freud", "939521234", 1, "freud@mail.com");
        Contato c3 = new Contato(null, "Leonardo da Vinci", "54325432", 0, "davinci@mail.com");

        contatoRepository.saveAll(Arrays.asList(c1, c2, c3));
    }
}
