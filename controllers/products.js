const Product = require('../model/product.model.js')

const getAllProducts = async (req, res) => {
    const { company, name, featured, sort, select } = req.query;
    const queryObject = {};
    if(company) {
        queryObject.company = company;
        
    }
    if (featured) {
        queryObject.featured = featured;
    }
    let urldata = Product.find(queryObject);
    if( name ) {
        queryObject.name = { $regex:name, $options:"i"};
    }
    if ( sort ) {
        let sortFix = sort.replace(",", " ")
        urldata = urldata.sort(sortFix)
    }

    if ( select ) {
        const selectFix = select.replace(",", " ")
        urldata = urldata.select(selectFix)
    }

    let page = Number(req.query.page) || 1;
    let limit = Number(req.query.limit) || 2;
    let skip = (page - 1) * limit
    urldata = urldata.skip(skip).limit(limit)
    console.log(queryObject)
    console.log(req.query)
    const myData = await urldata;
    res.status(200).json({myData, nbHits:myData.length });
};

const getAllProductsTesting = async (req, res) => {
    const myData = await Product.find(req.query).select("name company");
    console.log("request.query: ", req.query)
    res.status(200).json(myData)
};


module.exports = {getAllProducts, getAllProductsTesting}

// https://www.youtube.com/watch?v=MseIwZwkXyI&list=PLwGdqUZWnOp1ve9jXCz9apbouv-eAMi6E&index=5&ab_channel=ThapaTechnical