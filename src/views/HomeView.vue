<template>
  <div class="home">
    <!-- Pozadie -->
    <div class="background"></div>

    <!-- Tmavý rámik s textom -->
    <div class="content">
      <h2>Vitajte v Nabytok Riziky</h2>
      <p>
        Sme odborníci na výrobu nábytku na mieru. Našou vášňou je vytvárať
        unikátne a funkčné kúsky, ktoré dokonale zapadnú do vášho priestoru.
      </p>
      <p>
        Prezrite si našu stránku a inšpirujte sa realizáciami, ktoré už pomohli
        desiatkam zákazníkov. Nájdete tu nielen ukážky našej práce, ale aj
        cenné rady a tipy, ako si zariadiť interiér podľa vlastných predstáv.
      </p>
      <router-link to="/onas" class="btn btn-primary">O nás</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
};
</script>

<style scoped>
/* Pozadie */
.background {
  background-image: url('@/assets/img/banner.jpg'); /* Obrázok na pozadí */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh; /* Pokryje celú výšku obrazovky */
  position: absolute; /* Aby bolo pod navigáciou */
  top: 0;
  left: 0;
  width: 100%;
  z-index: -1; /* Posunie pozadie pod navigáciu a obsah */
}

.content {
  position: absolute; /* Absolútne umiestnenie pre presné zarovnanie */
  top: 50%; /* Posunie obsah vertikálne na stred */
  left: 50%; /* Posunie obsah horizontálne na stred */
  transform: translate(-50%, -50%); /* Korekcia pre presné vycentrovanie */
  padding: 20px; /* Priestor vo vnútri rámika */
  background: rgba(0, 0, 0, 0.6); /* Polopriehľadné tmavé pozadie */
  border-radius: 10px; /* Zaoblené rohy */
  text-align: center; /* Zarovnanie textu do stredu */
  max-width: 600px; /* Maximálna šírka rámika */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5); /* Jemný tieň */
}


.content h2 {
  color: #ffc107;
  margin-bottom: 10px;
}

.content p {
  color: #fff;
  font-size: 1.2rem;
  margin-bottom: 20px;
}

.btn-primary {
  background-color: #ffc107;
  border: none;
  color: #212529;
  padding: 10px 20px;
  border-radius: 5px;
  text-transform: uppercase;
  font-weight: bold;
  text-decoration: none;
}

.btn-primary:hover {
  background-color: #e0a800;
  color: white;
}
.main-content {
  min-height: calc(100vh - 70px - 50px); /* 100vh mínus výška navigácie a footeru */
}

.footer {
  margin-top: auto;
  background-color: #212529;
  color: white;
  text-align: center;
  padding: 15px;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
}

</style>
