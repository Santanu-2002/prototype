const City = require("../models/Cities");

const stateFind = async (req, res) => {
  try {
    const { stateName } = req.body;

    const formatedState = stateName.toUpperCase();
    const findState = await City.find({ statename: formatedState });

    if (findState.length === 0) {
      return res.status(404).json({
        message: "State not found"
      });
    }

    const stateDetails = findState.map(item => ({
      pincode: item.pincode,
      city: item.regionname
    }));

    res.status(200).json({
      message: "State found",
      totalData: findState.length,
      stateDetails
    });

  } catch (error) {
    res.status(500).json({
      message: "Server error"
    });
  }
};

module.exports = {stateFind};