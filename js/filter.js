class Filter {
  constructor() {
    this.mainWizard = document.querySelector('.setup-wizard');
    this.coat = this.mainWizard.querySelector('.wizard-coat');
    this.eyes = this.mainWizard.querySelector('.wizard-eyes');
  }

  coatAndEyesFiltered(item) {
    return item.colorCoat === this.coat.style.fill && item.colorEyes === this.eyes.style.fill;
  }

  coatFiltered(item) {
    return item.colorCoat === this.coat.style.fill;
  }

  eyesFiltered(item) {
    return item.colorEyes === this.eyes.style.fill;
  }

  mainFiltered(item) {
    return this.coatAndEyesFiltered(item) || this.coatFiltered(item) || this.eyesFiltered(item);
  }

  filtered(data) {
    return data.filter(item => this.mainFiltered(item));
  }
}
