<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-left">
        <p>&copy; 2025 Nábytok Riziky. Všetky práva vyhradené.</p>
        <p>
          <router-link to="/kontakt">Kontakt</router-link> |
          <a href="mailto:info@nabytokriziky.sk">info@nabytokriziky.sk</a> |
          Telefón: +421 987 654 321
        </p>
        <div class="social-media">
  <h5>Sociálne siete :</h5>
  <a href="https://www.instagram.com/rigor_morttiz/" target="_blank" rel="noopener noreferrer">
    <i class="fab fa-instagram instagram-icon"></i> Instagram
  </a>
  <br />
  <a href="https://www.facebook.com/vas_facebook" target="_blank" rel="noopener noreferrer">
    <i class="fab fa-facebook facebook-icon"></i> Facebook
  </a>
</div>

      </div>
      <div class="footer-right">
        <span>
          <i class="fas fa-calendar-alt"></i> {{ currentTime }}
        </span>
        <br />
        <span>
          <i class="fas fa-user"></i> {{ nameday }}
        </span>
        <div class="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2643.710679526877!2d18.115436076866537!3d48.500439625829415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476b4ba7fd28448d%3A0x9092fd5149091cbe!2sN%C3%A1bytok%20Riziky!5e0!3m2!1ssk!2ssk!4v1737395965987!5m2!1ssk!2ssk"
            width="300"
            height="150"
            style="border:0; border-radius: 5px;"
            loading="lazy"
            allowfullscreen=""
            referrerpolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      currentTime: '',
      nameday: '',
    };
  },
  methods: {
    updateDateTime() {
      const now = new Date();
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      this.currentTime = now.toLocaleDateString('sk-SK', options) + ' ' + now.toLocaleTimeString('sk-SK');
    },
    fetchNameday() {
      const namedays = {
        1: ['Nový Rok', 'Alexandra', 'Daniela', 'Drahoslav', 'Andrea', 'Antónia', 'Bohuslava', 'Severín', 'Alexej', 'Dáša'],
        // Doplňte zvyšok kalendára
      };

      const today = new Date();
      const day = today.getDate();
      const month = today.getMonth() + 1;
      this.nameday = namedays[month] && namedays[month][day - 1] ? namedays[month][day - 1] : 'Meniny neznáme';
    },
  },
  mounted() {
    this.updateDateTime();
    this.fetchNameday();
    setInterval(this.updateDateTime, 1000); // Aktualizácia času každú sekundu
  },
};
</script>

<style scoped>
.facebook-icon {
  margin-right: 15px; /* Zvýši medzeru medzi ikonou a textom */
}

.instagram-icon {
  margin-right: 15px; /* Zvýši medzeru medzi ikonou a textom */
}

.footer {
  background: linear-gradient(90deg, #0b0e10, #0d1117, #121417, #1a1a1a);
  color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: flex-start; /* Zarovnanie obsahu na vrchu */
  padding: 10px 20px;
  font-size: 0.9rem;
}

.footer-left {
  text-align: left;
  max-width: 50%;
}

.footer-right {
  color: #ffc107;
  margin-left: auto; /* Posunie obsah na pravú stranu */
  text-align: right;
  max-width: 50%;
  position: relative; /* Umožní použitie vlastnosti top */
  top: -160px; /* Posunie obsah vyššie */
}

.map-container {
  margin-top: 10px;
}

.footer a {
  color: #ffc107;
  text-decoration: none;
}

.footer a:hover {
  text-decoration: underline;
}

.footer-right i {
  margin-right: 5px;
}

.social-media a {
  color: #ffc107;
  font-size: 2rem;
  text-decoration: none;
  margin-right: 10px;
  display: inline-flex; /* Aby ikona a text boli v jednej línii */
  align-items: center; /* Vertikálne zarovnanie */
}

.social-media a:hover {
  text-decoration: underline;
}

.social-media i {
  margin-right: 5px;
}



</style>
