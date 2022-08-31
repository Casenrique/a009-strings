const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";
const minhaNovaString = minhaString.trim()
const minhaNovaStringSubstituicao = minhaNovaString.replace("________.","sticioso.")
console.log(`Caracteres antes de ajuste: ${minhaString.length}
Caracteres após de ajuste: ${minhaNovaString.length}
${minhaNovaStringSubstituicao}
`)