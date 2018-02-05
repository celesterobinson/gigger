const express = require("express");
const gigRoute = express.Router();
const Gig = require("../models/gig");

gigRoute.get("/", (req, res) => {
    Gig.find((err, gigs) => {
        if (err) return res.status(500).send(err);
        return res.send(gigs);
    });
});

gigRoute.post("/", (req, res) => {
    const newGig = new Gig(req.body);
    newGig.save((err) => {
        if (err) return res.status(500).send(err);
        return res.send(newGig)
    });
});

gigRoute.get("/:id", (req, res) => {
    Gig.findById(req.params.id, (err, gig) => {
        if (err) return res.status(500).send(err);
        return res.send(gig);
    });
});

gigRoute.put("/:id", (req, res) => {
    Gig.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedGig) => {
        if (err) return res.statusCode(500).send(err);
        return res.send(updatedGig);
    });
});

gigRoute.delete("/:id", (req, res) => {
    Gig.findByIdAndRemove(req.params.id, (err, deletedGig) => {
        if (err) return res.statusCode(500).send(err);
        return res.send(deletedGig);
    });
});

module.exports = gigRoute;