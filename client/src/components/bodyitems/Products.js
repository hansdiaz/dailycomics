import React, { Component } from "react";
import axios from "axios";

import AllProductsProduct from "../internalcomponents/AllProductsProduct";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

export default class Products extends Component {
  state = {
    allComics: [],
  };

  render() {
    return (
      <section className=" py-4 py-lg-6">
        <div className="site-content" id="content">
          <div className="container">
            <div className="row">
              <div id="primary" className="content-area order-2">
                <div className="shop-control-bar d-lg-flex justify-content-between ">
                  <h5>Comic Book Collection</h5>
                </div>

                <div className="tab-content" id="pills-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="pills-one-example1"
                    role="tabpanel"
                    aria-labelledby="pills-one-example1-tab"
                  >
                    <ul className="products list-unstyled row no-gutters row-cols-2 row-cols-lg-3 row-cols-xl-5 border-top border-left mb-6">
                      {this.state.allComics.map((comic) => (
                        <div key={comic.id}>
                          <AllProductsProduct
                            key={comic.id}
                            data={comic}
                            onNavigate={() => this.navigateToComic(comic.id)}
                          />
                        </div>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  async componentDidMount() {
    localStorage.setItem("accessright", false);
    let comicData = await axios.get("http://localhost:5000/allcomics");
    console.log(comicData);

    let state = [];
    if (comicData) {
      state = comicData.data.map((comic) => {
        return {
          id: comic._id,
          seriesname: comic.seriesname,
          issuenumber: comic.issuenumber,
          description: comic.description,
          imageref: comic.imageref,
          authorname: comic.authorname,
        };
      });
    }
    console.log(state);
    console.log(this.state.allComics);
    this.setState({ allComics: state });
  }

  navigateToComic(comicId) {
    localStorage.setItem("currentcomic", comicId);
    this.props.history.push("/products/product");
  }
}
