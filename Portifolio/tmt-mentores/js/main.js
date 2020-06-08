$(document).ready(function () {
    $('.collapsible').collapsible();
});
adicionarMentores()
function buscaSite() {
    let valorNome = removeAcento(document.getElementById("busca-nome").value),
        valorCidade = removeAcento(document.getElementById("busca-cidade").value);
    var items = document.getElementsByClassName('selecionador');
    for (c = 0; c < items.length; c++) {
        let comparadorNome = removeAcento(items[c].getAttribute("data-nome")),
            comparadorCidade = removeAcento(items[c].getAttribute("data-cidade"));
        if ((valorNome != '') && (valorCidade != '')) {
            if ((comparadorCidade.toLowerCase().indexOf(valorCidade.toLowerCase()) == -1) || (comparadorNome.toLowerCase().indexOf(valorNome.toLowerCase()) == -1)) {
                // items[c].style.display = 'none';
                apagaMentor(items[c]);
            } else {
                apareceMentor(items[c]);
                // items[c].style.display = 'block';
            }
        } else if (valorNome != '') {
            if (comparadorNome.toLowerCase().indexOf(valorNome.toLowerCase()) == -1) {
                // items[c].style.display = 'none';
                apagaMentor(items[c]);
            } else {
                // items[c].style.display = 'block';
                apareceMentor(items[c]);
            }
        } else if (valorCidade != '') {
            if (comparadorCidade.toLowerCase().indexOf(valorCidade.toLowerCase()) == -1) {
                // items[c].style.display = 'none';
                apagaMentor(items[c]);
            } else {
                // items[c].style.display = 'block';
                apareceMentor(items[c]);
            }
        } else {
            // items[c].style.display = 'block';
            apareceMentor(items[c]);
        }
    }
}
function removeAcento(text) {
    text = text.toLowerCase();
    text = text.replace(new RegExp('[ÁÀÂÃ]', 'gi'), 'a');
    text = text.replace(new RegExp('[ÉÈÊ]', 'gi'), 'e');
    text = text.replace(new RegExp('[ÍÌÎ]', 'gi'), 'i');
    text = text.replace(new RegExp('[ÓÒÔÕ]', 'gi'), 'o');
    text = text.replace(new RegExp('[ÚÙÛ]', 'gi'), 'u');
    text = text.replace(new RegExp('[Ç]', 'gi'), 'c');
    return text;
}
function mudaNome(e) {
    let filhos = e.children;
    if (e.classList != 'collapsible-header button button--vermelho start-xs middle-xs ativo') {
        let botoes = document.getElementsByClassName('ativo');
        if (botoes.length != 0) {
            botoesFilhos = botoes[0].children;
            botoes[0].classList.remove('ativo');
            botoesFilhos[0].innerText = 'Mais Informações';
            botoesFilhos[1].classList.remove('fa-minus');
            botoesFilhos[1].classList.add('fa-plus');
        }
        filhos[0].innerText = 'Menos Informações';
        filhos[1].classList.remove('fa-plus');
        filhos[1].classList.add('fa-minus');
        e.classList.add('ativo')
    } else {
        filhos[0].innerText = 'Mais Informações';
        filhos[1].classList.remove('fa-minus');
        filhos[1].classList.add('fa-plus');
        e.classList.remove('ativo')
    }
}
function embaralhar(array) {
    var indice_atual = array.length,
        valor_temporario, indice_aleatorio;
    while (0 !== indice_atual) {
        indice_aleatorio = Math.floor(Math.random() * indice_atual);
        indice_atual -= 1;
        valor_temporario = array[indice_atual];
        array[indice_atual] = array[indice_aleatorio];
        array[indice_aleatorio] = valor_temporario;
    }
    return array;
}
function apagaMentor(item) {
    setTimeout(function () {
        item.classList.remove('stepAparece-1');
        item.classList.remove('stepAparece-2');
        item.classList.add('stepApaga-1');
        setTimeout(function () {
            item.classList.add('stepApaga-2');
        }, 500);
    }, 500);
}
function apareceMentor(item) {
    setTimeout(function () {
        item.classList.add('stepAparece-1');
        item.classList.remove('stepApaga-2');
        setTimeout(function () {
            item.classList.add('stepAparece-2');
            item.classList.remove('stepApaga-1');
        }, 300);
    }, 500);
}
function adicionarMentores() {
    let listaDeMentores = [{
            nome: 'Elio Magri Jr',
            cidade: 'Santos-SP',
            imagem: 'perfil_elio.jpeg',
            texto: `
                <h4>
                   "Minha missão é compartilhar conhecimento e experiência, de modo a ajudar pessoas a alcançar alta performance, equilíbrio e clareza necessários para focar naquilo que realmente é importante."
                </h4>
                <p>
                   Carreira com mais de 20 anos na área de Tecnologia da Informação em empresas multinacionais do segmento de varejo com MBA em Gestão Empresarial, 
                   especialização em Gestão de Projetos e em Administração de Sistemas da 
                   Informação e Bacharelado em Ciências da Computação. 
                </p> 
                <p>
                   Certificação em Agile Coach(CAC) pela Massimus, 
                   Scrum Product Owner(CSPO) e 
                   Scrum Master(CSM) pela Scrum Alliance. 
                </p> 
                <p>
                   Coach certificado pelo International Association of Coaching Institute, 
                   Leader Coach pela Academia Internacional de Coaching, Mentor de Produtividade 
                   pela Triad Productivity Solutions e Practitioner em PNL pela SBPNL. 
                </p>
           `,
            redesSociais: {
                whatsApp: '11999422135',
                instagram: 'elio.magri',
                facebook: 'eliomagrijr',
                twitter: '',
                linkedin: 'magri',
                youTube: '',
                webSite: 'eliomagri.com.br',
                email: 'contato@eliomagri.com.br'
            }
        },
        {
            nome: 'Ellen Souza',
            cidade: 'São Paulo-SP',
            imagem: 'perfil_ellen.jpg',
            texto: `
                <h4>
                </h4>
                <p>
                   Consultora em Gestão de Pessoas desde 2002, apaixonada pelo ambiente organizacional e seus atores. 
                </p>
                <p>
                   Estruturei a área de Gestão de Pessoas de empresas em diversos segmentos, sempre com foco no Desenvolvimento Organizacional e Gestão de Pessoas. Implementei e facilitei programas de treinamento e desenvolvimento para líderes e gestores. 
                </p>
                <p>
                   Pós Graduada em Gestão Estratégica de Pessoas pela FGV. TriadMentor certificada pela TriadPS e SBPNL.  
                </p>
                <p>
                   Coach certificada pela International Association of Coaching Institutes. 
                </p>
           `,
            redesSociais: {
                whatsApp: '11989005850',
                instagram: 'ellensouza_consultant',
                facebook: '',
                twitter: '',
                linkedin: 'ellen-souza-dho',
                youTube: '',
                webSite: '',
                email: 'ellensouza@ellensouza.com'
            }
        },
        {
            nome: 'Flávio da Cunha Nerva',
            cidade: 'Porto Alegre-RS',
            imagem: 'perfil_flavio.jpg',
            texto: `
                <h4>
                   "Dê tempo, dê vida."
                </h4>
                <p>
                   Flávio Nerva é Fundador e CEO do On Life Institute.
                </p>
                <p>
                   Mais de 28 anos de experiência em liderança das áreas administrativa, planejamento, processos, projetos estratégicos e serviços.
                </p>
                <p>
                   Mentor TRIAD®, Designer Estratégico, Professor. Facilitador, certificado em ferramentas criativas, como LEGO® SERIOUS PLAY®, POINTS OF YOU® e do método DÊ VIDA®. Coordenador de Grupo pela Sociedade Brasileira de Dinâmica de Grupo - SBDG.
                </p>
                <p>
                   É Doutorando em Design, mestre em Administração, especialista em Administração Financeira, Gestão de Pessoas, Humanidades e graduado em Tecnologia da Informação pela Universidade do Vale do Rio dos Sinos - Unisinos. 
                </p>
                <p>
                   Exerceu o cargo de Diretor de Parcerias na Secretaria de Educação da Prefeitura Municipal de Porto Alegre. 
                   Atuou como Coordenador de Pós-Graduação e Gerente de Relacionamento, Vendas e Administrativo da Unidade Acadêmica de Educação Continuada da Unisinos. Desempenhou a Presidência da Cooperativa de Serviços de Saúde do Vale do Rio dos Sinos por duas gestões.
                </p>
           `,
            redesSociais: {
                whatsApp: '51991162610',
                instagram: 'flavionerva',
                facebook: 'fnerva',
                twitter: '',
                linkedin: '',
                youTube: '',
                webSite: 'instituteon.life',
                email: 'flavio.nerva@instituteon.life'
            }
        },
        {
            nome: 'Rafael Serpa',
            cidade: 'Porto Alegre-RS ',
            imagem: 'perfil_rafael.jpg',
            texto: `
                <h4>
                    "Facilitador da minha própria vida e da vida dos outros. Sempre me desenvolvendo para logo em seguida poder ajudar alguém a se desenvolver também. Conte comigo para ser o seu Mentor de Produtividade."
                </h4>
                <p>
                    Mentor de Produtividade – Triad Mentor.
                </p>
                <p>
                    Coach do Time Let’s Coaching do Instituto Geronimo Theml.
                </p>
                <p>
                    Analista Comportamental pela Solides e SOAR.
                </p>
                <p>
                    Master Practitioner em Programação Neurolinguística pela Sociedade Internacional de PNL. 
                </p>     
                <p>
                    Auditor-Fiscal da Receita Municipal de Porto Alegre (de 2014 até o presente momento). 
                </p>          
                <p>
                    Ex-Técnico Judiciário do Tribunal Regional do Trabalho da 4ª Região (2011-2014). 
                </p>          
                <p>
                    Ex-Assistente-Técnico Administrativo do Ministério da Fazenda (2010-2011). 
                </p>
                <p>
                    Ex-professor de Matemática, tendo atuado em diversas escolas e cursos preparatórios para concursos (2003-2015).
                </p>
                <p>
                    Graduado em Matemática com especialização em Direito Tributário.
                </p>
           `,
            redesSociais: {
                whatsApp: '51998061716',
                instagram: 'rafaelserpars',
                facebook: 'rafaelserpars',
                twitter: '',
                linkedin: 'rafaelserpars',
                youTube: 'UCVeen2EAKLRj6PEeSq5XcJg',
                webSite: 'rafaelserpa.com.br',
                email: 'contato@rafaelserpa.com.br'
            }
        },
        {
            nome: 'Alexandre Bagetti',
            cidade: 'Petrolina-PE ',
            imagem: 'perfil_alexandre.png',
            texto: `
                <h4>
                    “Seja a mudança que quer ver no mundo” - Gandhi 
                </h4>
                <p>
                    O que você faria com mais horas no seu dia? 
                </p>
                <p>
                    Você sabia que o brasileiro gasta mais de 2/3 do seu tempo com que não é importante na sua vida? 
                </p>
                <p>
                    Sou Alexandre Bagetti, e minha missão é compartilhar o meu conhecimento e minha experiência, de modo a ajudar pessoas como você a serem melhores a cada dia e assim poderemos transformar o mundo.
                </p>
                <p>
                    Formado em Engenharia, pós graduado em Gerenciamento de Projetos pela FGV, Especialista em Produtividade Pessoal e Mentor Certificado pela Triad®. 
                </p>     
                <p>
                    Consultor, Palestrante e Treinador, e com mais 19 anos de experiência nas áreas de produtividade, planejamento estratégico, qualidade total e gestão de projetos e processos em diversas empresas brasileiras e multinacionais.
                </p>          
                <p>
                        Quero te ajudar a entender sua relação tempo x resultados e poder fazer você realizar mais, com equilíbrio e aproveitando a vida.
                </p>         
           `,
            redesSociais: {
                whatsApp: '87991210094',
                instagram: 'alexandrebagetti',
                facebook: '',
                twitter: '',
                linkedin: 'alexandrebagetti',
                youTube: '',
                webSite: 'alexandrebagetti.com.br/',
                email: 'contato@alexandrebagetti.com.br'
            }
        },
        {
            nome: 'Cristiano Scoralick Rodrigues',
            cidade: 'Juiz de Fora-MG ',
            imagem: 'perfil_cristiano.jpg',
            texto: `
                <h4>
                    "Tempo, “Bem” mais precioso que possuímos! Por isso, busco ser melhor; a mudança, aplicação e superação fazem parte do meu dia a dia; no meu modo de ser, pensar e agir; quer seja comigo mesmo, em família, profissionalmente e na sociedade; desenvolvendo, promovendo e aprimorando a liderança e a gestão de pessoas; e mesmo que hoje não consiga, não desisto, tenho a certeza que, embora não possa voltar atrás e começar de novo, posso começar agora e fazer ainda melhor! E através do meu exemplo, desejo ajudar a despertar nas pessoas que me rodeiam a importância e a necessidade de também empreenderem seus esforços nesta mudança e assim transformarmos juntos, o mundo que nos cerca em um lugar ainda melhor. Não estou sozinho nesta empreitada, a “Equipe” é extremamente competente!"
                </h4>
                <p>
                    Olá, meu nome é Cristiano Scoralick Rodrigues, tenho 39 anos, sou Casado há 5 anos e Pai de um garoto de 3!
                </p>
                <p>
                    Me formei em Administração de Empresas em 07/2007 pela PUC-MG, onde deste então atuo nesta área. 
                </p>
                <p>
                    São mais de 12 anos de experiência. 
                </p>
                <p>
                    Ao longo da minha vida profissional, já estive a frente de empresas no setor de transporte, atuando em Manutenção e Logística de Carga; no setor de Prestação de Serviços, em instalação a e manutenção de Sistema de Refrigeração e atualmente estou a frente de uma Agência Franqueada dos Correios em minha cidade.  
                </p>     
                <p>
                    Por entender que uma das grandes dores de nossa sociedade contemporânea, e era a minha, a "falta de tempo", ou melhor, a gestão do tempo, "bem" mais precioso que possuímos, é que me dedico a este tema já há algum tempo e onde busco me capacitar e melhorar constantemente. Me formei em Mentoria de Produtividade - Triad Mentor pela TriadPS e SBPNL, em 05/2019, sendo o primeiro o primeiro Mentor certificado por ela.
                </p>          
                <p>
                    Espiritualidade, PNL, Comunicação, Alimentação Saudável, Atividade Física e Inteligência Financeira são outras áreas do meu interesse e onde estou em constante aprendizado. 
                </p>         
           `,
            redesSociais: {
                whatsApp: '32999709200',
                instagram: 'cristianoscoralick',
                facebook: 'cristiano.scoralick',
                twitter: '',
                linkedin: '',
                youTube: '',
                webSite: '',
                email: 'scoralick_cristiano@yahoo.com.br'
            }
        },
        {
            nome: 'Fabiana Farias',
            cidade: 'Maceió-AL',
            imagem: 'perfil_fabiana.png',
            texto: `
                <h4>
                    “Você não encontrará nenhuma paixão se conformando com uma vida que é inferior àquela que é capaz de viver.” Mandela
                </h4>
                <p>
                    "Tempo, Tempo, Tempo, Tempo"
                </p>
                <p>
                    Mais que gerenciar o tempo, você pode aprender através de uma metodologia segura, a gerenciar a vida de forma equilibrada e prazerosa. Não sabe como? Estou aqui para te ajudar!
                </p>
                <p>
                    Administradora de Empresas, MBA em Gestão Empresarial pela FGV, Curso Empretec pelo SEBRAE, Mentora em Produtividade certificada pela TriadPS.
                </p>
                <p>
                    Empresária do ramo de hotelaria e hospedagens. Com vasta experiência em vendas, por ter trabalhado por 15 anos no varejo, período que liderou equipes com mais de 100 pessoas, em diversos estados do Brasil. 
                </p>
                <p>
                    Amplo conhecimento e prática, em recrutamento e seleção, gestão de equipes, acompanhamento e entrega de resultados.
                </p>     
                <p>
                    Prazer! Sou Fabiana Farias!
                </p>                
           `,
            redesSociais: {
                whatsApp: '82988598688',
                instagram: 'fabianacfl',
                facebook: 'fabiana.farias.1291',
                twitter: '',
                linkedin: 'fabianacfarias',
                youTube: '',
                webSite: '',
                email: 'fabianacfl@gmail.com'
            }
        },
        {
            nome: 'Fabio Roberto Dallazem',
            cidade: 'Curitiba-PR',
            imagem: 'perfil_fabio.jpg',
            texto: `
                <h4>
                    “Somos muito maiores e melhores do que pensamos ser.”
                </h4>
                <p>
                    Empresário, Empreendedor e Mentor de Produtividade.
                </p>
                <p>
                    Formado em Administração de Empresas pela UFPR, Pós Graduado/MBA em Gestão de Negócios pela FGV, Especialista em Produtividade Pessoal e Mentor Certificado pela Triad®.
                </p>
                <p>
                    Meu propósito é ajudar as pessoas a terem uma vida melhor, com mais equilíbrio e resultado, identificado o que realmente é importante para elas. Não é somente falta de tempo. É falta de uma vida plena.
                </p>               
           `,
            redesSociais: {
                whatsApp: '41992700086',
                instagram: 'fabiordallazem',
                facebook: 'fabiorobertodallazem',
                twitter: '',
                linkedin: '',
                youTube: '',
                webSite: '',
                email: 'fabiodallazem@gmail.com'
            }
        },
        {
            nome: 'Kris Santos',
            cidade: 'Piracicaba-SP',
            imagem: 'perfil_kris.jpeg',
            texto: `
                <h4>
                    “Bons pensamentos, boas palavras e boas ações.” Zaratustra          
                </h4>
                <p>
                    Mentora de Produtividade/Empresária.
                </p>
                <p>
                    Pedagoga, Especialista em Tecnologia Assistiva e Comunicação Alternativa, Mestre em Educação e Doutoranda em Educação                
                </p>
           `,
            redesSociais: {
                whatsApp: '19988723495',
                instagram: 'krissantos.infiniita',
                facebook: '',
                twitter: '',
                linkedin: '',
                youTube: '',
                webSite: '',
                email: 'krissantos@infiniita.com'
            }
        },
        {
            nome: 'Carlos Ruggeri',
            cidade: 'Vinhedo-SP',
            imagem: 'perfil_carlos.png',
            texto: `
                <h4> 
                    “Juntos vamos conseguir mais equilíbrio e resultados, e estarmos preparados para o futuro próximo.”                       
                </h4>              
                <p>
                    Sou engenheiro eletrônico pela Escola Politécnica da USP, pós-graduado no
                    Brasil e nos EUA em Negócios e Administração de Empresas. Trabalhei em multinacional alemã
                    por muito tempo, empreendi na área de tecnologia da informação por mais de 15 anos e
                    atualmente sou auditor fiscal tributário e mentor de produtividade certificado pela TRIAD.
                </p>
            `,
            redesSociais: {
                whatsApp: '19981158975 ',
                instagram: '',
                facebook: '',
                twitter: '',
                linkedin: '',
                youTube: '',
                webSite: 'carlosruggeri.com.br/',
                email: 'CONTATO@CARLOSRUGGERI.COM.BR'
            }
        },
        {
            nome: 'Ana Carolina Morais Sales',
            cidade: 'Natal-RN',
            imagem: 'perfil_ana.jpg',
            texto: `
            <h4>
                "Quem mata o tempo não é assassino, é suicida." Millôr Fernandes
            </h4>              
            <p>
                Psicóloga, Especialista em Gestão de Projetos, Mestre em Psicologia e Mentora em Produtividade certificada pela TriadPS.
            </p>
            <p>
                A gente adia a visita, a conversa, a saúde, os planos e os sonhos. Adia a reunião de pais, as brincadeiras e os sorrisos compartilhados. E a vida vai ficando para trás. E todo dia a gente afirma para si mesmo que ainda tem muito tempo, até não ter mais! Você tem tempo para o que é importante para você?
            </p>
            `,
            redesSociais: {
                whatsApp: '84999270011',
                instagram: 'carolmsales',
                facebook: '',
                twitter: '',
                linkedin: '',
                youTube: '',
                webSite: '',
                email: 'carolmsalesprodutividade@gmail.com'
            }
        },
        {
            nome: 'Tatiana Arkader Skaba',
            cidade: 'Rio de Janeiro-RJ',
            imagem: 'perfil_tatiana.jpg',
            texto: `
            <h4>
                "O valor das coisas não está no tempo que elas duram, mas na intensidade com que acontecem. Por isso existem momentos inesquecíveis, coisas inexplicáveis e pessoas incomparáveis." Fernando Sabino
            </h4>              
            <p>
                Tatiana é Especialista a frente da OPIMO, que visa, através de consultoria e mentoria de Organização e Produtividade, levar conhecimento e direcionamento para estruturação e construção de uma base sólida para novos empreendedores e profissionais, com soluções voltadas para organização empresarial e Pessoal em todas as áreas da sua vida.
            </p>
            <p>
                Certificada TriadMentor, Profissional de Organização, com Pós em Marketing pelo IBMEC e Formada em Design pela UFRJ, possui mais de 15 anos de experiência em planejar, criar, desenvolver projetos e gerenciar. Empreendedora e sócia em várias empresas, desenvolveu uma versatilidade por já ter vivenciado diversas funções envolvendo Design, Produtos, Administração, Finanças, Contabilidade, Departamento Pessoal, Gestão, entre outras facetas que ser uma empresária requer.
            </p>
            <p>
                As experiências e habilidades que foram desenvolvidas em meio às necessidades reais me tornaram o profissional que sou hoje com forte senso visual e habilidade de traduzir ideias e conceitos em qualquer nível organizacional e pessoal de forma dinâmica e inovadora.
            </p>
            `,
            redesSociais: {
                whatsApp: '21965786661',
                instagram: 'opimo.organizacaoprodutividade',
                facebook: '',
                twitter: '',
                linkedin: 'https://www.linkedin.com/in/tatiskaba/',
                youTube: '',
                webSite: 'www.opimopop.com.br',
                email: 'tatiana.skaba@opimopop.com.br'
            }
        },
        {
            nome: ' Natalia Zanardi Ortiz',
            cidade: 'São Paulo-SP',
            imagem: 'perfil_natalia.jpg',
            texto: `
                <h4>
                    Uma empresa que defende a ideia de que o IMPORTANTE, é saber PRIORIZAR aquilo que te faz FELIZ!
                </h4>
                <p>
                    Desde 2005 atuando no mercado como Profissional de Organização, inicialmente realizava projetos de organização de residências, ambientes e documentos.
                </p>
                <p>
                    Em 2011 nasceu a NZO | Mentoria em Organização, empresa que tem como pilar principal a Mentoria em Organização Pessoal.
                </p>
                <p>
                    Formada em Artes Plásticas participou de exposições em todo o estado de São Paulo, sempre acreditando que QUEM TRABALHA COM O QUE AMA FAZER, NUNCA TERÁ UM EMPREGO, MAS UMA VIDA PROFISSIONAL! 
                </p>
                <p>
                    No entanto, a paixão pela organização acompanha sua vida desde a infância, e foi em 2007 que decidiu transformar esta paixão, que poderia até chamar de “hobby”, em sua principal atuação profissional. Desde então vem estudando, pesquisando e se especializando nos melhores cursos do Brasil, até conquistar a certificação que trouxe um novo patamar em sua trajetória – Triad Mentor!
                </p>     
                <p>
                    Com dois livros publicados, é com grande satisfação que transforma sua própria VIDA PROFISSIONAL, numa constante busca de ferramentas e recursos, que possam levar a todos os profissionais que cruzam seu caminho, a satisfação de conquistar uma vida EQUILIBRADA.
                </p>                   
           `,
            redesSociais: {
                whatsApp: '11963994934',
                instagram: 'nzo_natalia_zanardi_ortiz',
                facebook: '',
                twitter: '',
                linkedin: 'nataliazanardiortiz',
                youTube: '',
                webSite: '',
                email: 'natalia@nzo.com.br'
            }
        },
        {
            nome: 'Fabiano Crozariol',
            cidade: 'Taubaté-SP',
            imagem: 'perfil_fabiano.jpeg',
            texto: `
                <h4>
                    Quem escolhe o que fazer com cada segundo da sua vida é você!
                </h4>
                <p>
                    Mentor em Produtividade certificado pela TriadPS, Formado em Direito pela UNITAU, Pós-graduado em Gestão Estratégica e Econômica de Negócios pela FGV, Empresário e Professor de capoeira, nascido na cidade de Taubaté-SP, reúno as competências e conhecimentos necessários para contribuir com a construção do seu caminho de sucesso.
                </p>
           `,
            redesSociais: {
                whatsApp: '12991648321',
                instagram: '',
                facebook: '',
                twitter: '',
                linkedin: 'fabiano-crozariol-mentor-de-produtividade',
                youTube: '',
                webSite: 'www.fabianocrozariol.com.br',
                email: 'contato@fabianocrozariol.com.br'
            }
        },
        {
            nome: 'Josivaldo dos Santos',
            cidade: 'Tangará da Serra-MT',
            imagem: 'perfil_josivaldo.jpeg',
            texto: `
                <h4>
                Resiliência é a busca incessante para a superação.
                </h4>
                <p>
                Técnico de segurança do trabalho - com formação desde 1999, atuando em diversos ramos de empresas como consultoria, indústria de alimentos e madeiras;
                </p>
                <p>
                Administrador de empresas desde 2005, com especialização em liderança e coaching (2017) - atuando como gestor em indústrias de alimentos nas áreas de operações e produção; 
                </p>
                <p>
                Engenheiro de produção com especialização em engenharia de segurança do trabalho, desde 2014 - com atuação nas duas áreas como gestor de produção e de segurança do trabalho em empresas do ramo do agronegócio e alimentos;
                </p>
                <p>
                Palestrante Motivacional desde 2017 em empresas, escolas, universidades e outras entidades;
                </p>
                <p>
                Coach e Mentor em Produtividade desde 2019, único especialista do MT formado em Mentoria de Produtividade pessoal, certificado pela empresa Tríade PS.
                </p>
           `,
            redesSociais: {
                whatsApp: '659667-7538',
                instagram: '@josivaldopalestrante',
                facebook: 'josivaldo.santos.505',
                twitter: '',
                linkedin: 'josivaldo-dos-santos-71568736',
                youTube: '',
                webSite: '',
                email: 'josivaldo383@gmail.com'
            }
        }
    ];
    var numeroMentores = Object.keys(listaDeMentores).length,
        redes;
    let lista = '';
    listaDeMentores = embaralhar(listaDeMentores);
    i = 0;
    while (i <= numeroMentores - 1) {
        redes = "";
        if (listaDeMentores[i].redesSociais.instagram != "") {
            redes += ` 
               <a href="https://www.instagram.com/${listaDeMentores[i].redesSociais.instagram}/" target="_blank" rel="noopener noreferrer">
                   <i class="button__bordaIcone center-xs middle-xs fab fa-instagram"></i>
               </a>`;
        }
        if (listaDeMentores[i].redesSociais.linkedin != "") {
            redes += `   
               <a href="https://www.linkedin.com/in/${listaDeMentores[i].redesSociais.linkedin}" target="_blank" rel="noopener noreferrer">
                   <i class="button__bordaIcone center-xs middle-xs fab fa-linkedin-in"></i>
               </a>`
        }
        if (listaDeMentores[i].redesSociais.facebook != "") {
            redes += `   
               <a href="https://www.facebook.com/${listaDeMentores[i].redesSociais.facebook}" target="_blank" rel="noopener noreferrer">
                   <i class="button__bordaIcone center-xs middle-xs fab fa-facebook-f"></i>
               </a>`
        }
        if (listaDeMentores[i].redesSociais.twitter != "") {
            redes += `   
               <a href="https://twitter.com/${listaDeMentores[i].redesSociais.twitter}" target="_blank" rel="noopener noreferrer">
                   <i class="button__bordaIcone center-xs middle-xs fab fa-twitter"></i>
               </a>`
        }
        if (listaDeMentores[i].redesSociais.youTube != "") {
            redes += `   
               <a href="https://www.youtube.com/channel/${listaDeMentores[i].redesSociais.youTube}" target="_blank" rel="noopener noreferrer">
                   <i class="button__bordaIcone center-xs middle-xs fab fa-youtube"></i>
               </a>`
        }
        if (listaDeMentores[i].redesSociais.webSite != "") {
            redes += `   
               <a href="https://${listaDeMentores[i].redesSociais.webSite}" target="_blank" rel="noopener noreferrer">
                   <i class="button__bordaIcone center-xs middle-xs fas fa-globe-americas"></i>
               </a>`
        }
        if (listaDeMentores[i].redesSociais.email != "") {
            redes += `   
               <a href="mailto:${listaDeMentores[i].redesSociais.email}" target="_blank" rel="noopener noreferrer">
                   <i class="button__bordaIcone center-xs middle-xs far fa-envelope"></i>
               </a>`
        }
        let mentor = `
       <li class="ul__li li col-xs-12 col-sm-4 col-xl-3 center-xs selecionador" data-cidade="${listaDeMentores[i].cidade}" data-nome="${listaDeMentores[i].nome}">
           <div class="li__borda center-xs middle-xs">
               <img src="img/${listaDeMentores[i].imagem}"
                   alt="">
           </div>
           <h2 class="li__nome">
               ${listaDeMentores[i].nome}
           </h2>
           <h4 class="li__cidade">
               ${listaDeMentores[i].cidade}
           </h4>
           <div class="collapsible-header button button--vermelho start-xs middle-xs"
               onclick="mudaNome(this)">
               <div class="button__texto">
                   Mais Informações
               </div>
               <i class="button__bordaIcone center-xs middle-xs fas fa-plus"></i>
           </div>
           <div class="collapsible-body">
               <div class="li__descricao start-sm">
                   ${listaDeMentores[i].texto}
               </div>
               <div class="li__contato button button--verde">
                   <a href="https://api.whatsapp.com/send?phone=55${listaDeMentores[i].redesSociais.whatsApp}" target="_blank" class="button__texto button__texto--contato">
                       WhatsApp
                   </a>
               </div>
               <div class="li__redes">
                   ${redes}
               </div>
           </div>
       </li>
       `;
        lista += mentor;
        i++;
    }
    document.getElementById('sectionResultado__ul').innerHTML = lista
}
// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });