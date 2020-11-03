const express = require('express');
const router = express.Router();

// Bring in Models & Helpers
const League = require('../../models/league');
const Score = require('../../models/score');
const auth = require('../../middleware/auth');
const role = require('../../middleware/role');

router.post('/add', auth, role.checkRole(role.ROLES.Admin), (req, res) => {
  const sku = req.body.sku;
  const name = req.body.name;
  const description = req.body.description;
  const email = req.body.email;
 

  if (!sku) {
    return res.status(400).json({ error: 'You must enter sku.' });
  }

  if (!description || !name) {
    return res
      .status(400)
      .json({ error: 'You must enter description & name.' });
  }

  if (!email) {
    return res.status(400).json({ error: 'You must enter an email address.' });
  }


  League.findOne({ sku }, (err, existingLeague) => {
    if (err) {
      return res.status(400).json({
        error: 'Your request could not be processed. Please try again.'
      });
    }

    if (existingLeague) {
      return res.status(400).json({ error: 'This sku is already in use.' });
    }

    const league = new League({
      sku,
      name,
      description,
      email
    });

    league.save((err, data) => {
      if (err) {
        return res.status(400).json({
          error: 'Your request could not be processed. Please try again.'
        });
      }

      res.status(200).json({
        success: true,
        message: `League has been added successfully!`,
        product: data
      });
    });
  });
});

// fetch product api
router.get('/item/:slug', (req, res) => {
  const slug = req.params.slug;

  League.findOne({ slug })
    .populate('brand')
    .exec((err, data) => {
      if (err) {
        return res.status(400).json({
          error: 'Your request could not be processed. Please try again.'
        });
      }

      if (!data) {
        return res.status(404).json({
          message: 'No league found.'
        });
      }

      res.status(200).json({
        product: data
      });
    });
});

// fetch all products api
router.get('/list', (req, res) => {
  League.find({})
    .populate('name')
    .exec((err, data) => {
      if (err) {
        return res.status(400).json({
          error: 'Your request could not be processed. Please try again.'
        });
      }
      res.status(200).json({
        leagues: data
      });
    });
});

// fetch all leagues by category api
router.get('/list/category/:slug', (req, res) => {
  const slug = req.params.slug;

  Category.findOne({ slug: slug }, 'products -_id')
    .populate('products')
    .exec((err, data) => {
      if (err) {
        return res.status(400).json({
          error: 'Your request could not be processed. Please try again.'
        });
      }

      if (!data) {
        return res.status(404).json({
          message: 'No products found.'
        });
      }

      res.status(200).json({
        products: data ? data.products : data
      });
    });
});

// fetch all products by brand api
router.get('/list/brand/:slug', (req, res) => {
  const slug = req.params.slug;

  Brand.find({ slug }, (err, brand) => {
    if (err) {
      return res.status(400).json({
        error: 'Your request could not be processed. Please try again.'
      });
    }

    if (brand.length <= 0) {
      return res.status(404).json({
        message: `Cannot find brand with the slug: ${slug}.`
      });
    }

    Product.find({ brand: brand[0]._id })
      .populate('brand', 'name')
      .exec((err, data) => {
        if (err) {
          return res.status(400).json({
            error: 'Your request could not be processed. Please try again.'
          });
        }
        res.status(200).json({
          products: data
        });
      });
  });
});

router.get('/list/select', auth, (req, res) => {
  Product.find({}, 'name', (err, data) => {
    if (err) {
      return res.status(400).json({
        error: 'Your request could not be processed. Please try again.'
      });
    }

    res.status(200).json({
      products: data
    });
  });
});

router.delete(
  '/delete/:id',
  auth,
  role.checkRole(role.ROLES.Admin),
  (req, res) => {
    Product.deleteOne({ _id: req.params.id }, (err, data) => {
      if (err) {
        return res.status(400).json({
          error: 'Your request could not be processed. Please try again.'
        });
      }

      res.status(200).json({
        success: true,
        message: `Product has been deleted successfully!`,
        product: data
      });
    });
  }
);

module.exports = router;
