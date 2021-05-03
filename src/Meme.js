import React, { Component } from "react";

export default class Meme extends Component {
  constructor() {
    super();
    this.state = {
      upperText: "",
      bottomText: "",
      imgUrl: "http://i.imgflip.com/1bij.jpg",
      listofMeme: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }


  componentDidMount(){
    fetch("https://api.imgflip.com/get_memes")
    .then(response => response.json())
    //.then(response => {
    //     const {memes} = response.data
    //     this.setState({ allMemeImgs: memes })
    // })
    .then(data =>{
        console.log(data.data.memes[0].url);
        this.setState({listofMeme: data.data.memes})
    })
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const randNum = Math.floor(Math.random() * this.state.listofMeme.length);
    const randomMemeImg = this.state.listofMeme[randNum].url;
    this.setState({imgUrl: randomMemeImg});
  }

  render() {
    return (
      <div className="d-flex justify-content-center">
        <div>
          <form onSubmit={this.handleSubmit} className="meme-form">
            <input
              type="text"
              className="form-control"
              placeholder="Upper Text"
              name="upperText"
              onChange={this.handleChange}
              value={this.state.upperText}
            />
            <input
              type="text"
              className="form-control"
              placeholder="Bottom Text"
              name="bottomText"
              onChange={this.handleChange}
              value={this.state.bottomText}
            />
            <button>Generate</button>
          </form>
          <div className="meme">
            <img src={this.state.imgUrl} />
            <h2 className="top"> {this.state.upperText} </h2>
            <h2 className="bottom"> {this.state.bottomText} </h2>
          </div>
        </div>
      </div>
    );
  }
}
