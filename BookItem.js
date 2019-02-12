import React, { Component } from "react";

import { StyleSheet,
         Text,
         View,
         Image,
         ListView,
         TouchableOpacity,
         Linking,
         WebView } from "react-native";

class BookItem extends Component {

  render() {
    return (
      
      <TouchableOpacity style={styles.bookItem}
                        onPress={() => Linking.openURL(this.props.link)}>

        <Image style={styles.cover} source={{ uri: this.props.coverURL }} />
        <View style={styles.info}>
          <Text style={styles.title}>{this.props.title}</Text>
          <Text style={styles.author}>{this.props.author}</Text>
          <Text style={styles.sales}>{this.props.sales} Sold!</Text>
        </View>
      </TouchableOpacity>
      
    );
  }
}

const styles = StyleSheet.create({
  bookItem: {
    flexDirection: "row",
    backgroundColor: "#33CCCC",
    borderBottomColor: "#FFFFFF",
    borderBottomWidth: 2,
    padding: 5,
    height: 175
  },
  cover: { flex: 1, height: 150, resizeMode: "contain" },
  info: {
    flex: 3,
    alignItems: "flex-end",
    flexDirection: "column",
    alignSelf: "center",
    padding: 20
  },
  author: { fontSize: 18 },
  sales: {fontSize: 14, fontStyle: "italic"},
  title: { fontSize: 18, fontWeight: "bold", textAlign: 'right' }
});

export default BookItem;
