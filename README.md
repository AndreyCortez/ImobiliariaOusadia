# ProjectRealState - Projeto de Corretora de Imoveis web

Este repositorio é destinado para o projeto desenvolvido na disciplina Introdução ao Desenvolvimento Web ministrada pelo professor Dilvan de Abreu Moreira. Para o desenvolvimento do projeto houve a participação dos alunos:

+ Andrey Cortez Rufino, nº usp 11819487
+ Daniel Arrais Martins, nº usp 11819445
+ Mateus de Souza Santos, nº usp 11366913

## Requisitos

Além dos requisitos expressos na descrição do projeto, temos:
O sistema deve permitir que o usuário consiga fazer busca de locações, utilizando filtros para obter melhores resultados.

## Descrição do Projeto
A Ousadia Imobiliária é uma empresa fictícia especializada em serviços de corretagem de imóveis. Oferecemos um amplo leque de serviços para nossos clientes que buscam alugar, comprar ou vender imóveis.
+ Aluguel de imóveis: A Ousadia Imobiliária possui uma ampla variedade de opções de propriedades para alugar, incluindo casas, apartamentos e imóveis comerciais. Nossos agentes imobiliários estão disponíveis para ajudá-lo a encontrar a opção perfeita para suas necessidades.

+ Venda de imóveis: Se você está procurando vender uma propriedade, a Ousadia Imobiliária pode ajudá-lo a encontrar o melhor preço para sua propriedade. Nossos agentes imobiliários possuem amplo conhecimento do mercado local e podem ajudá-lo a fechar um acordo justo e transparente.

+ Consulta com agentes imobiliários: Nossos agentes imobiliários são profissionais experientes e altamente qualificados que podem ajudá-lo em cada etapa do processo de corretagem. Eles estão disponíveis para responder a quaisquer perguntas que você possa ter e orientá-lo em suas decisões de compra, venda ou locação.

+ Perfil do usuário: Com a Ousadia Imobiliária, você pode criar um perfil de usuário para gerenciar suas pesquisas, favoritos e interações com nossos agentes imobiliários. Nossa plataforma é fácil de usar e intuitiva, garantindo que você possa encontrar o que procura com rapidez e facilidade.

+ Perfil do administrador: Nossos clientes também têm acesso a um perfil de administrador, que garante a eficiência e transparência em todas as nossas operações. Isso inclui a gestão de documentos e a comunicação com os clientes para garantir que todas as operações sejam executadas de maneira profissional e confiável.

+ Informações sobre a empresa: No site da Ousadia Imobiliária, você pode encontrar informações sobre nossa empresa, bem como nossos valores e missão. Queremos que nossos clientes saibam que podem confiar em nós para fornecer serviços de corretagem de imóveis de alta qualidade e éticos.

## Banco de Dados
O projeto utiliza um banco de dados para armazenar as informações relacionadas aos imóveis e transações. A tabela utilizada contém os seguintes campos:

+ **Usuario**: cpf, nome, email, senha.
+ **Corretor**: cpf, nome, email, senha.
+ **CasaVendida**: cpf_corretor, id_casa.
+ **Casa**: id, quartos, banheiros, garagem, valor_estimado, status, CPF_corretor, descrição, endereço.
+ **Transação**: id_casa, valor_pago, forma_pagamento.

1. **Tabela "usuario"**:

+ cpf (chave primária): CPF do usuário
+ nome: Nome do usuário
+ email: Email do usuário
+ senha: Senha do usuário

2. **Tabela "corretor"**:

+ cpf (chave primária): CPF do corretor
+ nome: Nome do corretor
+ email: Email do corretor
+ senha: Senha do corretor

3. **Tabela "casaVendida"**:

+ cpf_corretor (chave estrangeira): CPF do corretor responsável pela venda da casa
+ id_casa (chave estrangeira): ID da casa vendida

4. **Tabela "casa"**:

+ id (chave primária): ID da casa
+ quartos: Número de quartos na casa
+ banheiros: Número de banheiros na casa
+ garagem: Número de vagas de garagem da casa
+ valor_estimado: Valor estimado da casa
+ status: Status da casa (disponível, vendida, alugada, etc.)
+ CPF_corretor (chave estrangeira): CPF do corretor responsável pela casa
+ descrição: Descrição detalhada da casa
+ endereço: Endereço da casa

5. **Tabela "transação"**:
+ id (chave primaria): ID da casa
+ valor : valor pago pelo comprador
+ pagamento: forma de pagamento do comprador


## Diagrama    
Aplicação se trata de uma aplicação web para uma imobiliária e conta com o seguinte diagrama de navagação:
![diagrama de navegação](Navigation.png)
Para visualizar o mockup das páginas basta acessar: https://www.figma.com/file/HTA8SPnrBmFxqan7vjvkvF/mockup?type=design&node-id=0%3A1&t=7yYNAlJD72id5u4C-1 


## Comentários sobre o código
O projeto utiliza a biblioteca React para desenvolver a interface do usuário, seguindo uma abordagem de componentização. Cada página do aplicativo é tratada como um componente dentro de um "app", e componentes internos são utilizados para facilitar a reutilização em outras páginas. Isso resulta em um código mais organizado, legível e reciclável, além de proporcionar escalabilidade ao projeto.

A abordagem de componentização adotada no projeto permite a criação de componentes reutilizáveis, facilitando a manutenção e adição de novas funcionalidades. A separação da lógica e da apresentação em componentes distintos traz benefícios como modularidade, testabilidade e escalabilidade do código.

## Plano de Teste
O plano de teste visa garantir a funcionalidade correta e a experiência do usuário durante o ciclo principal de uso do aplicativo, bem como a navegação pelas páginas da barra de navegação.

1. **Login**: O teste consiste em verificar se o usuário pode fazer login com sucesso. Será verificado se as informações de login (email e senha) são aceitas corretamente e se o redirecionamento para a página inicial ocorre conforme esperado.

2. **Acesso à página "Sell"**: Verificar se o usuário logado pode acessar a página "Sell" sem problemas. Será verificado se o redirecionamento ocorre corretamente e se a página é exibida com todas as informações necessárias para criar um anúncio de venda.

3. **Acesso a uma casa**: O teste envolve acessar os detalhes de uma casa disponível na página "Sell". Será verificado se o usuário pode visualizar as informações completas da casa, incluindo descrição, número de quartos, banheiros, garagem e valor estimado.

4. **Fazer uma oferta**: Verificar se o usuário pode fazer uma oferta em uma casa. Será verificado se o usuário pode inserir um valor de oferta e enviar a oferta com sucesso. Além disso, será verificado se a confirmação da oferta é exibida corretamente.

5. **Navegação pela barra de navegação**: Testar a navegação pelas páginas da barra de navegação, como "Home", "About Us" e "Agents". Verificar se o usuário pode acessar essas páginas sem precisar estar logado. Será verificado se o redirecionamento ocorre corretamente e se o conteúdo das páginas é exibido corretamente.

Esses testes garantirão que o ciclo principal de uso do aplicativo, desde o login até a realização de uma oferta em uma casa, seja funcional e forneça uma boa experiência do usuário. Além disso, será verificado se a navegação pelas páginas da barra de navegação está correta e se o acesso a informações adicionais, como "About Us" e "Agents", está disponível mesmo sem estar logado.

## Resultados de Teste
Após a execução dos testes, os resultados obtidos foram os seguintes:

1. **Login**: O teste de login foi bem-sucedido. O usuário conseguiu fazer login com sucesso utilizando as informações corretas de email e senha. O redirecionamento para a página inicial ocorreu conforme esperado.

2. **Acesso à página "Sell"**: O acesso à página "Sell" foi realizado sem problemas. O usuário logado conseguiu acessar a página e visualizar todas as informações necessárias para criar um anúncio de venda.

3. **Acesso a uma casa**: O teste de acesso aos detalhes de uma casa disponível na página "Sell" foi concluído com sucesso. O usuário conseguiu visualizar todas as informações completas da casa, incluindo descrição, número de quartos, banheiros, garagem e valor estimado.

4. **Fazer uma oferta**: O teste de fazer uma oferta em uma casa foi concluído com sucesso. O usuário conseguiu inserir um valor de oferta e enviar a oferta com êxito. A confirmação da oferta foi exibida corretamente.

5. **Navegação pela barra de navegação**: O teste de navegação pelas páginas da barra de navegação também foi bem-sucedido. O usuário pôde acessar as páginas "Home", "About Us" e "Agents" sem precisar estar logado. O redirecionamento ocorreu conforme esperado e o conteúdo das páginas foi exibido corretamente.

Com base nos resultados dos testes, pode-se afirmar que o aplicativo permite que o usuário acesse as páginas solicitadas no plano de teste e realize com completude o ciclo do usuário, desde o login até a realização de uma oferta em uma casa. Além disso, a navegação pelas páginas da barra de navegação está funcionando corretamente, permitindo acesso às informações adicionais mesmo sem estar logado.

## Procedimento de Build

## Problemas 

## Comentários
