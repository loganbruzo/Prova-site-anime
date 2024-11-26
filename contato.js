function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
  
    // Verificação simples de campos vazios
    if (name === "" || email === "" || message === "") {
      alert("Por favor, preencha todos os campos.");
      return false;
    }
  
    // Mensagem de sucesso
    document.getElementById('success-message').style.display = "block";
    document.getElementById('contact-form').reset();  // Limpa o formulário após envio
    return false;  // Evita o envio real do formulário para fins de demonstração
  }
  