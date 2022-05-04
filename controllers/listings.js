const Listing = require("../models/listing");

const ListingsController = {
  Index: (req, res) => {
    Listing.find((err, listings) => {
      if (err){
        throw err;
      }

      res.render("listings/index", { listings: listings.reverse() });
    })
  },
  New: (req, res) => {
    res.render("listings/new", {});
  },
  Create: (req, res) => {
    const listing = new Listing({...req.body,
      creator_fname: req.session.user.first_name,
      creator_lname: req.session.user.last_name,
      });
      listing.save((err) => {
        if (err){
          throw err;
        }

        res.status(201).redirect("/listings");
    });
  }
}

module.exports = ListingsController