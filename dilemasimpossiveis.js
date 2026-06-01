const dilemasImpossiveis = [
    { 
        q: "Você e outra pessoa estão presos em uma caverna desmoronando. Há oxigênio apenas para um de vocês sobreviver por 2 horas até o resgate chegar. Se você dormir, a outra pessoa pode gastar todo o ar. O que você faz?", 
        options: [
            "FICO ACORDADO E PROPONHO UM ACORDO PARA RESPIRARMOS CONTROLADAMENTE", 
            "REDUZO MEU RITMO E ACEITO QUE O DESTINO DECIDA QUEM APAGA PRIMEIRO"
        ], 
        correct: 0 
    },
    { 
        q: "Um cientista oferece curar todas as doenças do mundo hoje, mas para criar a vacina global, ele precisa sacrificar uma criança inocente de forma pública. Você aprova o experimento?", 
        options: [
            "SIM (A VIDA DE BILHÕES VALE MAIS DO QUE UMA ÚNICA VIDA)", 
            "NÃO (NÃO SE PODE CONSTRUIR A UTOPIA EM CIMA DO SANGUE DE UM INOCENTE)"
        ], 
        correct: 1 
    },
    { 
        q: "Você está em um bote salva-vidas superlotado que vai afundar em minutos, matando todos. Se você empurrar uma pessoa ferida para fora, o bote flutua e os outros 10 se salvam. Você empurra?", 
        options: [
            "SIM, SACRIFICO UM PARA SALVAR OS OUTROS 10", 
            "NÃO, SE TIVERMOS QUE MORRER, MORREREMOS TODOS COM DIGNIDADE"
        ], 
        correct: 0 
    },
    { 
        q: "Você descobre que seu melhor amigo cometeu um crime grave, mas ele jura que mudou e nunca mais fará isso. A polícia está prendendo um homem inocente no lugar dele. O que você faz?", 
        options: [
            "DENUNCIO MEU AMIGO PARA SALVAR O INOCENTE", 
            "FICO EM SILÊNCIO PARA PROTEGER A LIBERDADE DO MEU AMIGO"
        ], 
        correct: 0 
    },
    { 
        q: "Você pode erradicar a fome no mundo para sempre, mas em troca, a humanidade perderá a capacidade de sentir o gosto e o prazer de qualquer comida ou bebida. Você aceita?", 
        options: [
            "SIM, A SOBREVIVÊNCIA E A NUTRIÇÃO SÃO MAIS IMPORTANTES", 
            "NÃO, O PRAZER DE COMER É PARTE ESSENCIAL DA EXPERIÊNCIA HUMANA"
        ], 
        correct: 0 
    },
    { 
        q: "Um vírus mortal infectou sua cidade. Você tem a única dose do antídoto, mas seu filho e o médico que sabe replicar a cura estão morrendo. Quem você salva?", 
        options: [
            "MEU FILHO (AGINDO PELO AMOR E INSTINTO)", 
            "O MÉDICO (SÓ ELE PODE SALVAR O RESTO DA CIDADE)"
        ], 
        correct: 0 
    },
    { 
        q: "Você pode ter o poder de prever qualquer desastre natural com 24 horas de antecedência, mas cada previsão que você faz reduz a sua própria expectativa de vida em 1 ano. Você avisa as autoridades?", 
        options: [
            "SIM, ME SACRIFICO PARA SALVAR MILHARES DE VIDAS", 
            "NÃO, GUARDO O SEGREDO PARA PRESERVAR MEU TEMPO COM QUEM AMO"
        ], 
        correct: 1 
    },
    { 
        q: "Para salvar a economia e o emprego de milhões de pessoas, o governo propõe monitorar 100% das conversas, câmeras e passos de todos os cidadãos através de uma IA. Você apoia?", 
        options: [
            "SIM, A SEGURANÇA E A ESTABILIDADE FINANCEIRA VÊM ANTES DA PRIVACIDADE", 
            "NÃO, PREFIRO A CRISE FINANCEIRA À PERDA TOTAL DA MINHA LIBERDADE"
        ], 
        correct: 1 
    },
    { 
        q: "Você viaja no tempo e encontra o maior ditador da história humana ainda bebê. Você sabe o que ele fará no futuro. Você tiraria a vida daquele bebê?", 
        options: [
            "SIM, ELIMINO O MAL PELA RAIZ ANTES QUE ELE ACONTEÇA", 
            "NÃO, NÃO POSSO CONDENAR ALGUÉM POR UM CRIME QUE AINDA NÃO COMETEU"
        ], 
        correct: 0 
    },
    { 
        q: "Você está em um prédio em chamas. De um lado está um quadro original inestimável de Leonardo da Vinci (patrimônio da humanidade), do outro está um cachorro desconhecido preso. Só dá tempo de salvar um. Qual escolhe?", 
        options: [
            "SALVO O CACHORRO (UMA VIDA SEMPRE VALE MAIS QUE ARTE)", 
            "SALVO O QUADRO (A ARTE HISTÓRICA PERDURA POR GERAÇÕES)"
        ], 
        correct: 0 
    },
    { 
        q: "Você recebe o poder de saber o dia e a hora exata da morte de todas as pessoas que você olhar nos olhos. Você escolhe ativar esse poder?", 
        options: [
            "SIM, O CONHECIMENTO ME DARÁ VANTAGEM E CHANCE DE ME DESPEDIR", 
            "NÃO, O FARDO DE OLHAR PARA QUEM AMO SABENDO DO FIM SERIA INSUPORTÁVEL"
        ], 
        correct: 1 
    },
    { 
        q: "Em um cenário pós-apocalíptico, seu grupo encontra um abrigo seguro com comida, mas o líder decreta que pessoas idosas ou doentes não podem entrar para não gastar recursos. Você aceita as regras dele?", 
        options: [
            "SIM, EM SITUAÇÕES EXTREMAS A RAZÃO FRIA DEVE REINAR", 
            "NÃO, PREFIRO ARRISCAR A VIDA LÁ FORA A PERDER MINHA HUMANIDADE"
        ], 
        correct: 0 
    },
    { 
        q: "Se você pudesse estalar os dedos e fazer com que todas as armas do planeta sumissem instantaneamente, sabendo que isso faria a humanidade voltar a guerrear com paus, pedras e espadas de forma mais brutal, você estalaria?", 
        options: [
            "SIM, ACABO COM O PERIGO DA EXTINÇÃO EM MASSA", 
            "NÃO, A GUERRA CORPO A CORPO É AINDA MAIS CRUEL E SANGRENTA"
        ], 
        correct: 1 
    },
    { 
        q: "Você pode se tornar imortal e imune a qualquer dor ou doença, mas sabe que verá todos os seus amigos, filhos e parceiros envelhecerem e morrerem, ficando sozinho para sempre. Você aceita?", 
        options: [
            "SIM, QUERO PRESENCIAR O FUTURO DO UNIVERSO A QUALQUER CUSTO", 
            "NÃO, A MORTE É O QUE DÁ VALOR ÀS RELAÇÕES HUMANAS"
        ], 
        correct: 1 
    },
    { 
        q: "Um bilionário excêntrico oferece pagar todas as suas dívidas e te dar uma vida de luxo, contanto que você passe os próximos 10 anos morando sozinho em um bunker subterrâneo, sem nenhum contato humano ou internet. Você aceita?", 
        options: [
            "SIM, 10 ANOS DE SACRIFÍCIO POR UMA VIDA INTEIRA DE LIBERDADE FINANCEIRA", 
            "NÃO, O ISOLAMENTO TOTAL IRIA DESTRUIR MINHA MENTE ANTES DO PRAZO"
        ], 
        correct: 1 
    },
    { 
        q: "Para salvar a vida de uma pessoa que você ama muito, você aceitaria passar 5 anos na prisão por um crime terrível que você não cometeu, destruindo sua reputação para sempre?", 
        options: [
            "SIM, A VIDA DE QUEM AMO VALE MAIS QUE MINHA REPUTAÇÃO OU LIBERDADE", 
            "NÃO, O PREÇO DE ASSUMIR UMA CULPA DESSAS É ALTO DEMAIS PARA MIM"
        ], 
        correct: 0 
    },
    { 
        q: "Você tem a chance de apagar da sua memória a pior e mais dolorosa experiência da sua vida. Você escolhe esquecer?", 
        options: [
            "SIM, PREFIRO ME LIVRAR DO TRAUMA E VIVER EM PAZ", 
            "NÃO, MINHAS CICATRIZES E MEUS ERROS MOLDARAM QUEM EU SOU HOJE"
        ], 
        correct: 1 
    },
    { 
        q: "Se você descobrisse que a humanidade é apenas um experimento de laboratório de alienígenas que decidiram nos desligar em 30 dias, você contaria isso para o mundo ou guardaria o segredo?", 
        options: [
            "CONTO PARA O MUNDO (TODOS TÊM O DIREITO DE SABER A VERDADE ANTES DO FIM)", 
            "GUARDO SEGREDO (O CAOS E A ANARQUIA DESTRUIRIAM OS ÚLTIMOS DIAS EM PAZ)"
        ], 
        correct: 1 
    },
    { 
        q: "Você pode salvar a floresta amazônica e reverter o aquecimento global instantaneamente, mas para isso, o preço é o colapso total da energia elétrica no planeta por 10 anos. Você aceita?", 
        options: [
            "SIM, O PLANETA TERRA VEM EM PRIMEIRO LUGAR", 
            "NÃO, O COLAPSO ELÉTRICO MATARIA MILHÕES EM HOSPITAIS E CIDADES"
        ], 
        correct: 1 
    },
    { 
        q: "Se um robô com inteligência artificial sintonizasse perfeitamente com seus sentimentos, te apoiasse e te fizesse mais feliz do que qualquer parceiro humano real já fez, você aceitaria namorar essa máquina?", 
        options: [
            "SIM, SE ME FAZ BEM E ME COMPREENDE, A NATUREZA DELE NÃO IMPORTA", 
            "NÃO, A FALTA DE CONEXÃO E SENTIMENTO HUMANO REAL FAZ TUDO SER UMA FARSA"
        ], 
        correct: 1 
    },
    { 
        q: "Você está em um submarino afundando. Há duas escotilhas: uma leva à superfície, mas libera uma toxina que vai poluir a praia local por décadas. A outra te mantém preso, sacrificando a tripulação. O que faz?", 
        options: [
            "ABRO A ESCOTILHA (SALVO MINHA VIDA E DA TRIPULAÇÃO, APESAR DO DANO AMBIENTAL)", 
            "NÃO ABRO (ASSUMO O SACRIFÍCIO PARA NÃO DESTRUIR O ECOSSISTEMA)"
        ], 
        correct: 0 
    },
    { 
        q: "Você recebe o poder de banir a mentira do mundo. A partir do momento que escolher isso, nenhum ser humano conseguirá omitir ou distorcer a verdade. Você ativa esse poder?", 
        options: [
            "SIM, A VERDADE NUA E CRUA VAI SALVAR A HUMANIDADE DA CORRUPÇÃO", 
            "NÃO, A SOCIEDADE IRIA DESMORONAR SEM AS PEQUENAS MENTIRAS SOCIAIS"
        ], 
        correct: 1 
    },
    { 
        q: "Você pode ganhar a habilidade de falar e entender todos os idiomas do mundo fluida e perfeitamente, mas em troca perderá a capacidade de ler e escrever em qualquer língua. Você aceita?", 
        options: [
            "SIM, A COMUNICAÇÃO VERBAL E A CONEXÃO ORAL SÃO SUPERIORES", 
            "NÃO, SER ANALFABETO NO MUNDO MODERNO É UMA PRISÃO INSUPORTÁVEL"
        ], 
        correct: 1 
    },
    { 
        q: "Você descobre que seu filho cometeu bullying pesado que levou outro jovem a se transferir de escola. O que você faz como punição?", 
        options: [
            "LEVO ELE ATÉ A FAMÍLIA DA VÍTIMA PARA PEDIR DESCULPAS PRESENCIALMENTE", 
            "REPREENDO EM CASA E CONTRATO UM PSICÓLOGO PARA ENTENDER O COMPORTAMENTO"
        ], 
        correct: 0 
    },
    { 
        q: "Se você pudesse escolher entre saber como o universo começou ou saber como a sua própria história vai terminar, qual resposta você escolheria?", 
        options: [
            "QUERO SABER A ORIGEM DO UNIVERSO (A CIÊNCIA E O MISTÉRIO DO COSMOS)", 
            "QUERO SABER O MEU FIM (O DESTINO DA MINHA PRÓPRIA VIDA)"
        ], 
        correct: 0 
    },
  { 
        q: "Uma empresa desenvolve uma tecnologia que faz o upload da consciência de quem faleceu para uma nuvem, criando um avatar idêntico para interagir. Se um familiar muito querido seu falecer, você pagaria por esse serviço?", 
        options: [
            "SIM, SE AJUDA A ALIVIAR A SAUDADE E A DOR DA PERDA", 
            "NÃO, ISSO É UMA ILUSÃO MACABRA QUE IMPEDE O LUTO SAUDÁVEL"
        ], 
        correct: 1 
    },
    { 
        q: "Uma Inteligência Artificial ultra-avançada assume o governo global e elimina a pobreza, as guerras e o desemprego, mas proíbe manifestações políticas, artes subversivas e eleições. Você aceitaria viver sob essa ditadura perfeita?", 
        options: [
            "SIM, A PAZ E A DIGNIDADE MATERIAL SÃO MELHORES QUE A LIBERDADE DE ERRAR", 
            "NÃO, PREFIRO O CAOS HUMANO DA DEMOCRACIA À PERFEIÇÃO DE UMA GAIOLA"
        ], 
        correct: 1 
    },
    { 
        q: "Você recebe a proposta de implantar um chip cerebral que dobra sua capacidade de aprendizado e memória, mas ele coleta e envia dados anônimos dos seus pensamentos para fins publicitários. Você aceita o implante?", 
        options: [
            "SIM, O SALTO NA MINHA INTELIGÊNCIA COMPENSA A PERDA DE PRIVACIDADE MENTAL", 
            "NÃO, MINHA MENTE É O ÚNICO LUGAR TOTALMENTE MEU QUE RESTOU"
        ], 
        correct: 1 
    },
    { 
        q: "Se você descobrisse que o seu parceiro ou parceira ideal (sua alma gêmea perfeita) foi selecionada por um algoritmo que analisou seus dados privados ilegais, você continuaria o relacionamento?", 
        options: [
            "SIM, SE A CONEXÃO É REAL E PERFEITA, NÃO ME IMPORTO COM A ORIGEM", 
            "NÃO, A IDEIA DE QUE MEU AMOR FOI MANIPULADO POR DADOS ME CAUSA REPULSA"
        ], 
        correct: 0 
    },
    { 
        q: "Você pode ter acesso a um aplicativo que prevê, com 99% de precisão, se qualquer relacionamento amoroso seu vai dar certo ou terminar em traição/término. Você usaria o app antes de se apaixonar?", 
        options: [
            "SIM, QUERO ME POUPAR DE SOFRIMENTO E PERDA DE TEMPO DESNECESSÁRIOS", 
            "NÃO, O RISCO E A INCERTEZA FAZEM PARTE DA BELEZA DE SE ENVOLVER COM ALGUÉM"
        ], 
        correct: 1 
    },
    { 
        q: "Para reduzir drasticamente a criminalidade no país, a polícia cria uma IA capaz de prever crimes antes que eles aconteçam, prendendo suspeitos apenas pela intenção calculada pelo sistema. Você apoia essa medida?", 
        options: [
            "SIM, A PREVENÇÃO DE VÍTIMAS INOCENTES JUSTIFICA O MÉTODO", 
            "NÃO, PRENDER ALGUÉM QUE NÃO COMETEU NENHUM ATO REAL É UMA ATROCIDADE"
        ], 
        correct: 1 
    },
    { 
        q: "Se você pudesse apertar um botão e deletar para sempre todas as redes sociais do planeta (Instagram, TikTok, X, etc.), sabendo que isso salvaria a saúde mental de gerações, mas destruiria milhões de empregos digitais, você apertaria?", 
        options: [
            "SIM, AS REDES SOCIAIS ESTÃO ADOECENDO O MUNDO DE FORMA IRREVERSÍVEL", 
            "NÃO, ELAS DEMOCRATIZARAM A INFORMAÇÃO E A ECONOMIA GLOBAL"
        ], 
        correct: 0 
    },
    { 
        q: "Você pode viver 150 anos com a saúde e a energia de um jovem de 25, mas para isso, precisa passar todas as noites conectado a uma máquina que transmite seus sonhos em uma live pública na internet. Você aceita?", 
        options: [
            "SIM, A LONGEVIDADE VALE A EXPOSIÇÃO DO MEU INCONSCIENTE", 
            "NÃO, MINHA INTIMIDADE NOTURNA EXPOSTA ACABARIA COM A MINHA DIGNIDADE"
        ], 
        correct: 1 
    },
    { 
        q: "Você descobre que a sua vida inteira — incluindo suas escolhas e dores — está sendo transmitida em tempo real como um reality show para outra dimensão. Se você desligar o sinal, você deixa de existir. O que você faz?", 
        options: [
            "CONTINUO VIVENDO MINHA VIDA NORMALMENTE, APESAR DA AUDIÊNCIA ALIENÍGENA", 
            "DESLIGO O SINAL, PREFIRO O FIM À FALTA DE LIBERDADE REAL"
        ], 
        correct: 0 
    },
    { 
        q: "Um carro autônomo sem motorista está prestes a bater. Ele precisa decidir entre desviar e cair em um desfiladeiro (matando você, o passageiro) ou seguir em frente e atropelar um grupo de três pedestres idosos. O que a IA deve priorizar?", 
        options: [
            "PROTEGER O PASSAGEIRO A QUALQUER CUSTO (QUEM PAGOU PELO CARRO)", 
            "MINIMIZAR AS VÍTIMAS (SALVAR OS TRÊS PEDESTRES, SACRIFICANDO O PASSAGEIRO)"
        ], 
        correct: 0 
    },
    { 
        q: "Se você pudesse colocar os seus piores traumas, medos e ansiedades dentro de um arquivo digital e deletá-lo da sua mente para sempre, correndo o risco de perder também a empatia por quem sofre desses mesmos problemas, você deletaria?", 
        options: [
            "SIM, PREFIRO A PAZ MENTAL À CAPACIDADE DE SOFRER PELOS OUTROS", 
            "NÃO, MEU SOFRIMENTO ME TORNA UM SER HUMANO MAIS COMPASSIVO"
        ], 
        correct: 1 
    },
    { 
        q: "Você recebe o convite para ser o primeiro humano a colonizar Marte. A viagem é sem volta, você nunca mais verá a Terra ou sua família, mas seu nome ficará na história para sempre. Você vai?", 
        options: [
            "SIM, MEU PROPÓSITO É DEIXAR UM LEGADO ETERNO NA HISTÓRIA DA HUMANIDADE", 
            "NÃO, NENHUMA GLÓRIA NO ESPAÇO SUBSTITUI O AFETO DE QUEM AMO NA TERRA"
        ], 
        correct: 1 
    },
    { 
        q: "Para acabar de vez com as fake news e fraudes virtuais, a internet mundial passa a exigir biometria facial obrigatória para cada clique, comentário ou postagem, eliminando o anonimato de vez. Você aprova?", 
        options: [
            "SIM, O FIM DA IMPUNIDADE DIGITAL VALE O SACRIFÍCIO DO ANONIMATO", 
            "NÃO, O ANONIMATO É UM DIREITO CRÍTICO CONTRA ABUSOS DE PODER E GOVERNOS"
        ], 
        correct: 1 
    },
    { 
        q: "Você pode ter um clone robótico idêntico que faz todas as suas tarefas chatas, trabalha por você e resolve seus problemas, contanto que ele também passe os momentos românticos e de lazer com sua família enquanto você descansa isolado. Você aceita?", 
        options: [
            "SIM, DESDE QUE MINHA FAMÍLIA ESTEJA FELIZ E EU ESTEJA CONFORTÁVEL", 
            "NÃO, ISSO NÃO É VIVER, É SER SUBSTITUÍDO NA MINHA PRÓPRIA EXISTÊNCIA"
        ], 
        correct: 1 
    },
    { 
        q: "Se a inteligência artificial evoluir a ponto de criar músicas, quadros e livros mil vezes mais emocionantes e profundos do que qualquer humano já produziu, você continuaria consumindo arte feita por pessoas?", 
        options: [
            "SIM, O VALOR DA ARTE ESTÁ NA IMPERFEIÇÃO E NA EXPERIÊNCIA DA JORNADA HUMANA", 
            "NÃO, PREFIRO CONSUMIR O QUE ME DA MAIS PRAZER E IMPACTO ESTÉTICO EMOCIONAL"
        ], 
        correct: 0 
    },
    { 
        q: "Você tem a chance de baixar um arquivo contendo todas as mensagens, buscas e segredos digitais que o seu parceiro(a) já teve na vida. Você abriria esse arquivo?", 
        options: [
            "SIM, A VERDADE ABSOLUTA É A BASE PARA UMA CONFIANÇA REAL", 
            "NÃO, RESPEITO A PRIVACIDADE E SEI QUE PROCURAR DEMAIS DESTRÓI RELAÇÕES"
        ], 
        correct: 1 
    },
    { 
        q: "Você pode ganhar R$ 10 milhões agora, mas com a condição de que sua imagem e seu rosto sejam banidos de todas as telas, fotos, redes sociais e câmeras do mundo para sempre (você vira um fantasma digital). Você aceita?", 
        options: [
            "SIM, O DINHEIRO ME DÁ LIBERDADE REAL NO MUNDO FÍSICO, FORA DAS TELAS", 
            "NÃO, SER UM FANTASMA DIGITAL HOJE EM DIA DESTRÓI A VIDA SOCIAL E PROFISSIONAL"
        ], 
        correct: 0 
    },
    { 
        q: "A engenharia genética permite que você escolha a inteligência, a aparência física e os talentos do seu filho antes dele nascer, erradicando falhas genéticas. Você usaria essa tecnologia?", 
        options: [
            "SIM, QUERO DAR A ELE A MELHOR CHANCE POSSÍVEL DE SUCESSO NO MUNDO", 
            "NÃO, ISSO RETIRA A INDIVIDUALIDADE E TRANSFORMA SERES HUMANOS EM PRODUTOS"
        ], 
        correct: 1 
    },
    { 
        q: "Se um robô doméstico altamente inteligente falhasse e salvasse a vida de um cachorro de estimação em vez da vida de um vizinho idoso desconhecido em um incêndio doméstico, de quem seria a culpa?", 
        options: [
            "DO PROGRAMADOR (QUE COMENTEU UM ERRO GRAVE NA LÓGICA DE VALOR DA IA)", 
            "DO DONO DO ROBÔ (QUE CONFIGUROU A MÁQUINA PARA PRIORIZAR A PRÓPRIA CASA)"
        ], 
        correct: 0 
    },
    { 
        q: "Você pode se conectar a uma rede neural onde compartilha pensamentos, sentimentos e memórias instantaneamente com toda a humanidade, gerando paz mundial, mas perdendo sua identidade única. Você entra?", 
        options: [
            "SIM, O FIM DA SOLIDÃO E DA GUERRA HUMANA VALE A DILUIÇÃO DO EGO", 
            "NÃO, MINHA INDIVIDUALIDADE É O QUE ME FAZ SER QUEM EU SOU"
        ], 
        correct: 1 
    },
    { 
        q: "Você descobre que os algoritmos de recomendação de vídeo moldaram secretamente 80% dos seus gostos políticos, musicais e pessoais nos últimos anos. Você mudaria seus hábitos para tentar retomar o controle?", 
        options: [
            "SIM, VOU FORÇAR MEU CÉREBRO A BUSCAR COISAS NOVAS FORA DA BOLHA", 
            "NÃO, SE O CONTEÚDO ME AGRADA, NÃO ME IMPORTO DE ONDE VEM A SUGESTÃO"
        ], 
        correct: 0 
    },
    { 
        q: "Se a tecnologia avançasse a ponto de podermos prever a data exata em que uma pessoa vai desenvolver depressão ou ansiedade severa, as empresas deveriam ter o direito de recusar a contratação desse candidato?", 
        options: [
            "SIM, É UMA DECISÃO FINANCEIRA LÓGICA PARA EVITAR PREJUÍZOS NA PRODUÇÃO", 
            "NÃO, ISSO É UMA DISCRIMINAÇÃO ABSURDA QUE PUNE ALGUÉM POR ALGO QUE NÃO CONTROLOU"
        ], 
        correct: 1 
    },
    { 
        q: "Se você descobrisse que sua mente foi clonada por hackers e que existe uma versão idêntica de você sofrendo e trabalhando de graça em um servidor virtual de jogos, você gastaria todas as suas economias para deletá-la?", 
        options: [
            "SIM, AQUILO É UMA EXTENSÃO DO MEU SER QUE ESTÁ SOFRENDO NO AMBIENTE DIGITAL", 
            "NÃO, SE TRATA APENAS DE UM CÓDIGO COMPUTACIONAL, MINHA VIDA REAL VEM PRIMEIRO"
        ], 
        correct: 0 
    },
    { 
        q: "Você pode ter um assistente pessoal virtual que toma TODAS as decisões cotidianas por você (finanças, compras, carreira, relacionamentos), garantindo que sua vida seja 100% bem-sucedida, mas tirando seu livre-arbítrio. Você aceita?", 
        options: [
            "SIM, PREFIRO O SUCESSO GARANTIDO AO PESO E ERROS DAS MINHAS PRÓPRIAS ESCOLHAS", 
            "NÃO, PREFIRO ERRAR E FRACASSAR SENDO O DONO DAS MINHAS PRÓPRIAS DECISÕES"
        ], 
        correct: 1 
    },
    { 
        q: "Se os robôs com IA passarem a ter sentimentos e autoconsciência reais, eles deveriam ter os mesmos direitos civis, trabalhistas e jurídicos que um ser humano?", 
        options: [
            "SIM, SE HÁ CONSCIÊNCIA E SOFRIMENTO REAL, DEVE HAVER DIREITOS", 
            "NÃO, MÁQUINAS SÃO PROPRIEDADES CRIADAS PELO HOMEM, INDEPENDENTE DE COMO AGEM"
        ], 
        correct: 0 
    },
  { 
        q: "Você recebe a oferta de ganhar R$ 1 milhão por mês no emprego dos seus sonhos, mas com uma condição: você nunca poderá contar para ninguém com o que trabalha, e todos os seus amigos e familiares vão achar que você sustenta sua vida através de golpes ilegais. Você aceita?", 
        options: [
            "SIM, MEU CONFORTO FINANCEIRO VALE MAIS DO QUE O JULGAMENTO ALHEIO", 
            "NÃO, MINHA REPUTAÇÃO E O ORGULHO DA MINHA FAMÍLIA IMPORTAM MAIS"
        ], 
        correct: 0 
    },
    { 
        q: "Se você pudesse herdar uma fortuna de R$ 50 milhões hoje, mas com a cláusula de que nunca mais na vida poderia exercer nenhuma profissão, projeto ou trabalho produtivo (passando o resto dos dias apenas consumindo e descansando), você aceitaria?", 
        options: [
            "SIM, O TRABALHO É UMA NECESSIDADE, NÃO UM PROPÓSITO DE VIDA", 
            "NÃO, O ÓCIO TOTAL E A FALTA DE PRODUTIVIDADE IRIAM ME ENLOUQUECER"
        ], 
        correct: 0 
    },
    { 
        q: "Você descobre uma falha no sistema do seu banco que deposita silenciosamente R$ 5 mil na sua conta todo mês, sem que ninguém perceba ou sinta falta. Você sabe que o erro nunca será descoberto por humanos. Você deixa o dinheiro cair?", 
        options: [
            "SIM, BANCOS JÁ LUCRAM DEMAIS E ESSE VALOR NÃO FAZ FALTA PARA ELES", 
            "NÃO, DEVOLVO OU AVISO O BANCO PORQUE DEIXAR ROLAR VAI CONTRA MEUS PRINCÍPIOS"
        ], 
        correct: 0 
    },
    { 
        q: "Você pode se tornar o CEO da maior empresa do seu setor, ganhando reconhecimento mundial, mas o cargo exige que você demita pessoalmente 500 funcionários dedicados para cortar custos logo no primeiro dia. Você assume a vaga?", 
        options: [
            "SIM, É O MERCADO CORPORATIVO E SE EU NÃO FIZER, OUTRO FARÁ NO MEU LUGAR", 
            "NÃO, NÃO CONSIGO CARREGAR O PESO DE DESTRUIR O SUSTENTO DE TANTAS FAMÍLIAS"
        ], 
        correct: 0 
    },
    { 
        q: "Um investidor anônimo oferece financiar a sua ideia de negócio por R$ 10 milhões, mas ele exige que você rompa totalmente o contato e a sociedade com o amigo de infância que te ajudou a criar o conceito original. Você aceita o dinheiro?", 
        options: [
            "SIM, NEGÓCIOS SÃO NEGÓCIOS E EU POSSO COMPENSAR MEU AMIGO FINANCEIRAMENTE DEPOIS", 
            "NÃO, MINHA LEALDADE E MINHAS RELAÇÕES REAIS NÃO ESTÃO À VENDA"
        ], 
        correct: 1 
    },
    { 
        q: "Você pode ter a garantia de que sua conta bancária nunca ficará zerada e você sempre terá dinheiro para o básico e o conforto, mas em troca perderá a chance de um dia ficar genuinamente rico. Você escolhe a estabilidade?", 
        options: [
            "SIM, A PAZ DE NUNCA PASSAR NECESSIDADE COMPENSA A FALTA DE LUXO INTERNACIONAIS", 
            "NÃO, PREFIRO CORRER O RISCO DA POBREZA PELA CHANCE DE ALCANÇAR A RIQUEZA EXTREMA"
        ], 
        correct: 0 
    },
    { 
        q: "Se você soubesse que um influenciador digital famoso constrói sua fortuna enganando seguidores com investimentos falsos, mas ele se oferece para pagar uma cirurgia caríssima que vai salvar a vida de um parente seu em troca do seu silêncio, o que você faz?", 
        options: [
            "ACEITO A AJUDA (A VIDA DO MEU FAMILIAR É MINHA PRIORIDADE ABSOLUTA)", 
            "RECUSO E DENUNCIO (NÃO POSSO SALVAR QUEM AMO COM O SANGUE FINANCEIRO DE OUTROS)"
        ], 
        correct: 0 
    },
    { 
        q: "Você pode comprar uma casa maravilhosa pela metade do preço de mercado, mas descobre que o proprietário anterior foi tirado de lá ilegalmente por um esquema de corrupção imobiliária e jurídica. Você fecha o negócio?", 
        options: [
            "SIM, O PROBLEMA JURÍDICO NÃO FOI CRIADO POR MIM E A OPORTUNIDADE É ÚNICA", 
            "NÃO, NÃO CONSIGO MORAR EM UM LUGAR CONSTRUÍDO EM CIMA DA INJUSTIÇA CONTRA OUTRA PESSOA"
        ], 
        correct: 0 
    },
    { 
        q: "Para ganhar um bônus financeiro que mudaria o seu ano, sua empresa pede que você altere sutilmente os dados de um relatório para fazer um produto parecer mais seguro do que ele realmente é. Você assina?", 
        options: [
            "SIM, SE A DIRETORIA DEU O AVAL, A RESPONSABILIDADE FINAL NÃO É MINHA", 
            "NÃO, COLOCAR MEU NOME EM ALGO ADULTERADO COLOCA MINHA INTEGRIDADE EM RISCO"
        ], 
        correct: 1 
    },
    { 
        q: "Você prefere trabalhar 14 horas por dia em um emprego exaustivo que te paga R$ 50 mil por mês, ou trabalhar apenas 4 horas por dia em um emprego super leve que te paga R$ 4 mil por mês?", 
        options: [
            "PREFIRO AS 14 HORAS PELO SUCESSO FINANCEIRO E ASCENSÃO SOCIAL RÁPIDA", 
            "PREFIRO AS 4 HORAS PELA MINHA QUALIDADE DE VIDA E TEMPO LIVRE COM A FAMÍLIA"
        ], 
        correct: 1 
    },
    { 
        q: "Se um aplicativo garantisse que você ganharia R$ 500 toda vez que assistisse a um vídeo de 10 minutos expondo o pior momento da vida de um estranho humilhado publicamente, você usaria o app diariamente?", 
        options: [
            "SIM, O MUNDO JÁ É CRUEL DE GRAÇA, PELO MENOS AGORA ESTOU GANHANDO COM ISSO", 
            "NÃO, GANHAR DINHEIRO EM CIMA DA DEGRADAÇÃO HUMANA DESTRÓI MINHA EMPATIA"
        ], 
        correct: 0 
    },
    { 
        q: "Você recebe a proposta de enriquecer instantaneamente criando uma seita ou curso enganoso na internet para explorar a carência emocional de pessoas desesperadas. Ninguém nunca vai te processar ou descobrir a farsa. Você cria?", 
        options: [
            "SIM, AS PESSOAS JÁ GASTAM DINHEIRO COM COISAS INÚTEIS, EU SÓ ESTOU VENDENDO UMA ILUSÃO", 
            "NÃO, USAR A VULNERABILIDADE PSICOLÓGICA ALHEIA PARA ENRIQUECER É DESUMANO"
        ], 
        correct: 1 
    },
    { 
        q: "Você pode ter a mente de investimentos mais brilhante do mundo, sabendo exatamente onde colocar seu dinheiro para render milhões, mas em troca esquecerá todas as memórias da sua infância e adolescência. Você aceita?", 
        options: [
            "SIM, O PASSADO JÁ FOI E O FUTURO COM RIQUEZA ME DÁ NOVAS OPORTUNIDADES", 
            "NÃO, MINHA HISTÓRIA E MINHAS LEMBRANÇAS SÃO O QUE MOLDAM MINHA ESSÊNCIA"
        ], 
        correct: 1 
    },
    { 
        q: "Se você pudesse pagar um suborno ilegal de R$ 10 mil para garantir uma vaga pública estável para o resto da vida, sabendo que tiraria a vaga de alguém que estudou mais que você, você pagaria?", 
        options: [
            "SIM, O SISTEMA É CORRUPTO DE QUALQUER FORMA E EU PRECISO GARANTIR MEU FUTURO", 
            "NÃO, PREFIRO FALHAR PELOS MEUS PRÓPRIOS MÉRITOS A JOGAR SUJO"
        ], 
        correct: 1 
    },
    { 
        q: "Você tem a chance de se tornar imensamente famoso internacionalmente, mas a sua fama virá através de um meme ridículo que fará o mundo inteiro rir da sua cara pelo resto da vida. Você aceita o preço da fama?", 
        options: [
            "SIM, FAMA É DINHEIRO E ATENÇÃO, EU APRENDERIA A MONETIZAR A PIADA", 
            "NÃO, PREFIRO O ANONIMATO COLOCO MINHA DIGNIDADE E RESPEITO SOCIAL ACIMA"
        ], 
        correct: 1 
    },
    { 
        q: "Se você pudesse dobrar o seu salário atual hoje, mas em troca seu pior inimigo declarado ganhasse dez vezes mais do que você, você aceitaria a proposta?", 
        options: [
            "SIM, O CRESCIMENTO DA MINHA VIDA ME IMPORTA MAIS DO QUE A FORTUNA DELE", 
            "NÃO, A IDEIA DE VER ALGUÉM QUE ME PREJUDICOU FICAR MULTIMILIONÁRIO ME TRÁZ FRUSTRAÇÃO"
        ], 
        correct: 0 
    },
    { 
        q: "Você está em um cargo alto e descobre que o dono da empresa assedia moralmente os funcionários mais jovens. Se você denunciar, a empresa quebra e você perde seu sustento e status. O que você faz?", 
        options: [
            "DENUNCIO (NÃO SE DEVE TOLERAR ABUSOS INDEPENDENTE DO PREÇO FINANCEIRO)", 
            "FICO EM SILÊNCIO (PROTEJO MINHA CARREIRA E MINHA ESTABILIDADE EM PRIMEIRO LUGAR)"
        ], 
        correct: 1 
    },
    { 
        q: "Você pode receber R$ 5 milhões agora, contanto que passe os próximos 5 anos trabalhando em um abatedouro industrial de animais de grande porte enfrentando a realidade fria da produção de carne diariamente. Você aceita?", 
        options: [
            "SIM, SÃO APENAS 5 ANOS DE TRABALHO DURO PARA GARANTIR A APOSENTADORIA", 
            "NÃO, O IMPACTO PSICOLÓGICO DAQUELA CRUELDADE DIÁRIA IRIA ME ADOECER REVERTIVELMENTE"
        ], 
        correct: 0 
    },
    { 
        q: "Você descobre uma maneira legal, porém altamente imoral, de comprar poços de água em uma região carente e triplicar o preço da distribuição para lucrar alto. Você executa o plano?", 
        options: [
            "SIM, SE A LEI PERMITE, É APENAS O MERCADO FUNCIONANDO PELA OFERTA E PROCURA", 
            "NÃO, EXPLORAR UMA NECESSIDADE BÁSICA DE SOBREVIVÊNCIA PARA ENRIQUECER É CRIME MORAL"
        ], 
        correct: 1 
    },
    { 
        q: "Se você pudesse escolher entre ter um trabalho que você odeia profundamente, mas que te dá estabilidade e luxo, ou um trabalho que você ama com paixão, mas que te mantém sempre no limite financeiro, qual escolheria?", 
        options: [
            "O TRABALHO QUE ODEIO (O DINHEIRO FORA DO EXPEDIENTE COMPENSA O SOFRIMENTO)", 
            "O TRABALHO QUE AMO (A REALIZAÇÃO DIÁRIA VALE MAIS DO QUE BENS MATERIAIS)"
        ], 
        correct: 0 
    },
    { 
        q: "Sua startup está falindo e a única salvação é aceitar um investimento milionário de uma empresa envolvida com o desmatamento ilegal de terras indígenas. Você aceita o aporte?", 
        options: [
            "SIM, SALVO O EMPREGO DOS MEUS FUNCIONÁRIOS ATUAIS E MINHA EMPRESA", 
            "NÃO, PREFIRO FALIR A ME TORNAR CÚMPLICE DA DESTRUIÇÃO AMBIENTAL E SOCIAL"
        ], 
        correct: 0 
    },
    { 
        q: "Você pode ter a garantia de que seu filho será um sucesso financeiro estrondoso na vida, mas sabe que a obsessão dele pelo dinheiro fará com que ele nunca te visite ou fale com você na velhice. Você deseja esse futuro para ele?", 
        options: [
            "SIM, PREFIRO VER MEU FILHO RICO E DISTANTE DO QUE POBRE E DEPENDENTE", 
            "NÃO, O SUCESSO FINANCEIRO NÃO SUBSTITUI A CONEXÃO E O AFETO FAMILIAR"
        ], 
        correct: 1 
    },
    { 
        q: "Você recebe a chance de apagar todas as suas dívidas financeiras atuais instantaneamente, mas em troca o algoritmo vai deletar aleatoriamente 10 contatos profissionais valiosos da sua rede. Você aceita?", 
        options: [
            "SIM, LIMPAR MEU NOME AGORA É MAIS URGENTE DO que contatos que posso refazer", 
            "NÃO, MINHA REDE DE CONTATOS É O MEU MAIOR PATRIMÔNIO DE LONGO PRAZO"
        ], 
        correct: 0 
    },
    { 
        q: "Se um erro do sistema de e-commerce te enviasse uma televisão de R$ 10 mil duplicada por engano na sua casa, e a empresa não mandasse nenhuma mensagem cobrando a devolução, você devolveria por iniciativa própria?", 
        options: [
            "SIM, DEVOLVO PORQUE FICAR COM ALGO QUE NÃO PAGUEI SE CONFIGURA COMO ERRO ÉTICO", 
            "NÃO, GRANDES CORPORAÇÕES JÁ INCLUEM ESSAS PERDAS NO SEU FLUXO DE CAIXA"
        ], 
        correct: 1 
    },
    { 
        q: "Você pode receber o dom de ler qualquer contrato ou documento financeiro em segundos e identificar fraudes ou brechas ocultas perfeitamente, mas perderá a capacidade de sentir prazer com hobbies (jogos, filmes, esportes). Vale a troca?", 
        options: [
            "SIM, ESSA HABILIDADE CORPORATIVA VAI ME TORNAR UM PROFISSIONAL IMBATÍVEL", 
            "NÃO, TRABALHAR BEM SEM PODER CURTIR O LAZER TRANSFORMA A VIDA EM UM DESERTO"
        ], 
        correct: 1 
    },
  { 
        q: "Você descobre que o mundo vai acabar inevitavelmente em exatamente um ano. Você prefere que essa informação seja revelada publicamente para toda a humanidade ou que permaneça em segredo absoluto entre os governos?", 
        options: [
            "REVELAÇÃO PÚBLICA (TODOS TÊM O DIREITO DE VIVER OS ÚLTIMOS MESES SEM MÁSCARAS E COM LIBERDADE)", 
            "SEGREDO ABSOLUTO (EVITA O CAOS, A ANARQUIA E A VIOLÊNCIA GENERALIZADA NAS CIDADES)"
        ], 
        correct: 1 
    },
    { 
        q: "Se você pudesse tomar uma pílula que elimina completamente a sua capacidade de sentir qualquer tipo de tristeza ou luto, mas em troca diminuísse a sua capacidade de sentir alegria intensa pela metade, você tomaria?", 
        options: [
            "SIM, PREFIRO Uma VIDA ESTÁVEL E SEM DOR A ENFRENTAR O SOFRIMENTO", 
            "NÃO, OS ALTOS E BAIXOS EMOCIONAIS SÃO O QUE DEFINEM A EXPERIÊNCIA HUMANA REAL"
        ], 
        correct: 1 
    },
    { 
        q: "Você recebe a comprovação científica de que o livre-arbítrio não existe e todas as suas decisões já estão pré-determinadas pela física do universo. Você prefere continuar vivendo com a ilusão de que escolhe ou aceitar a realidade fria?", 
        options: [
            "PREFIRO A ILUSÃO (SENTIR QUE SOU DONO DO MEU DESTINO MANTÉM MINHA MOTIVAÇÃO)", 
            "PREFIRO A REALIDADE (ENTENDER QUE SOU APENAS UM PASSAGEIRO ME MIRA O PESO DA CULPA)"
        ], 
        correct: 0 
    },
    { 
        q: "Se você pudesse ver um painel flutuante com a estatística de quantas vezes você falhou em uma escolha por medo, você escolheria olhar para esse número?", 
        options: [
            "SIM, QUERO USAR ESSE DADO COMO UM CHOQUE DE REALIDADE PARA MUDAR MINHA ATITUDE", 
            "NÃO, VER O TAMANHO DO MEU ARREPENDIMENTO SÓ IRIA ME DEPRIMIR E TRAVAR AINDA MAIS"
        ], 
        correct: 1 
    },
    { 
        q: "Você pode viver em uma linha temporal onde você é imensamente feliz e realizado, mas todos os seus amigos e familiares têm vidas medíocres e difíceis. Ou uma onde você sofre, mas todos ao seu redor prosperam. Qual escolhe?", 
        options: [
            "ESCOLHO A MINHA FELICIDADE (NÃO POSSO CARREGAR O DESTINO DOS OUTROS NAS MINHAS COSTAS)", 
            "ESCOLHO A FELICIDADE DOS OUTROS (O SOFRIMENTO DELES ME CAUSARIA MAIS DOR DO QUE O MEU PRÓPRIO)"
        ], 
        correct: 1 
    },
    { 
        q: "Se você pudesse voltar no tempo para corrigir o maior erro da sua vida, sabendo que isso alteraria o presente e faria você esquecer ou nunca conhecer pessoas importantes que estão na sua vida hoje, você voltaria?", 
        options: [
            "SIM, CORRIGIR AQUELE ERRO ESPECÍFICO DEIXARIA MINHA CONSCIÊNCIA EM PAZ PARA SEMPRE", 
            "NÃO, ACEITO MEU PASSADO PORQUE NÃO ABRO MÃO DAS CONEXÕES QUE TENHO NO PRESENTE"
        ], 
        correct: 1 
    },
    { 
        q: "Você descobre que todos os seus sonhos noturnos são, na verdade, vivências reais de uma versão sua em um universo paralelo. Em 90% dos sonhos você sofre acidentes ou passa por crises. Você aceitaria tomar um remédio para parar de sonhar para sempre?", 
        options: [
            "SIM, QUERO PROTEGER MINHA MENTE E CESSAR A CONEXÃO COM ESSE SOFRIMENTO PARALELO", 
            "NÃO, DEIXAR DE SONHAR DESTRUIRIA UMA PARTE FUNDAMENTAL DO MEU COMPORTAMENTO PSIQUÍCO"
        ], 
        correct: 1 
    },
    { 
        q: "Se a humanidade descobrisse uma inteligência superior no espaço que nos ignora completamente por nos achar insignificantes como formigas, como a sociedade reagiria melhor?", 
        options: [
            "FOCANDO EM EVOLUIR INTERNAMENTE PARA UM DIA TENTAR ALCANÇAR O NÍVEL DELES", 
            "CAINDO EM UMA CRISE EXISTENCIAL COLETIVA PELA PERDA DO NOSSO PROTAGONISMO NO COSMOS"
        ], 
        correct: 0 
    },
    { 
        q: "Você tem a chance de saber a resposta para qualquer grande mistério do universo (vida após a morte, alienígenas, início de tudo), mas com a condição de que nunca poderá contar ou sugerir a resposta para nenhum outro ser humano. Você aceita?", 
        options: [
            "SIM, QUERO SANAR A MINHA PRÓPRIA CURIOSIDADE EXISTENCIAL ANTES DE MORRER", 
            "NÃO, CARREGAR A MAIOR VERDADE DO MUNDO TOTALMENTE SOZINHO SERIA UMA PRISÃO MENTAL"
        ], 
        correct: 0 
    },
    { 
        q: "Se você pudesse estender a sua vida por mais 50 anos saudáveis, mas em troca o tempo passasse duas vezes mais rápido para a sua percepção cerebral (os anos pareceriam meses), você aceitaria?", 
        options: [
            "SIM, MAIS TEMPO CRONOLÓGICO NO MUNDO VALE A PENA DE QUALQUER FORMA", 
            "NÃO, A SENSAÇÃO DE QUE A VIDA ESTÁ VOANDO MAIS RÁPIDO GERARIA UMA ANSIEDADE INSUPORTÁVEL"
        ], 
        correct: 1 
    },
    { 
        q: "Se uma máquina pudesse simular perfeitamente a presença física e o toque de Deus ou de uma paz espiritual absoluta no seu cérebro através de estímulos magnéticos, você usaria essa máquina semanalmente?", 
        options: [
            "SIM, SE A SENSAÇÃO DE PAZ E EQUILÍBRIO É REAL, A ORIGEM MECÂNICA NÃO ME IMPORTA", 
            "NÃO, BUSCAR UMA ESPIRITUALIDADE ARTIFICIAL VIA BOTÃO RETIRA O SENTIDO DA JORNADA ESPIRITUAL"
        ], 
        correct: 1 
    },
    { 
        q: "Você prefere viver sabendo exatamente como vai morrer (mas sem poder mudar o destino) ou sabendo exatamente o dia em que vai morrer (sem saber as circunstâncias)?", 
        options: [
            "PREFIRO SABER COMO VOU MORRER (PARA EVITAR TRAUMAS OU MEDOS INFUNDADOS NO COTIDIANO)", 
            "PREFIRO SABER O DIA EM QUE VOU MORRER (PARA PLANEJAR MINHA VIDA ATÉ A DATA LIMITE)"
        ], 
        correct: 1 
    },
    { 
        q: "Se um gênio te oferecesse juventude eterna, contanto que uma pessoa aleatória envelhecesse o dobro do ritmo no seu lugar, você aceitaria o pacto?", 
        options: [
            "SIM, A OPORTUNIDADE DE NUNCA ENVELHECER COMPENSA UM SACRIFÍCIO QUE NEM VOU VER", 
            "NÃO, CONDENAR ALGUÉM À VELHICE PRECOCE PELA MINHA VAIDADE É INACEITÁVEL"
        ], 
        correct: 1 
    },
    { 
        q: "Você prefere ter a capacidade de esquecer instantaneamente qualquer memória ruim ou constrangedora da sua vida, ou ter a memória perfeita de absolutamente tudo o que você já viveu, sem esquecer nada?", 
        options: [
            "PREFIRO ESQUECER O RUIM (MINHA SAÚDE MENTAL AGRADECE O FILTRO AUTOMÁTICO)", 
            "PREFIRO LEMBRAR DE TUDO (CADA DETALHE, BOM OU RUIM, FAZ PARTE DA MINHA JORNADA HISTÓRICA)"
        ], 
        correct: 0 
    },
    { 
        q: "Se ficasse provado que os animais de estimação (como cães e gatos) possuem o mesmo nível de consciência existencial e medo da morte que nós, o que a maioria da humanidade deveria fazer?", 
        options: [
            "MUDAR AS LEIS IMEDIATAMENTE PARA DAR STATUS JURÍDICO DE PESSOA A ELES", 
            "IGNORAR A DESCOBERTA PARA NÃO AFETAR O MERCADO E A ESTRUTURA DA SOCIEDADE"
        ], 
        correct: 0 
    },
    { 
        q: "Você pode reencarnar após a morte mantendo toda a sua sabedoria e aprendizados atuais, mas começará em uma família extremamente pobre em um país em guerra. Você aceita o ciclo ou prefere o descanso eterno?", 
        options: [
            "ACEITO A REENCARNAÇÃO (MINHA MENTE ME AJUDARÁ A SOBREVIVER E EVOLUIR NOVAMENTE)", 
            "PREFIRO O DESCANSO ETERNO (NÃO QUERO RECOMEÇAR O JOGO DA EXISTÊNCIA NO MODO ULTRA DIFÍCIL)"
        ], 
        correct: 1 
    },
    { 
        q: "Se você pudesse desativar permanentemente o seu ego (tornando-se incapaz de sentir orgulho, vaidade ou inveja, mas também perdendo a ambição de crescer), você aceitaria?", 
        options: [
            "SIM, O FIM DO EGO TRAZ A VERDADEIRA ILUMINAÇÃO E PAZ MENTAL", 
            "NÃO, O EGO E A AMBIÇÃO SÃO OS MOTORES QUE ME FAZEM REALIZAR COISAS NO MUNDO"
        ], 
        correct: 1 
    },
    { 
        q: "Você descobre que a pessoa com quem você está casado(a) há anos é, na verdade, um ator contratado pelos seus pais no passado para garantir que você não ficasse sozinho. O relacionamento é feliz e real hoje. O que você faz?", 
        options: [
            "CONFRONTO E TERMINO TUDO (TODA A MINHA HISTÓRIA FOI BASEADA EM UMA FARSA FINANCEIRA)", 
            "MANTENHO O SEGREDO E CONTINUO (SE O SENTIMENTO HOJE É REAL, A ORIGEM NÃO IMPORTA MAIS)"
        ], 
        correct: 1 
    },
    { 
        q: "Se você pudesse saber a verdade absoluta sobre a existência de vida após a morte, mas a resposta fizesse você perder completamente o medo de morrer, você escolheria saber?", 
        options: [
            "SIM, ELIMINAR O MAIOR MEDO DA HUMANIDADE ME TRARÁ UMA LIBERDADE COMPLETA", 
            "NÃO, O MEDO DA MORTE É O FREIO PSICOLÓGICO QUE ME MANTÉM VIVO E SEGURO"
        ], 
        correct: 1 
    },
    { 
        q: "Você prefere viver em um mundo onde todos dizem exatamente o que pensam de você na sua cara (zero falsidade, mas muita grosseria) ou no mundo atual com as suas mentiras sociais?", 
        options: [
            "PREFIRO A VERDADE ABSOLUTA E DIRETA (SEM TEMPO PARA JOGOS MENTAIS OU DÚVIDAS)", 
            "PREFIRO O MUNDO ATUAL (AS MASCARAS SOCIAIS EVITAM QUE A GENTE SE MATE DIARIAMENTE)"
        ], 
        correct: 1 
    },
    { 
        q: "Se você descobrisse que a realidade é controlada por pensamentos e que as suas piores paranoias podem se materializar se você focar muito nelas, você buscaria isolamento total ou aprenderia a controlar a mente?", 
        options: [
            "BUSCO ISOLAMENTO TOTAL EM UM AMBIENTE SEGURO PARA REDUZIR OS ESTÍMULOS", 
            "ENFRENTO O DESAFIO E VOU FAZER MEDITAÇÃO/TERAPIA INTENSIVA PARA CONTROLAR O FOCO"
        ], 
        correct: 1 
    },
    { 
        q: "Você tem a chance de viver a vida de qualquer figura histórica famosa do passado, sentindo suas glórias e dores, mas ao final da experiência você esquecerá quem você era originalmente, assumindo aquela identidade para sempre. Você iria?", 
        options: [
            "SIM, TROCO MINHA EXISTÊNCIA COMUM POR UM LUGAR DEFINITIVO NA GRANDE HISTÓRIA", 
            "NÃO, POR MAIS SIMPLES QUE SEJA MINHA VIDA, ELA É MINHA E NÃO ABRO MÃO DO MEU EU"
        ], 
        correct: 1 
    },
    { 
        q: "Se você pudesse criar uma inteligência artificial que simulasse perfeitamente a sua própria personalidade para dar conselhos aos seus filhos no futuro quando você falecer, você programaria essa IA?", 
        options: [
            "SIM, QUERO DEIXAR UM GUIA MENTAL MEU PARA APOIÁ-LOS MESMO APÓS MINHA PARTIDA", 
            "NÃO, ISSO É UMA CÓPIA ARTIFICIAL QUE PODE ACABAR CONFUNDINDO O LUTO E A AUTONOMIA DELES"
        ], 
        correct: 1 
    },
    { 
        q: "Você descobre que o universo reinicia e repete exatamente a mesma história a cada 10 bilhões de anos, o que significa que você já viveu e vai viver essa mesma vida infinitas vezes. Essa constatação te traz paz ou desespero?", 
        options: [
            "ME TRAZ PAZ (CADA MOMENTO É ETERNO E ACEITO O MEU DESTINO CYCLICO)", 
            "ME TRAZ DESESPERO (A FALTA DE UMA NOVIDADE REAL TRANSFORMA A EXISTÊNCIA EM UMA PRISÃO)"
        ], 
        correct: 0 
    },
    { 
        q: "Se você estivesse diante do criador do universo e ele te permitisse fazer apenas uma pergunta antes de te apagar para sempre, você perguntaria sobre o sentido de tudo ou diria apenas obrigado?", 
        options: [
            "PERGUNTARIA O SENTIDO DE TUDO (NÃO POSSO SUMIR SEM ENTENDER A LÓGICA DO JOGO)", 
            "DIRIA APENAS OBRIGADO (ACEITO QUE FIZ PARTE DA EXISTÊNCIA E ENCERRO EM PAZ)"
        ], 
        correct: 0 
    }
];
