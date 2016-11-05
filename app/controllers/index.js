import Ember from 'ember';

export default Ember.Controller.extend({

  topMessage: 'Just Hold On',
  responseMessage: '',
  emailAddress: '', isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
  isDisabled: Ember.computed.not('isValid'),

  actions: {
    saveEmail() {
      const email = this.get('emailAddress');
      const newEmail = this.store.createRecord('sentinfo', { email: email });
      newEmail.save();
      this.set('responseMessage', `Great! Now we can keep you up to date. We sent your confirmation to: ${this.get('emailAddress')}`);
      this.set('emailAddress', '');
    },
  },
});
