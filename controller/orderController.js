const OrderItem = require("../models/OrderItem");
const Order = require("../models/Order");

//Saving
const createOrder = async (req, res) => {
  try {
    let comicissue_id = req.body.comicissue_id;
    let purchase_type = req.body.purchase_type;
    let order_item_status = "processing";

    if (comicissue_id == false || purchase_type == false) {
      return res.status(400).send("Not all mandatory values have been set!");
    }

    let comicExist = await Comic.findOne({ _id: comicissue_id });

    if (comicExist == false) {
      //check the existence of the comic issue to make a stock
      res.status(400).send("There is no comic issue with this id");
    }

    OrderItemObject = new OrderItem({
      //create series object to set data
      comicissue_id,
      purchase_type,
      order_item_status,
    });

    await OrderItemObject.save();
    res.status(200).send("Order Item saved ");
  } catch (error) {
    console.log("Error caught at ", error);
    res.status(500).send("Server Error");
  }
};

//get details of all the items
const getAllOrders = async (req, res) => {
  const itemData = OrderItem.find(
    {},
    {
      comicissue_id: 1,
      purchase_type: 1,
      order_item_status: 1,
    }
  )
    .populate("orderitems")
    .then((itemData) => {
      if (itemData) {
        return res.status(200).json(itemData);
      } else {
        return res.status(404).json("There are no item data");
      }
    })
    .catch((err) => res.status(404).json("failed to retrieve item data"));
};

//get Single stock details of one user
const getOrder = async (req, res) => {
  let comicissue_id = req.params.id; //not the id but the comic issue id since its uniquw, it is set as unique from mongoose

  const itemData = OrderItem.findOne(
    { comicissue_id: comicissue_id },
    {
      comicissue_id: 1,
      purchase_type: 1,
      order_item_status: 1,
    }
  )
    .populate("prices")
    .then((itemData) => {
      if (itemData) {
        return res.status(200).json(itemData);
      } else {
        return res.status(404).json("There are no items with this comic id");
      }
    })
    .catch((err) => res.status(404).json("Failed to get item data"));
};

//Delete comic issue
const deleteOrder = async (req, res) => {
  const itemDeletion = OrderItem.findOneAndDelete({ _id: req.params.id })
    .then((itemDeletion) => {
      if (itemDeletion) {
        return res.status(200).json({ success: true });
      } else {
        return res
          .status(404)
          .json("There are no items to delete with this id");
      }
    })
    .catch((err) => res.status(404).json("failed to delete item"));
};

module.exports = {
  createOrder,
  getAllOrders,
  getOrder,
  deleteOrder,
};
