# 🔑✔️ Gerador de senha

Este projeto tem como objetivo que o usuário possa gerar senhas conforme suas necessidades, onde é possivel incluir letras maíusculas, números, símbolos e verificar a segurança de sua senha através da cor de uma barra, onde:

🟢**Verde:** indica que a senha é forte;

🟡 **Amarelo:** indica que a senha é média;

🔴**Vermelho:** indica que a senha é fraca.

Sendo possivel gerar novas senhas e copiar as senhas geradas.

## Detalhes da aplicação

 - *generatePassword*: Esta função gera a senha aleatória com base nas opções de caracteres selecionados (minúsculos, maiúsculos, números, símbolos) e ajusta a exibição da senha no campo de input.

 - *calculateQuality*: Avalia a força da senha gerada e ajusta a barra de segurança de acordo com a porcentagem calculada, que é baseada no comprimento da senha e nas opções de caracteres selecionados.

 - *calculateFontSize*: Ajusta o tamanho da fonte do campo de entrada da senha com base no comprimento da senha, para que a senha fique visível de maneira adequada.

 - *copy*: Copia a senha gerada para a área de transferência, permitindo que o usuário cole a senha onde precisar.

 - *Eventos de Manipulação*: Vários eventos são adicionados para responder às interações do usuário, como ajustar o comprimento da senha, alternar opções de caracteres, copiar a senha e recarregar uma nova senha.

 ## Demonstração do projeto

- **Desktop**


- **Mobile**

