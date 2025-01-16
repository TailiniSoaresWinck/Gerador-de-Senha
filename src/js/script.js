// Define o tamanho inicial da senha
let passwordLength = 16;

// Seleciona os elementos do DOM
const element = document.querySelector("#input-password");
const upperCaseCheckEl = document.querySelector("#uppercase-check");
const numberCheckEl = document.querySelector("#number-check");
const symbolCheckEl = document.querySelector("#symbol-check");
const securityIndicatorBarEl = document.querySelector(
  "#security-indicator-bar"
);

// Função para gerar uma senha aleatória com base nas opções selecionadas
function generatePassword() {
  // Conjunto base de caracteres minúsculos
  let chars = "abcdefghjklnmpqrstuvwxyz";

  // Conjuntos adicionais para caracteres maiúsculos, números e símbolos
  const upperCaseChars = "ABCDEFGHJKLMNPQRSTUVWXYZ";
  const numberChars = "123456789";
  const symbolChars = "?@!=+&*%^#()[]";

  // Adiciona os conjuntos de caracteres selecionados ao conjunto base
  if (upperCaseCheckEl.checked) {
    chars += upperCaseChars; // Adiciona maiúsculas
  }
  if (numberCheckEl.checked) {
    chars += numberChars; // Adiciona números
  }
  if (symbolCheckEl.checked) {
    chars += symbolChars; // Adiciona símbolos
  }

  // Gera a senha escolhendo caracteres aleatórios do conjunto disponível
  let password = "";
  for (let i = 0; i < passwordLength; i++) {
    const randomNumber = Math.floor(Math.random() * chars.length);
    password += chars[randomNumber]; // Adiciona o caractere aleatório à senha
  }

  // Define a senha gerada no campo de input
  element.value = password;

  // Atualiza a qualidade da senha e o tamanho da fonte
  calculateQuality();
  calculateFontSize();
}

// Função para calcular a qualidade da senha com base nas opções selecionadas
function calculateQuality() {
  // Calcula a força da senha em porcentagem
  const percent = Math.round(
    (passwordLength / 64) * 25 +
      (upperCaseCheckEl.checked ? 15 : 0) +
      (numberCheckEl.checked ? 25 : 0) +
      (symbolCheckEl.checked ? 35 : 0)
  );

  // Atualiza a largura da barra de segurança de acordo com a força da senha
  securityIndicatorBarEl.style.width = `${percent}%`;

  // Ajusta a cor da barra de segurança com base na porcentagem de força
  if (percent > 69) {
    // Se a senha for segura, remove as classes de "crítico" e "aviso" e adiciona "seguro"
    securityIndicatorBarEl.classList.remove("critical", "warning");
    securityIndicatorBarEl.classList.add("safe");
  } else if (percent > 50) {
    // Se a senha for moderada, remove "crítico" e "seguro" e adiciona "aviso"
    securityIndicatorBarEl.classList.remove("critical", "safe");
    securityIndicatorBarEl.classList.add("warning");
  } else {
    // Se a senha for fraca, remove "seguro" e "aviso" e adiciona "crítico"
    securityIndicatorBarEl.classList.remove("safe", "warning");
    securityIndicatorBarEl.classList.add("critical");
  }

  // Se a senha estiver com força total, marca a barra como "completa"
  if (percent >= 100) {
    securityIndicatorBarEl.classList.add("completed");
  } else {
    securityIndicatorBarEl.classList.remove("completed");
  }
}

// Função para ajustar o tamanho da fonte do campo de senha com base no comprimento
function calculateFontSize() {
  // Ajusta as classes de tamanho da fonte de acordo com o comprimento da senha
  if (passwordLength > 45) {
    element.classList.remove("font-sm", "font-xs");
    element.classList.add("font-xxs"); // Fonte muito pequena
  } else if (passwordLength > 32) {
    element.classList.remove("font-sm", "font-xxs");
    element.classList.add("font-xs"); // Fonte pequena
  } else if (passwordLength > 22) {
    element.classList.remove("font-xs", "font-xxs");
    element.classList.add("font-sm"); // Fonte média
  } else {
    element.classList.remove("font-sm", "font-xs", "font-xxs"); // Remove qualquer classe de tamanho
  }
}

// Função para copiar a senha gerada para a área de transferência
function copy() {
  navigator.clipboard.writeText(element.value); // Copia o valor da senha para o clipboard
}

// Evento para atualizar o comprimento da senha quando o controle deslizante for alterado
const passwordLengthEl = document.querySelector("#password-length");
passwordLengthEl.addEventListener("input", () => {
  passwordLength = passwordLengthEl.value; // Atualiza o comprimento da senha
  document.querySelector("#password-length-text").innerText = passwordLength; // Exibe o novo comprimento da senha
  generatePassword(); // Regenera a senha
});

// Adiciona eventos de clique para os checkboxes de opções de maiúsculas, números e símbolos
upperCaseCheckEl.addEventListener("click", generatePassword);
numberCheckEl.addEventListener("click", generatePassword);
symbolCheckEl.addEventListener("click", generatePassword);

// Adiciona eventos de clique para os botões de copiar
document.querySelector("#copy-1").addEventListener("click", copy);
document.querySelector("#copy-2").addEventListener("click", copy);

// Evento para gerar uma nova senha ao clicar no botão de recarregar
document.querySelector("#reload").addEventListener("click", generatePassword);

// Gera uma senha inicial ao carregar a página
generatePassword();
