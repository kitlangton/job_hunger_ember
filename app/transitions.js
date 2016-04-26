export default function(){
  this.transition(
    this.fromRoute('dashboard'),
    this.useAndReverse('explode', {
      matchBy: 'data-ritual-id',
      use: ['fly-to']
    }, {
      matchBy: 'data-lead-id',
      use: ['fly-to']
    }, {
      matchBy: 'data-title-type',
      use: ['fly-to']
    }, {
      use: ['crossFade']
    })
  );

  this.transition(
    this.childOf('#score'),
    this.use('toUp')
  );

  this.transition(
    this.hasClass('recommendations'),
    this.toValue(true),
    this.useAndReverse('crossFade')
  );

  this.transition(
    this.hasClass('crossfade'),
    this.toValue(true),
    this.useAndReverse('crossFade')
  );

  this.transition(
    this.fromRoute('companies'),
    this.toRoute('leads'),
    this.use('crossFade'),
    this.reverse('crossFade')
  );

  this.transition(
    this.fromRoute('login'),
    this.toRoute('sign-up'),
    this.use('crossFade'),
    this.reverse('crossFade')
  );

  this.transition(
    this.fromRoute('login'),
    this.toRoute('dashboard'),
    this.use('crossFade'),
    this.reverse('crossFade')
  );
}
