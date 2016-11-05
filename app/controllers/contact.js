import Ember from 'ember';

export default Ember.Controller.extend({
  isValidEmail: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
  isMessageLong: Ember.computed.gte('message.length', 5),

  isValid: Ember.computed.and('isValidEmail', 'isMessageLong'),

  actions: {
    sendEmail: function() {
      var email = this.get('emailAddress');
      var message = this.get('message');

      alert('Sending...');

      var responseMessage = 'Thanks! We sent your confirmation to: ' + email + '. Talk soon!';
      this.set('responseMessage', responseMessage);
      this.set('emailAddress', '');
      this.set('message', '');
    },
  },

});
