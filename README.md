# pGO Sniper

Aplicativo criado em react-native para fins de aprendizado. o aplicativo se conecta na API do Reddit(usando o AXIOS) e pega os tópicos do subreddit /r/PokemonGoSniping/ e os organiza dentro de uma lista contendo o titulo do topico(IV/LEVEL  NOME DO POKEMON), o autor do tópico, o horario de criação e logo embaixo a descrição do tópico e as coordenadas(junto a um botão de copiar).

![imagem](img.png?raw=true)

## Propósito

Meu primeiro aplicativo criado usando react-native, a ideia principal de sua criação foi aprender mais sobre react-native e desenvolver na prática um aplicativo util para meus amigos e colegas "voadores", e junto divulgar mais o trabalho feito pelos usuarios do subreddit /r/PokemonGoSniping/.

De uma olhada na parte "Informações" para mais detalhes do aplicativo.

## Colabore

Colabore com o /r/PokemonGoSniping/, quando achar um pokemon 100% em sua jogatina, crie um tópico lá com o IV, Level e nome do pokemon no titulo do tópico e coloque na descrição a coordenada exata aonde ele esta.

Link: https://www.reddit.com/r/PokemonGoSniping/new/

## Problemas Conhecidos

* Coordenadas deixadas apenas nos comentarios nao aparecem no aplicativo.
	* Não aparecem pois o aplicativo apenas pega o nome do tópico, descrição, autor e o horario(em Unix Timestamp).
	* Tentei de tudo para pegar o primeiro comentario dos tópicos, mas não obtive sucesso.

* A Lista não atualiza sozinha, sendo necessario abrir novamente o aplicativo.
	* Ainda estou aprendendo sobre react-native e tentarei melhorar isso.
	* Porem o Horario de criação dos tópicos e atualizada de 1 em 1 minuto.

* Pokemons que já sumiram (mais de 1 hora) continuam na lista.
	* Estou olhando uma forma de excluir da lista tópicos criados a mais de 1 hora.

## Download

> Versão experimental

Download: https://github.com/drawciamage/pGOSniper/releases

* Android: Lançado.
* IOS: Ainda precisa ser compilado para ios, sem planos no momento.

## Informações

> Não consegui usar a ultima versão LTS do NodeJS, o aplicativo foi feito na versão v12.4.0 do NodeJS.

> Informações riscadas foram removidas. 

* Dependencias
	* axios
	* ~moment~
	* date-fns
	* react
	* react-native
	* ~react-moment~
	* react-navigation
	* react-navigation-stack
	* react-native-gesture-handler
	* @react-native-community/async-storage
	* @react-native-community/netinfo

* Foi usado:
	* AJAX
	* Flexbox
	* ~MomentJS / react-moment~
	* date-fns
	* Flatlist
	* Offline First
	* Tema Claro/Escuro

## Histórico de lançamentos

* 0.0.5
	* Melhorias minimas na performance.
	* Date() agora e iniciado apenas uma vez.
	* Corrigido problema no KeyExtractor.
	* Removido codigo de teste colocado na "versão 0.0.3".

* 0.0.4
	* Adicionado Mensagem de primeiro uso.
	* MomentJS / react-moment trocado pelo date-fns.
	* Tema escuro com cores mais fracas.
	* Botão de mudar tema centralizado.

* 0.0.3
	* Adicionado Tema Escuro.
	* Adicionado Botão para mudar tema.
	* O Tema escolhido é lembrado.

* 0.0.2
	* Estrutura do StyleSheet arrumado.
	* Correção na estrutura do Sobre.
	* FlexBox melhor implementado.
	* StyleSheet para modo Escuro preparada.
	* Usa ultima lista baixada quando sem internet.

* 0.0.1
    * Versão experimental lançada.

## Contribuindo

1. Faça o _fork_ do projeto (<https://github.com/drawciamage/pGOSniper/fork>)
2. Crie uma _branch_ para sua modificação (`git checkout -b feature/fooBar`)
3. Faça o _commit_ (`git commit -am 'Add some fooBar'`)
4. _Push_ (`git push origin feature/fooBar`)
5. Crie um novo _Pull Request_
