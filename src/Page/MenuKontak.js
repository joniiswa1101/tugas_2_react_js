import React, { Component } from "react";

class MenuKontak extends Component {
  constructor(props) {
    super(props);
    this.state = {
       alamat:"Jl. Swadaya IV, Pd. Ranggon, Cipayung, Kota Jakarta Timur, Daerah Khusu Ibukota Jakarta, 13860",
       kontak:"081312345678"
    };
  }

  render() {
    return (
      <div>
        <center>
          <h3>{this.state.alamat} </h3>
          <h4>Kontak Kami : {this.state.Kontak} </h4>
        </center>
      </div>
    );
  }
}

export default MenuKontak;
