
export default class Config {
  version = '1.0.2'

  getVersion() {
    return 'Version ' + this.version
  }

  get network() {
    return "dobeeroom.herokuapp.com"
  }
}
