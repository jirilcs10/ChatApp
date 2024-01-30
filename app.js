const express = require('express');
const app = express();

const cors=require('cors');

const dotenv=require('dotenv');
dotenv.config();

const bodyParser = require('body-parser');
const path=require('path');

const sequelize=require('./util/databases');





const User=require('./models/users');

const userRoutes = require('./routes/userroute');


app.use(cors({
origin:"http://127.0.0.1:3000",
}))



app.use(bodyParser.json({ extended: false }));
  
// Expense.belongsTo(User,{constraints:true,onDelete:'CASCADE'});
// User.hasMany(Expense);

// Order.belongsTo(User);
// User.hasMany(Order);

// User.hasMany(ResetPassword);
// ResetPassword.belongsTo(User,{constraints:true,onDelete:'CASCADE'});

// Download.belongsTo(User,{constraints:true,onDelete:'CASCADE'});
// User.hasMany(Download);

app.use(express.static('src'));


// app.get('/public/js/signup.js', function(req, res) {
//     res.sendFile(path.join(__dirname + '/public/js/signup.js'));
// });
app.use('/signup',(req,res)=>{
    res.sendFile('signup.html', { root: 'views' })
});
// app.get('/public/js/login.js', function(req, res) {
//     res.sendFile(path.join(__dirname + '/public/js/login.js'));
// });
app.use('/login',(req,res)=>{
    res.sendFile('login.html', { root: 'views' })
});
// app.get('/public/js/exp.js', function(req, res) {
//     res.sendFile(path.join(__dirname + '/public/js/exp.js'));
// });
// app.use('/features',(req,res)=>{
//     res.sendFile('features.html', { root: 'views' })
// });
// // app.get('/public/js/pass.js', function(req, res) {
// //     res.sendFile(path.join(__dirname + '/public/js/pass.js'));
// // });
// app.use('/forgotpassword',(req,res)=>{
//     res.sendFile('password.html', { root: 'views' });
//  });
// // app.get('/public/js/reset.js', function(req, res) {
// //     res.sendFile(path.join(__dirname + '/public/js/reset.js'));
// // });

app.use(userRoutes);
// app.use("/user",expenseRoutes);
// app.use("/purchase",purchaseRoutes);
// app.use("/password",passwordRoutes);
// app.use("/user",premiumRoutes);


sequelize.sync({force:true}).then(result=>{
    app.listen(process.env.PORT||3000);
}).catch(err=>console.log(err));
