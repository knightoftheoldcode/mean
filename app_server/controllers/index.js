const index = function(req, res, next) {
    res.render('index', { title: 'MEAN' });
};

module.exports = {
    index
};