import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFDownloadLink,
} from "@react-pdf/renderer";

const PDFSummary = ({ userData, cart, totalPrice }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.title}>ShopUp - Summary of Your Order</Text>
        <View style={styles.customerInfo}>
          <Text style={styles.heading}>Customer Information</Text>
          <Text>Name: {userData.fullName}</Text>
          <Text>Email: {userData.email}</Text>
          <Text>Street: {userData.address}</Text>
          <Text>City: {`${userData.city}, ${userData.zip} EG`}</Text>
        </View>
        <View style={styles.cartData}>
          <Text style={styles.cartDataHeading}>Order Details</Text>
          <View style={styles.cartDataRow}>
            <View
              style={{
                ...styles.cartDataCell,
                width: "50%",
                borderRightWidth: 0,
              }}
            >
              <Text style={styles.heading}>Product</Text>
              {cart.map((item) => (
                <Text key={item.id}>{item.title}</Text>
              ))}
            </View>
            <View
              style={{
                ...styles.cartDataCell,
                width: "25%",
                borderRightWidth: 0,
              }}
            >
              <Text style={styles.heading}>Quantity</Text>
              {cart.map((item) => (
                <Text key={item.id}>{item.quantity}</Text>
              ))}
            </View>
            <View style={{ ...styles.cartDataCell, width: "25%" }}>
              <Text style={styles.heading}>Price</Text>
              {cart.map((item) => (
                <Text key={item.id}>{item.discountedPrice.toFixed(2)}</Text>
              ))}
            </View>
          </View>
          <View style={styles.cartDataRow}>
            <View
              style={{
                ...styles.cartDataCell,
                width: "75%",
                borderRightWidth: 0,
              }}
            >
              <Text style={styles.total}>Total</Text>
            </View>
            <View style={{ ...styles.cartDataCell, width: "25%" }}>
              <Text style={styles.total}>{totalPrice}</Text>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};
// Define the PDF download button
function PDFButton({ userData, cart, totalPrice, check }) {
  console.log("check:", check);
  return (
    <PDFDownloadLink
      document={
        <PDFSummary userData={userData} cart={cart} totalPrice={totalPrice} />
      }
      fileName="ShopUp_Invoice.pdf"
    >
      <button disabled={check} className="order-summary__submit-button">
        Print Invoice
      </button>
    </PDFDownloadLink>
  );
}
export default PDFButton;

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#ffffff",
    padding: "10 30",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ffffff",
    backgroundColor: "#0047ab",
    padding: 15,
    marginBottom: 30,
    width: "100%",
  },
  section: {
    marginBottom: 20,
  },
  heading: {
    color: "#0047ab",
    fontWeight: "bold",
    marginBottom: 20,
    borderBottom: "1px solid blue",
  },
  table: {
    display: "table",
    width: "100%",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#bfbfbf",
    marginBottom: 10,
  },
  tableRow: {
    flexDirection: "row",
  },
  tableCell: {
    margin: "auto",
    marginTop: 5,
    marginBottom: 5,
    fontSize: 10,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#bfbfbf",
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 3,
    paddingBottom: 3,
  },
  total: {
    fontWeight: "bold",
  },
  customerInfo: {
    backgroundColor: "#f7f7f7",
    marginBottom: 30,
    display: "flex",
    padding: 10,
    gap: "10px",
    flexDirection: "column",
    borderRadius: 5,
  },
  cartData: {
    display: "flex",
    flexDirection: "column",
  },
  cartDataHeading: {
    fontWeight: "bold",
    marginBottom: 10,
  },
  cartDataRow: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 5,
  },
  cartDataCell: {
    flex: 1,
    padding: 5,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#bfbfbf",
  },
});
