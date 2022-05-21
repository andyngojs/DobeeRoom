
export default class Config {
  version = '1.0.1'

  getVersion() {
    return 'Version ' + this.version
  }

  get networkIP() {
    return "localhost"
  }
}
