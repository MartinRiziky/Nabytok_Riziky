<template>
    <footer class="footer">
      <div class="container">
        <p>&copy; 2025 Nábytok Riziky. Všetky práva vyhradené.</p>
        <p>
          Kontakt: <a href="mailto:info@nabytokriziky.sk">info@nabytokriziky.sk</a> |
          Telefón: +421 987 654 321
        </p>
      </div>
    </footer>
  </template>
  
  <style scoped>
  .footer {
    background-color: #212529; /* Tmavé pozadie */
    color: #ffffff; /* Biele písmo */
    text-align: center;
    padding: 15px 20px; /* Priestor okolo textu */
    position: sticky; /* Zabezpečí, že footer je vždy dole */
    bottom: 0;
    width: 100%;
    box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1); /* Jemný tieň hore */
    font-size: 0.9rem; /* Veľkosť textu */
  }
  
  .footer a {
    color: #ffc107; /* Odkazy vo farbe zlata */
    text-decoration: none; /* Odstránenie podčiarknutia */
  }
  
  .footer a:hover {
    text-decoration: underline; /* Podčiarknutie pri hover */
  }
  </style>
  