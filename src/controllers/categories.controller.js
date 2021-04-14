import Product from "../models/product.model";
import Categories from "../models/categories.model";


exports.getCategories = (req, res) => {
    Categories.find()
        .populate('products')
        .populate('title')
        .then((data) => res.send(data))
        .catch(err => console.log(err))
    
}

exports.createCategories = (req, res) => {
    const {title} = req.body.title;
        const categorie =  Categories.findOne({title})
        if(categorie) return res.status(400).json({msg: "This category already exists."})
    const category = new Categories({
        title: req.body.title,
        products: req.body.products,
    })

    category.save()
        .then((data) => { res.send(data) })
        .catch(err => console.log(err));
}

exports.deleteCategories = (req, res) => {
    const products = Product.findOne({category: req.params.id})
        if(products) return res.status(400).json({
            msg: "Please delete all products with a relationship."
        })
    Categories.findByIdAndDelete(req.params.id)
  .then(category => {
    res.json({msg: "Deleted a Category"})
  })
  .catch(err => {
    res.status(500)
    .send({message:err.message || "Some error occured"})
  })
}

exports.updateCategories = (req, res) => {
        Categories.findOneAndUpdate(req.params.id, req.body)
        .then(categorie => {
            res.send(categorie)
          })
          res.json({msg: "Updated a category"})
          .catch(err => {
            res.status(500).json({msg: err.message})
          })   
}