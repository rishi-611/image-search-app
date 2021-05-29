import React from "react";
import SearchBar from "./SearchBar";
import "semantic-ui-css/semantic.min.css";
import unsplash from "../api/unsplash";
import RenderImages from "./RenderImages";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  // fetch images from unsplash api (using default parameter file)
  async onSubmit(searchItem) {
    const req = await unsplash.get(`/search/photos`, {
      params: {
        query: searchItem,
      },
    });

    this.setState({
      images: req.data.results.map((image) => {
        return {
          id: image.id,
          altText: image.alt_description,
          url: image.urls.regular,
        };
      }),
    });

    // console.log(images);
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onSubmit={this.onSubmit} />
        <RenderImages imageList={this.state.images} />
      </div>
    );
  }
}

export default App;
