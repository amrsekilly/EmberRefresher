import Component from '@ember/component';

export default Component.extend({
  actions: {
    showPerson(person) {
      return console.log({person});
    }
  }
});
