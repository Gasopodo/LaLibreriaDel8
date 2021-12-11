const controller = {
    index: (req,res) => {
        res.render("users/index");
    },

    login: (req,res) => {
        res.render("users/login");
    },

    register: (req,res) =>{
        res.render("users/register");
    }
}

module.exports = controller;