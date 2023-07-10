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

3. Instale as dependências do projeto tanto para o frontend quanto para o backend utilizando o npm (Node Package Manager):
```
cd front-imobiliariaousadia
npm install

cd ../backend-imobiliariaousadia
npm install
```
4. Inicie o servidor do backend:
```
npm run dev
```

5. Inicie o servidor de desenvolvimento do frontend:
```
cd ../front-imobiliariaousadia
npm start
```

Isso irá iniciar o servidor de desenvolvimento do frontend e abrirá automaticamente o aplicativo em seu navegador padrão. Agora você poderá visualizar e interagir com o projeto.

O código-fonte do projeto está localizado nas pastas front-imobiliariaousadia e back-imobiliariaousadia, onde você encontrará os arquivos do frontend e do backend, respectivamente.

Certifique-se de ter o Node.js e o npm instalados em seu sistema antes de executar esses comandos.

## Comentários sobre o código
O projeto utiliza a biblioteca React para desenvolver a interface do usuário e o Node.js para o desenvolvimento do backend. A abordagem de componentização do frontend permite a reutilização de componentes em diferentes partes do site, facilitando a manutenção e adição de novas funcionalidades. O backend utiliza o Express.js para criar as rotas e lidar com as requisições do cliente.

O código do frontend está localizado na pasta front-imobiliariaousadia/src, onde você encontrará as páginas, componentes, imagens e serviços utilizados para desenvolver o site. O código do backend está localizado na pasta back-imobiliariaousadia, onde você encontrará os arquivos para criação das rotas, controle dos dados e interação com o banco de dados.

O plano de teste aborda aspectos importantes do aplicativo, como navegação, login e registro, ciclo de compra, manipulação de usuários, manipulação de localizações e manipulação de ofertas. É importante verificar se todas essas funcionalidades estão funcionando corretamente e se os resultados são consistentes.

Com a implementação do backend, será possível realizar operações de criação, edição e manipulação de usuários, além de gerenciar as localizações e ofertas. Essas funcionalidades fornecerão uma experiência mais completa aos usuários, permitindo que eles realizem ações específicas dentro do aplicativo.

É importante realizar testes abrangentes para garantir que todas as funcionalidades estejam funcionando conforme o esperado. Testar diferentes cenários, como criação e edição de usuários, alteração de status de localizações e manipulação de ofertas, ajudará a identificar e corrigir quaisquer problemas ou inconsistências no aplicativo.

## Plano de Teste
O plano de teste tem como objetivo verificar a funcionalidade e a experiência do usuário em diferentes aspectos do aplicativo. Os testes incluem:

a) **Navegação**: Verificar se o redirecionamento para as páginas da barra de navegação ocorre corretamente e se o conteúdo das páginas é exibido adequadamente.

b) **Login e Registro**: Verificar se os usuários conseguem fazer login utilizando as credenciais corretas e se conseguem se registrar com sucesso. Testar também a criação, edição e exclusão de usuários pelo administrador.

c) **Ciclo de Compra**: Verificar se os usuários conseguem acessar a página "Buy", selecionar uma casa disponível e fazer uma oferta. Testar a criação, edição e exclusão de ofertas.

d) **Manipulação de Localizações**: Verificar se é possível criar, editar e excluir localizações. Testar também a alteração de status das localizações.

e) **Manipulação de Ofertas**: Verificar se é possível criar, editar e excluir ofertas. Testar também a alteração de status das ofertas.

f) **Manipulação de Usuários**: Verificar se é possível criar, editar e excluir usuários pelo perfil do administrador. Testar também a visualização e edição das informações de usuário pelo perfil do cliente.

g) **Buscas com Filtros**: Verificar se a funcionalidade de busca com filtros está funcionando corretamente. Testar diferentes combinações de filtros, como número de quartos, número de banheiros, tipo de imóvel e valor estimado.

## Resultados de Teste
Após a execução dos testes, os resultados obtidos foram os seguintes:

a) **Navegação**: O redirecionamento para as páginas da barra de navegação ocorreu conforme o esperado. O conteúdo das páginas foi exibido corretamente, proporcionando uma boa experiência de navegação.

b) **Login e Registro**: Os usuários conseguiram fazer login utilizando as credenciais corretas e conseguiram se registrar com sucesso. O administrador pôde criar, editar e excluir usuários. As informações de usuário puderam ser visualizadas e editadas pelo perfil do cliente.

c) **Ciclo de Compra**: Os usuários conseguiram acessar a página "Buy", selecionar uma casa disponível e fazer uma oferta. As ofertas puderam ser criadas, editadas e excluídas com sucesso.

d) **Manipulação de Localizações**: As localizações puderam ser criadas, editadas e excluídas corretamente. O status das localizações pôde ser alterado sem problemas.

e) **Manipulação de Ofertas**: As ofertas puderam ser criadas, editadas e excluídas com sucesso. O status das ofertas pôde ser alterado corretamente.

f) **Manipulação de Usuários**: O perfil do administrador permitiu a criação, edição e exclusão de usuários. As informações de usuário puderam ser visualizadas e editadas pelo perfil do cliente.

g) **Buscas com Filtros**: A funcionalidade de busca com filtros foi testada com sucesso. 

Com base nos resultados dos testes, podemos concluir que o aplicativo permite ao usuário navegar corretamente pelas páginas, realizar login e registro de usuários, seguir o ciclo de compra e realizar ações de manipulação de localizações, ofertas e usuários. O aplicativo demonstrou estar funcionando conforme o esperado, proporcionando uma experiência positiva e funcionalidades completas aos usuários.

## Procedimento de Build
Durante o processo de build, é importante ter em mente os perfis de usuários disponíveis para realizar login, assim como os CPFs válidos e os IDs das casas que são considerados válidos para os testes. Abaixo estão os detalhes dos usuários e das casas disponíveis:

1. Usuários:

+ Cliente:
  - Email: fernada@example.com, Senha: fernanda123
  - Email: ricardo@example.com, Senha: ricardo123

+ Administrador:
  - Email: daniel@example.com, Senha: daniel123
  - Email: joao.silva@example.com, Senha: joao123
  - Email: maria.oliveira@example.com, Senha: maria123
  - Email: pedro.almeida@example.com, Senha: pedro123
  - Email: ana.pereira@example.com, Senha: ana123
  - Email: luiz.oliveira@example.com, Senha: luiz123

2. Casas:
  - ID: 649f230958381f7f158140d4, Status: Em negociação
  - ID: 649f231558381f7f158140d6, Status: Vendida
  - ID: 649f232258381f7f158140d8, Status: Disponível
  - ID: 649f232f58381f7f158140da, Status: Disponível
  - ID: 649f233a58381f7f158140dc, Status: Disponível
  - ID: 649f234458381f7f158140de, Status: Disponivel
  - ID: 649f235258381f7f158140e0, Status: Disponivel


## Comentários
Após a implementação do projeto da corretora de imóveis, todas as funções requeridas foram implementadas com sucesso. O aplicativo agora permite que os usuários realizem ações como navegação pelas páginas, login e registro, ciclo de compra, manipulação de localizações, manipulação de ofertas e manipulação de usuários.

Durante as etapas anteriores do projeto, foram realizadas revisões e testes, levando a alterações na visualização do site para melhorar a experiência do usuário. Com base nos comentários e feedback recebidos nessas etapas anteriores, foram feitas melhorias significativas na interface do usuário, fluxo de navegação e usabilidade geral do aplicativo.

As revisões e melhorias incluíram aprimoramentos na barra de navegação, layout das páginas, exibição de informações, usabilidade dos formulários, feedback visual e outras áreas relevantes do aplicativo. As alterações foram implementadas com o objetivo de fornecer uma experiência mais intuitiva, agradável e eficiente para os usuários ao interagirem com o site da corretora de imóveis.
