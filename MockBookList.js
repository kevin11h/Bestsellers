import React, { Component } from "react";

import { StyleSheet,
         Text,
         View,
         Image,
         FlatList } from "react-native";

import BookItem from "./BookItem";

const mockBooks = [
  {
    rank: 1,
    title: "New Living Translation",
    author: "THE HOLY BIBLE",
    link:"https://amzn.to/2MZfW3J",
    book_image: "https://images-na.ssl-images-amazon.com/images/I/41h7kSsaYdL._SX324_BO1,204,203,200_.jpg",
    sales: "5 Billion"    
  },
  {
    rank: 2,
    title: "HARRY POTTER AND THE SORCERER'S STONE",
    author: "J.K. Rowling",
    link:"https://www.amazon.com/gp/product/059035342X/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=059035342X&linkCode=as2&tag=kevin11h-20&linkId=8674aa748ebd7b859e7a7624a940c299",
    book_image: "https://images.gr-assets.com/books/1474154022l/3.jpg",
    sales: "120 Million"
  },
  {
    rank: 3,
    title: "THE ALCHEMIST",
    author: "Paulo Coelho",
    link:"https://amzn.to/2tjxkqE",
    book_image: "https://images-na.ssl-images-amazon.com/images/I/516c6gUQLaL._SX329_BO1,204,203,200_.jpg",
    sales: "65 Million"
  },
  {
    rank: 4,
    title: "THE LITTLE PRINCE",
    author: "Antoine de Saint-Exupéry",
    link:"https://amzn.to/2WVgSul",
    book_image: "https://images-na.ssl-images-amazon.com/images/I/4186P0mACWL._SL250_.jpg",
    sales: "140 Million"
  },
  {
    rank: 5,
    title: "DREAM OF THE RED CHAMBER (STORY OF THE STONE)",
    author: "Cao Xueqin",
    link:"https://amzn.to/2DtPGKw",
    book_image: "https://images-na.ssl-images-amazon.com/images/I/51-Hjc-djnL._SL250_.jpg",
    sales: "100 Million"
  }
];

class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = { data: this._addKeysToBooks(mockBooks),
                 };
  }

  _renderItem = ({ item }) => {
    return (
      <BookItem
        coverURL={item.book_image}
        title={item.key}
        author={item.author}
        link={item.link}
        sales={item.sales}

      />
    );
  };

  _addKeysToBooks = books => {
    // Takes the API response from the NYTimes,
    // and adds a key property to the object
    // for rendering purposes
    return books.map(book => {
      return Object.assign(book, { key: book.title });
    });
  };

  render() {
    return (<View>
  	            <FlatList data={this.state.data}
  	                      renderItem={this._renderItem} />
            </View>);

  }
}

const styles = StyleSheet.create({ container: { flex: 1, paddingTop: 22 } });

export default BookList;
