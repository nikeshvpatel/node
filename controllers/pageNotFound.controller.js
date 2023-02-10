function getPageNotFound(req, res) {
    res.status(404).render('404', {pageTitle: 'Page Not Found'});
}

module.exports = getPageNotFound;