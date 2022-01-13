function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
    };
  },
  computed: {
    monsterBarStyles() {
      return { width: this.monsterHealth + "%" };
    },
    playerBarStyles() {
      return { width: this.playerHealth + "%" };
    },
  },
  methods: {
    attackMonster() {
      //Math.floor(Math.random() * (12 - 5)) + 5; - formula for calculating a random number between 5 and 12
      const attackValue = getRandomValue(5, 12);
      this.monsterHealth = this.monsterHealth - attackValue;
      //this.monsterHealth - attackValue is the same as  -= attackValue
      this.attackPlayer();
    },
    attackPlayer() {
      const attackValue = getRandomValue(8, 15);
      this.playerHealth -= attackValue;
    },
  },
});

app.mount("#game");
