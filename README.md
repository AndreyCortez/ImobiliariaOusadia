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

## Executando o Código
Para executar o código do projeto, siga as instruções abaixo:

1. Faça o clone do repositório para obter os arquivos do projeto:
```
gh repo clone AndreyCortez/ImobiliariaOusadia
```

2. Acesse o diretório do projeto:
```
cd ImobiliariaOusadia/front-imobiliariaousadia
```

3. Instale as dependências do projeto utilizando o npm (Node Package Manager):
```
npm install
```

4. Inicie o servidor de desenvolvimento:
```
npm start
```
Isso irá iniciar o servidor de desenvolvimento e abrirá automaticamente o aplicativo em seu navegador padrão. Agora você poderá visualizar e interagir com o projeto.

O código-fonte do projeto está localizado na pasta src, onde você encontrará as páginas, componentes, imagens e serviços utilizados para desenvolver o site.

Certifique-se de ter o Node.js e o npm instalados em seu sistema antes de executar esses comandos.

## Comentários sobre o código
O projeto utiliza a biblioteca React para desenvolver a interface do usuário, seguindo uma abordagem de componentização. Cada página do aplicativo é tratada como um componente dentro de um "app", e componentes internos são utilizados para facilitar a reutilização em outras páginas. Isso resulta em um código mais organizado, legível e reciclável, além de proporcionar escalabilidade ao projeto.

A abordagem de componentização adotada no projeto permite a criação de componentes reutilizáveis, facilitando a manutenção e adição de novas funcionalidades. A separação da lógica e da apresentação em componentes distintos traz benefícios como modularidade, testabilidade e escalabilidade do código.

O diretório src contém as páginas, componentes, imagens e o arquivo de aplicação do projeto. A pasta assets armazena as imagens utilizadas, enquanto a pasta components contém os componentes reutilizáveis em diferentes partes do site. As páginas são encontradas na pasta pages, com cada página tendo seu próprio arquivo JavaScript e CSS. A pasta images contém a logo do site e outras imagens específicas. O arquivo app.js na pasta service representa a aplicação principal. 

## Plano de Teste
O plano de teste tem como objetivo verificar a funcionalidade e a experiência do usuário em diferentes aspectos do aplicativo, incluindo navegação pelas páginas, acesso a casas disponíveis, interação com os agentes e ciclo de compra.

a) **Navegação**: O usuário poderá acessar as páginas da barra de navegação, como "Home", "About Us", "Buy", "Agents" e "Login". Verificaremos se o redirecionamento ocorre corretamente e se o conteúdo das páginas é exibido adequadamente.

b) **Login e Registro**: O usuário poderá fazer login utilizando as credenciais de teste disponíveis. Será verificado se o usuário consegue acessar o perfil do cliente e do administrador. Além disso, será testado o registro de um novo usuário, garantindo que não haja duplicação de CPF.

c) **Ciclo de Compra**: O usuário irá acessar a página "Buy", selecionar uma casa disponível e fazer uma oferta. Será necessário fornecer um CPF válido e um ID de casa válido (disponível ou existente). Será verificado se a oferta é enviada com sucesso.

d) **Confirmação da Compra**: O administrador poderá acessar a página "Manage Offer" para visualizar todas as ofertas em negociação. O administrador terá a opção de aceitar ou recusar uma oferta, garantindo que a funcionalidade esteja correta.

## Resultados de Teste
Após a execução dos testes, os resultados obtidos foram os seguintes:

a) **Navegação**: O redirecionamento para as páginas da barra de navegação ocorreu conforme o esperado. O conteúdo das páginas foi exibido corretamente, proporcionando uma boa experiência de navegação.

b) **Login e Registro**: O login utilizando as credenciais de teste foi bem-sucedido, permitindo o acesso aos perfis de cliente e administrador. O registro de um novo usuário foi possível, sem a ocorrência de duplicação de CPF.

c) **Ciclo de Compra**: O usuário conseguiu acessar a página "Buy", selecionar uma casa disponível e fazer uma oferta. Ao fornecer um CPF válido e um ID de casa válido, a oferta foi enviada com sucesso.

d) **Confirmação da Compra**: O administrador pôde acessar a página "Manage Offer" e visualizar todas as ofertas em negociação. Foi possível aceitar ou recusar as ofertas, garantindo a funcionalidade correta da confirmação da compra.

Com base nos resultados dos testes, podemos concluir que o aplicativo permite ao usuário navegar corretamente pelas páginas da barra de navegação, realizar login e registro de usuários, seguir o ciclo de compra e realizar a confirmação da compra por parte do administrador. O aplicativo demonstrou estar funcionando conforme o esperado, proporcionando uma experiência positiva ao usuário.

## Procedimento de Build
Durante o processo de build, é importante ter em mente os perfis de usuários disponíveis para realizar login, assim como os CPFs válidos e os IDs das casas que são considerados válidos para os testes. Abaixo estão os detalhes dos usuários e das casas disponíveis:

1. Usuários:

+ Cliente:
  - Email: usuario1@example.com, Senha: senha1, CPF: 12345678900
  - Email: usuario3@example.com, Senha: senha3, CPF: 11111111111
  - Email: usuario4@example.com, Senha: senha4, CPF: 22222222222
  - Email: usuario5@example.com, Senha: senha5, CPF: 33333333333
  - Email: usuario6@example.com, Senha: senha6, CPF: 44444444444
  - Email: usuario8@example.com, Senha: senha8, CPF: 66666666666

+ Administrador:
  - Email: usuario2@example.com, Senha: senha2, CPF: 98765432100
  - Email: usuario7@example.com, Senha: senha7, CPF: 55555555555

2. Casas:
  - ID: 01234567, Status: Vendida
  - ID: 01234568, Status: Disponível
  - ID: 01234569, Status: Disponível
  - ID: 01234578, Status: Disponível
  - ID: 01234579, Status: Disponível
  - ID: 01234589, Status: Vendida
  - ID: 01235678, Status: Em negociação
  - ID: 01234678, Status: Em negociação
  - ID: 01234679, Status: Em negociação

## Limitações

Durante o desenvolvimento do projeto, foram identificadas algumas limitações que ainda precisam ser abordadas. Essas limitações são as seguintes:

1. **Mudança direta dos status no banco de dados**: Atualmente, não é possível realizar uma mudança direta dos status das casas no banco de dados. Isso significa que as atividades de edição do administrador e dos perfis de usuário ainda não estão ocorrendo. Essa funcionalidade será implementada no milestone 3 do projeto, para permitir que as ações de edição, como atualização do status das casas, sejam realizadas corretamente.

2. **Funcionalidade limitada da barra de busca**: A barra de busca nas páginas do site ainda não está funcionando corretamente. Embora a interface esteja presente, a funcionalidade de busca ainda não foi totalmente implementada. Os resultados da busca podem não ser exibidos corretamente ou podem não retornar os resultados esperados. Essa limitação será abordada no milestone 3, onde a barra de busca será aprimorada para fornecer resultados precisos e relevantes.

Essas limitações foram identificadas durante o desenvolvimento do projeto e estão planejadas para serem resolvidas no milestone 3. O objetivo é aprimorar a funcionalidade do aplicativo, permitindo a edição adequada dos status no banco de dados, tanto pelo administrador quanto pelos perfis de usuário, e garantir que a barra de busca funcione corretamente, fornecendo resultados precisos aos usuários.

## Comentários
