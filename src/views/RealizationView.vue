<template>
  <div class="realization container">
    <h1>Postup realizácie</h1>
    <ol>
      <li>
        <strong>Kontaktujte nás:</strong> 
        Vyplňte 
        <router-link to="/kontakt">kontaktný formulár</router-link>
        alebo nám zavolajte.
      </li>
      <li>
        <strong>Poskytnite základné informácie:</strong> 
        Predbežné rozmery priestoru či vaša predstava pomôžu pri prvotnom návrhu.
      </li>
      <li>
        <strong>Zameranie:</strong> 
        Na základe vašich údajov priestor osobne zmeriame a posúdime jeho dispozície.
      </li>
      <li>
        <strong>Návrh riešenia:</strong> 
        Vytvoríme návrh nábytku a poradíme najvhodnejšie umiestnenie jednotlivých prvkov.
      </li>
      <li>
        <strong>Výber dekoru a kovania:</strong> 
        Spoločne zvolíme farbu, materiál a vnútorné vybavenie tak, aby riešenie spĺňalo všetky vaše požiadavky.
      </li>
      <li>
        <strong>Cenová ponuka:</strong> 
        Na základe dohodnutých detailov vám pripravíme individuálnu cenovú ponuku.
      </li>
      <li>
        <strong>Faktúra a realizácia:</strong> 
        Po vzájomnom odsúhlasení vám vystavíme faktúru a dohodneme termín realizácie.
      </li>
    </ol>
  </div>
</template>

  
  <script>
  export default {
    name: 'RealizationView',
  };
  </script>
  
  <style scoped>
  .container {
    padding: 20px;
  }
  
  h1 {
    color: #0056b3;
    text-align: center;
    margin-bottom: 20px;
  }
  
  ol {
    list-style: decimal;
    padding: 0 20px;
  }
  
  li {
    margin-bottom: 15px;
    font-size: 1.2rem;
    line-height: 1.6;
  }
  
  li strong {
    color: #ffc107;
  }
  </style>
  