<template>
  <div class="contact container">
    <h1>Kontaktujte nás</h1>
    <p>
      Ak máte otázky alebo potrebujete ďalšie informácie, neváhajte nás kontaktovať pomocou formulára nižšie alebo na našich kontaktných údajoch.
    </p>

    <!-- Kontaktný formulár -->
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="name">Meno:</label>
        <input type="text" id="name" v-model="formData.name" required />
      </div>
      <div class="form-group">
        <label for="email">E-mail:</label>
        <input type="email" id="email" v-model="formData.email" required />
        <span v-if="!isValidEmail" class="error-message">Zadajte platný e-mail.</span>
      </div>
      <div class="form-group">
        <label for="message">Správa:</label>
        <textarea id="message" v-model="formData.message" rows="5" required></textarea>
      </div>
      <button type="submit">Odoslať</button>
    </form>

    <!-- Kontaktné údaje -->
    <div class="contact-info">
      <h2>Naše kontaktné údaje</h2>
      <p><strong>Adresa:</strong> Cintorínska 258/1, Ludanice, Slovensko</p>
      <p><strong>Telefón:</strong> +421 987 654 321</p>
      <p><strong>E-mail:</strong> info@nabytokriziky.sk</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactView',
  data() {
    return {
      formData: {
        name: '',
        email: '',
        message: '',
      },
      isValidEmail: true, // Počiatočný stav platnosti e-mailu
    };
  },
  methods: {
    // Silnejší regex pre validáciu e-mailu
    validateEmail(email) {
  // Silnejší regex pre validáciu e-mailu
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email); // Ak e-mail nie je validný, vráti false
},
    submitForm() {
  // Validácia e-mailu pred odoslaním formulára
  this.isValidEmail = this.validateEmail(this.formData.email);

  // Ak e-mail nie je platný, formulár sa neodošle
  if (!this.isValidEmail) {
    alert('Prosím zadajte platný e-mail!');
    return;
  }

  const formData = {
    name: this.formData.name,
    email: this.formData.email,
    message: this.formData.message,
  };

  // Posielame formulár na backend server
  fetch('http://localhost:3000/send-email', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  })
    .then((response) => {
      if (response.ok) {
        alert(`Ďakujeme, ${this.formData.name}! Vaša správa bola odoslaná.`);
        this.formData = { name: '', email: '', message: '' }; // Vymazanie formulára po odoslaní
      } else {
        alert('Nastala chyba pri odosielaní správy.');
      }
    })
    .catch((error) => {
      console.error('Chyba:', error);
      alert('Nastala chyba pri odosielaní správy.');
    });
},

  },
};
</script>

<style scoped>
.container {
  padding: 20px;
}

form {
  margin-top: 20px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
  color: #333;
}

input, textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  color: #333;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

input:focus, textarea:focus {
  border-color: #0056b3;
  box-shadow: 0 0 5px rgba(0, 86, 179, 0.3);
}

button {
  background-color: #0056b3;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

button:hover {
  background-color: #004494;
  transform: scale(1.05);
}

button:active {
  transform: scale(1);
}

.contact-info {
  margin-top: 30px;
  background-color: #f4f4f4;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.contact-info h2 {
  margin-bottom: 10px;
  color: #0056b3;
}

.contact-info p {
  margin: 5px 0;
  font-size: 1.1rem;
  color: #333;
}

.error-message {
  color: red;
  font-size: 0.9rem;
}
</style>
