var express = require('express');
const mongoose = require('mongoose');
const Admin=require('../model/admin');
const Gym=require('../model/gym');
const Blog=require('../model/blog');
const Excercise=require('../model/excercise');
const Schedule=require('../model/schedule');
var router = express.Router();
var multer=require('multer');
var nodemailer = require('nodemailer');
// var csrf = require('csurf');
const bcrypt = require('bcryptjs');
const passport = require('passport');
var swig = require('swig');

// const { ensureAuthenticated,forwardAuthenticated } = require('../config/auth');

// var csrfProtection =csrf();
// router.use(csrfProtection);


//----------------------------------------------------- Main menu routes -----------------------------------------------------//
        /* GET home page. */
        router.get('/', function(req, res, next) {
          res.render('index', { title: 'Express' });
        });

        // router.get('/home', function(req, res, next) {
        //   const id = req.session.passport.user[0].id;
        //   console.log(id);
        //    Gym.find({_id:id},function(error,data){
        //         if(error)
        //         console.log(error);

        //         else
        //         {
        //             console.log(data);
        //             res.render('index',{data:data})
        //         }
              
        //       })

        // });


          /* get blogs pages */
        router.get('/body',function(req, res, next) {
          const category_search = 'Body'; 
              Blog.find({category:category_search},function(error,data){
                  if(error)
                  console.log(error)

                  else
                  {
                      console.log(data);
                      res.render('blogposts',{data:data});
                  }
                
              });
        });

        router.post('/blogsingle/:id',function(req,res,next){
          const id = req.params.id;
        res.redirect('/blogsingle?' +  id);
        })

        router.get('/blogsingle?:id',function(req, res, next) {
          const id = req.url.split("?")[1];
              Blog.find({_id:id},function(error,data){
                  if(error)
                  console.log(error)

                  else
                  {
                      console.log(data);
                      res.render('blogsingle',{data:data});
                  }
                
              });
        });

        router.get('/excerciseblog',function(req, res, next) {
          const category_search = 'Excercise'; 
              Blog.find({category:category_search},function(error,data){
                  if(error)
                  console.log(error)

                  else
                  {
                      console.log(data);
                      res.render('blogposts',{data:data});
                  }
                
              });
        });

        router.get('/nutrition',function(req, res, next) {
          const category_search = 'Nutrition'; 
              Blog.find({category:category_search},function(error,data){
                  if(error)
                  console.log(error)

                  else
                  {
                      console.log(data);
                      res.render('blogposts',{data:data});
                  }
                
              });
        });

        router.get('/diet',function(req, res, next) {
          const category_search = 'Diet'; 
              Blog.find({category:category_search},function(error,data){
                  if(error)
                  console.log(error)

                  else
                  {
                      console.log(data);
                      res.render('blogposts',{data:data});
                  }
                
              });
        });

        router.get('/gymsblog',function(req, res, next) {
          const category_search = 'Gyms'; 
              Blog.find({category:category_search},function(error,data){
                  if(error)
                  console.log(error)

                  else
                  {
                      console.log(data);
                      res.render('blogposts',{data:data});
                  }
                
              });
        });

        /*----------------------------------- end----------------------------------------- */


         /*----------------------------------- Excercises ---------------------------------------- */
        router.get('/weighttraining',function(req, res, next) {
          const category_search = 'Weight Training'; 
              Excercise.find({category:category_search},function(error,data){
                  if(error)
                  console.log(error)

                  else
                  {
                      console.log(data);
                      res.render('excerciseposts',{data:data});
                  }
                
              });
        });

        router.get('/yoga',function(req, res, next) {
          const category_search = 'Yoga'; 
              Excercise.find({category:category_search},function(error,data){
                  if(error)
                  console.log(error)

                  else
                  {
                      console.log(data);
                      res.render('excerciseposts',{data:data});
                  }
                
              });
        });

        router.get('/cardio',function(req, res, next) {
          const category_search = 'Cardio'; 
              Excercise.find({category:category_search},function(error,data){
                  if(error)
                  console.log(error)

                  else
                  {
                      console.log(data);
                      res.render('excerciseposts',{data:data});
                  }
                
              });
        });

        router.post('/excercisesingle/:id',function(req,res,next){
          const id = req.params.id;
        res.redirect('/excercisesingle?' +  id);
        })

        router.get('/excercisesingle?:id',function(req, res, next) {
          const id = req.url.split("?")[1];
              Excercise.find({_id:id},function(error,data){
                  if(error)
                  console.log(error)

                  else
                  {
                      console.log(data);
                      res.render('excercisesingle',{data:data});
                  }
                
              });
        });
 /*----------------------------------- end----------------------------------------- */

 /*----------------------------------- schedules ----------------------------------------- */
        router.get('/Dietplans',function(req, res, next) {
          const category_search = 'Diet Plan'; 
              Schedule.find({category:category_search},function(error,data){
                  if(error)
                  console.log(error)

                  else
                  {
                      console.log(data);
                      res.render('scheduleposts',{data:data});
                  }
                
              });
        });

        router.get('/Fitnessplans',function(req, res, next) {
          const category_search = 'Fitness Plan'; 
              Schedule.find({category:category_search},function(error,data){
                  if(error)
                  console.log(error)

                  else
                  {
                      console.log(data);
                      res.render('scheduleposts',{data:data});
                  }
                
              });
        });

        router.post('/schedulesingle/:id',function(req,res,next){
          const id = req.params.id;
        res.redirect('/schedulesingle?' +  id);
        })

        router.get('/schedulesingle?:id',function(req, res, next) {
          const id = req.url.split("?")[1];
              Schedule.find({_id:id},function(error,data){
                  if(error)
                  console.log(error)

                  else
                  {
                      console.log(data);
                      res.render('schedulesingle',{data:data});
                  }
                
              });
        });

       /*----------------------------------- end----------------------------------------- */

//-----------------------------------------------------End-----------------------------------------------------//



//----------------------------------------------------- for image uploading -----------------------------------------------------//

          DIR = './public/images/';

            const storage = multer.diskStorage({
                destination: function (req, file, cb) {
                    cb(null, DIR)
                },
                filename: function (req, file, cb) {
                    cb(null, file.fieldname + "-" + Date.now() + "-" + file.originalname)
                }
            })
            
            //   const fileFilter = (req, file, cb) => {
            //     // reject a file
            //     if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
            //       cb(null, true);
            //     } else {
            //       cb(null, false);
            //     }
            //   };
            
            const upload = multer({
                storage: storage
            })
            
//----------------------------------------------------- End -----------------------------------------------------//


//----------------------------------------------------- Gym list -----------------------------------------------------//

router.get('/gymsdirectory',function(req, res, next) {
      Gym.find(function(error,data){
          if(error)
          console.log(error)

          else
          {
              console.log(data);
              res.render('gymdirectory',{data:data});
          }
        
      });
});


//----------------------------------------------------- End -----------------------------------------------------//






//----------------------------------------------------- Gym registration and login -----------------------------------------------------//

          /* GYM REGISTRATION PAGE ROUTE */
        //   router.post('/gymreg/:id',function(req,res,next){
        //     const id = req.params.id;
        //           res.redirect('/gymreg?' +  req.params.id);
        // });
        //   router.get('/gymreg',function(req, res, next) {
        //     res.render('gymreg', { title: 'Express' });
        //   });

        //   /* gym info uploadation */ 
        //   router.post('/gymadd/:id',upload.single("file"),function(req,res){
        //        let {
            
        //         imagelinkgym: "images/" + res.req.file.filename},
        //     }).save(function(error,data){
        //         if(error)
        //         console.log(error);

        //         else
        //         res.redirect('/');
        //     })
        //   });


               /* User register page route*/
               router.get('/gymsignup', function(req, res, next){
                res.render('gymsignup',{ title: 'Express' });
              }); 


              /* User registeration */
              router.post('/gymsignup', (req, res) => {
                const { gymname, ownername,email, password, password2 } = req.body;

            // const gymname=req.body.gymname
            // const ownername= req.body.ownername
            // const email=req.body.email
            // const password=req.body.pwd
            let errors = [];

            if (!gymname || !ownername || !email || !password || !password2) {
              errors.push({ msg: 'Please enter all fields' });
            }

            if (password != password2) {
              errors.push({ msg: 'Passwords do not match' });
            }

            if (password.length < 6 ) {
              errors.push({ msg: 'Password must be at least 6 characters' });
            }
            
            if (password2.length < 6 ) {
              errors.push({ msg: 'Confirm Password must be at least 6 characters' });
            }

            if (errors.length > 0) {
              res.render('gymsignup', {
                errors:errors
              });
            }
            else {
              Gym.findOne({ email: email }).then(gym => {
                if (gym) {
                  errors.push({ msg: 'Email already exists' });
                  res.render('gymsignup', {
                    errors:errors
                  });
                } else {
                  const newUser = new Gym({
                    gymname,
                    ownername,
                    email,
                    password
                  });

                  bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                      if (err) throw err;
                      newUser.password = hash;
                      newUser
                        .save()
                        .then(user => {
                          req.flash(
                            'success_msg',
                            'You are now registered and can log in'
                          );
                          res.redirect('/');
                        })
                        .catch(err => console.log(err));
                    });
                  });
                }
              });
            }
          });

          router.post('/gymlogin', 
                   passport.authenticate('gym-login'),
                    function(req, res) {
                      // If this function gets called, authentication was successful.
                      // `req.user` contains the authenticated user.
                      res.redirect('/gymadminpanel');}
                      // res.redirect('/gymadminpanel?' + req.user.id);}
                    //  passport.authenticate('local', {
                    //   successRedirect: ('/adminpanel'),
                    //   failureRedirect: '/',
                    //   failureFlash: true
                    // })(req, res, next);
                  );

                  /* Logout  */
                  router.get('/logout', (req, res) => {
                    req.logout();
                    req.flash('success_msg', 'You are logged out');
                    res.redirect('/');
                  });

//----------------------------------------------------- End -----------------------------------------------------//


//----------------------------------------------------- Gym Admin panel -----------------------------------------------------//
// router.get('/gymadminpanel?:id',isSignedIn, function(req, res, next) {
//   const id = req.url.split("?")[1]; 
//       Gym.find({_id:id},function(error,data){
//           if(error)
//           console.log(error)

//           else
//           {
//               console.log(data);
//               res.render('gymadminpanel',{data:data});
//           }
        
//       });
 
// });

router.get('/gymadminpanel',isSignedIn, function(req, res, next) {
  const id = req.user.id;
        Gym.find({_id:id},function(error,data){
            if(error)
            console.log(error)
  
            else
            {
                console.log(data);
                res.render('gymadminpanel',{data:data});
            }
          
        });
   
  });


// router.post('/gyminfo/:id',function(req,res,next){
//   const id = req.params.id;
//         res.redirect('/gyminfo?' + id);
// });

router.get('/gyminfo',isSignedIn,function(req,res,next){
// const id = req.url.split("?")[1]; 
const id = req.user.id;
    Gym.find({_id:id},function(error,data){
        if(error)
        console.log(error)

        else
        {
            console.log(data);
            res.render('gymreg',{data:data});
        }
      
    });
})

router.post('/updategym',(req,res,next)=>{
  // const id = req.params.id;
  const id = req.user.id;
console.log('inside');
    let  GymInfo = {
          _id :id,
          gymname:req.body.gymname,
          ownername:req.body.ownername,
          email:req.body.email,
          area:req.body.area,
          city:req.body.city,
          state:req.body.state,
          contactno:req.body.phn,
          website:req.body.gymweb,
          timmings:req.body.gtime,
          fees:req.body.gfees,
      };
      console.log('inside');
  Gym.findOneAndUpdate({_id:id}, GymInfo,(err,data)=>{
      if(err){
          console.log(err)
      }
      else{
        res.redirect('/gymadminpanel');
      }
      
  });
});


// router.post('/updateimggym/:id',function(req,res,next){
//   const id = req.params.id;
//         res.redirect('/updategymimg?' +  id);
// });

router.get('/updateimggym',isSignedIn,function(req,res,next){
// const id = req.url.split("?")[1]; 
const id = req.user.id;
    Gym.find({_id:id},function(error,data){
        if(error)
        console.log(error)

        else
        {
            console.log(data);
            res.render('updateimggym',{data:data});
        }
      
    });
})

router.post('/updategymimg',upload.single("file"),(req,res,next)=>{
  // const id = req.params.id;
  const id = req.user.id;
    let  PostUpdate = {
          _id :id,
          imagelinkgym: "images/" + res.req.file.filename
      };
      Gym.findOneAndUpdate({_id:id}, PostUpdate,(err,data)=>{
        if(err){
            console.log(err)
        }
        else{
          res.redirect('/gymadminpanel');
        }
        
    });
  });

router.post('/deleteacct',(req,res)=>{
  let  id = req.user.id;
  console.log(id);
  Gym.findOneAndRemove({"_id":id},(err,data)=>{
      if(err){
          console.log(err)
      }
      else{
          res.redirect('/'),
          console.log(data)
      }
  });
});


router.post('/searchgym',function(req,res,next){
  const search=req.body.search;
  Gym.find({area:search},function(error,data){
    if(error)
    console.log(error)

    else
    {
        console.log(data);
        res.render('gymdirectory',{data:data});
    }
  
});

});

//----------------------------------------------------- End -----------------------------------------------------//


//----------------------------------------------------- Reading and Displaying data from database -----------------------------------------------------//

          router.get('/user?:id',isLoggedIn,function(req,res){
            const id = req.url.split("?")[1]; 
              User.find({_id:id},function(error,data){
                  if(error)
                  console.log(error)

                  else
                  {
                      console.log(data);
                      res.render('user',{data:data});
                  }
                
              });
          });

//----------------------------------------------------- End -----------------------------------------------------//




//----------------------------------------------------- News letter subscription -----------------------------------------------------//

          router.post('/newsletter', (req, res) => {
              const output = `
                <p>Hi ${req.body.sname}, </p>
                
                <h3>Thanks for subscribing to FitnessDoze Newsletters</h3>

              
                <p> We’re so glad you decided to become a FitnessDoze Community Member! Get the most out of your membership by taking advantage of our exciting offers. To know more about it sign up on our website .</p>
          

              `;
            
              // create reusable transporter object using the default SMTP transport
              let transporter = nodemailer.createTransport({
                host: 'smtp.gmail.com',
                port: 465,
                secure: true, // true for 465, false for other ports
                auth: {
                    user: 'fitnessdoze@gmail.com', // generated ethereal user
                    pass: 'jjypesnp@fitness#14'  // generated ethereal password
                },
                // tls:{
                //   rejectUnauthorized:false
                // }
              });
            
              // setup email data with unicode symbols
              let mailOptions = {
                  from: 'fitnessdoze@gmail.com', // sender address
                  to: `${req.body.email}`, // list of receivers
                  subject: 'Newsletter Subscription', // Subject line
                  text: 'From FitnessDoze', // plain text body
                  html: output // html body
              };
            
              // send mail with defined transport object
              transporter.sendMail(mailOptions, (error, info) => {
                  if (error) {
                      return console.log(error);
                  }
                  console.log('Message sent: %s', info.messageId);   
                  console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
            
                  // res.send(`<body style="background-color:black; 
                  //   overflow:hidden;">
                  //   <div style="position:absolute; 
                  //   font-family: 'Montserrat';
                  //   width : 100%; 
                  //    height: 5rem; 
                  //    text-align: center;
                  //     font-size: 2rem;
                  //     top: 50%;
                  //     color:silver;
                  //     transform: translateY(-50%);
                  //     ">
                  //     Thank You For The Feedback. We will get in touch with you soon </div></body>`); 
                  res.redirect('/');
              });
            });

//-----------------------------------------------------End-----------------------------------------------------//



//----------------------------------------------------- updating data -----------------------------------------------------//

          router.post('/update/:id',(req,res,next)=>{
            const id = req.params.id;
            let UserUpdate = {
                _id :id,
                username : req.body.uname,
                email : req.body.email,
                phone : req.body.phn,
            };
            User.findOneAndUpdate({_id:id}, UserUpdate,(err,data)=>{
                if(err){
                    console.log(err)
                }
                else{
                    res.redirect('/')
                }
                
            });
          });

//-----------------------------------------------------End-----------------------------------------------------//

 

//----------------------------------------------------- deleting data -----------------------------------------------------//

          router.post('/delete/:id',(req,res)=>{
              let id=req.params.id;
              console.log(id);
              User.findOneAndRemove({"_id":id},(err,data)=>{
                  if(err){
                      console.log(err)
                  }
                  else{
                      res.redirect('/'),
                      console.log(data)
                  }
              });
          });

//----------------------------------------------------- End-----------------------------------------------------//



//----------------------------------------------------- Admin panel -----------------------------------------------------//

          /* ADMIN LOGIN */
          
          router.get('/adminlogin',function(req,res,next){
            res.render('adminlogin');
          });

           /* GET admin panel listing. */
           router.get('/adminpanel',isLoggedIn,function(req, res, next) {
                      res.render('adminpanel');
        });

        //   router.post('/adminlogin',  passport.authenticate('admin-login'),
        //  function(req, res) { 
        //    console.log(insideadmin);
        //    res.redirect('/adminpanel');});

           router.post('/adminlogin', 
           passport.authenticate('admin-login'),
            function(req, res) {
              // If this function gets called, authentication was successful.
              // `req.user` contains the authenticated user.
              res.redirect('/blogpost');}
            //  passport.authenticate('local', {
            //   successRedirect: ('/adminpanel'),
            //   failureRedirect: '/',
            //   failureFlash: true
            // })(req, res, next);
          );
         
             // If this function gets called, authentication was successful.
             // `req.user` contains the authenticated user. 
           

         

           /*-------------------- GET admin blog panel.--------------------*/
          router.get('/blogpost',isLoggedIn,function(req,res,next){
            Blog.find(function(error,data){
              if(error)
              console.log(error);
            
              else
              {
                console.log(data);
                res.render('blogadminpanel',{data:data});  
              }
            })
          })

          router.get('/adminblog',isLoggedIn,function(req,res,next){
            res.render('adminblog');
        })

         
          router.post('/createpost',upload.single("file"),function(req,res){
              
            const blogtitle=req.body.blogtitle
            const category= req.body.category
            const content = req.body.content
            
            new Blog({
              blogtitle:blogtitle,
              category:category,
              content:content,
              imagelinkblog: "images/" + res.req.file.filename
            }).save(function(error,data){
                if(error)
                console.log(error);

                else
                res.redirect('/blogpost');
            })
          });

          router.post('/updatepost/:id',function(req,res,next){
            const id = req.params.id;
                  res.redirect('/updatepost?' +  req.params.id);
        });

        router.get('/updatepost?:id',isLoggedIn,function(req,res,next){
          const id = req.url.split("?")[1]; 
              Blog.find({_id:id},function(error,data){
                  if(error)
                  console.log(error)

                  else
                  {
                      console.log(data);
                      res.render('updatepost',{data:data});
                  }
                
              });
        })

          router.post('/updateblog/:id',upload.single("file"),(req,res,next)=>{
            const id = req.params.id;
        
              let  PostUpdate = {
                    _id :id,
                    blogtitle:req.body.blogtitle,
                    category:req.body.category,
                    content: req.body.content,
                    // imagelinkblog: "images/" + res.req.file.filename
                };
            
            Blog.findOneAndUpdate({_id:id}, PostUpdate,(err,data)=>{
                if(err){
                    console.log(err)
                }
                else{
                  res.redirect('/blogpost');
                }
                
            });
          });

          router.post('/deletepost/:id',(req,res)=>{
            let id=req.params.id;
            console.log(id);
            Blog.findOneAndRemove({"_id":id},(err,data)=>{
                if(err){
                    console.log(err)
                }
                else{
                    res.redirect('/blogpost'),
                    console.log(data)
                }
            });
        });


        router.post('/updateimgb/:id',function(req,res,next){
          const id = req.params.id;
                res.redirect('/updateblogimg?' +  req.params.id);
      });

      router.get('/updateblogimg?:id',isLoggedIn,function(req,res,next){
        const id = req.url.split("?")[1]; 
            Blog.find({_id:id},function(error,data){
                if(error)
                console.log(error)

                else
                {
                    console.log(data);
                    res.render('updateimgblog',{data:data});
                }
              
            });
      })

        router.post('/updateblogimg/:id',upload.single("file"),(req,res,next)=>{
          const id = req.params.id;
      
            let  PostUpdate = {
                  _id :id,
                  imagelinkblog: "images/" + res.req.file.filename
              };
              Blog.findOneAndUpdate({_id:id}, PostUpdate,(err,data)=>{
                if(err){
                    console.log(err)
                }
                else{
                  res.redirect('/blogpost');
                }
                
            });
          });

           /*-------------------- END --------------------*/


           /*-------------------- GET admin excercise panel.--------------------*/
          router.get('/excercisepanel',isLoggedIn,function(req,res,next){
            Excercise.find(function(error,data){
              if(error)
              console.log(error);
            
              else
              {
                console.log(data);
                res.render('excercisepanel',{data:data});  
              }
            })
          })

          router.get('/addexcercise',isLoggedIn,function(req,res,next){
            res.render('addexcercise');
        })

         
          router.post('/addexcercise',upload.single("file"),function(req,res){
              
            const excname=req.body.excname
            const category= req.body.category
            const description = req.body.description
            
            new Excercise({
              excname:excname,
              category:category,
              description:description,
              video: "images/" + res.req.file.filename
            }).save(function(error,data){
                if(error)
                console.log(error);

                else
                res.redirect('/excercisepanel');
            })
          });

          router.post('/updateexcercise/:id',function(req,res,next){
            const id = req.params.id;
                  res.redirect('/updateexcercise?' +  req.params.id);
        });

        router.get('/updateexcercise?:id',isLoggedIn,function(req,res,next){
          const id = req.url.split("?")[1]; 
          Excercise.find({_id:id},function(error,data){
                  if(error)
                  console.log(error)

                  else
                  {
                      console.log(data);
                      res.render('updateexcercise',{data:data});
                  }
                
              });
        })

          router.post('/updateexc/:id',upload.single("file"),(req,res,next)=>{
            const id = req.params.id;
              let ExcUpdate = {
                    _id :id,
                    excname:req.body.excname,
                    category:req.body.category,
                    description: req.body.description,
                    // video: "images/" + res.req.file.filename
                };
            
            console.log(ExcUpdate);
            Excercise.findOneAndUpdate({_id:id}, ExcUpdate,(err,data)=>{
                if(err){
                    console.log(err)
                }
                else{
                  res.redirect('/excercisepanel');
                }
                
            });
          });

          router.post('/deleteexc/:id',(req,res)=>{
            let id=req.params.id;
            console.log(id);
            Excercise.findOneAndRemove({"_id":id},(err,data)=>{
                if(err){
                    console.log(err)
                }
                else{
                    res.redirect('/excercisepanel'),
                    console.log(data)
                }
            });
        });


        router.post('/updateimgexc/:id',function(req,res,next){
          const id = req.params.id;
                res.redirect('/updateexcimg?' +  req.params.id);
      });

      router.get('/updateexcimg?:id',isLoggedIn,function(req,res,next){
        const id = req.url.split("?")[1]; 
            Excercise.find({_id:id},function(error,data){
                if(error)
                console.log(error)

                else
                {
                    console.log(data);
                    res.render('updateimgexc',{data:data});
                }
              
            });
      })

        router.post('/updateexcimg/:id',upload.single("file"),(req,res,next)=>{
          const id = req.params.id;
      
            let  PostUpdate = {
                  _id :id,
                  video: "images/" + res.req.file.filename
              };
              Excercise.findOneAndUpdate({_id:id}, PostUpdate,(err,data)=>{
                if(err){
                    console.log(err)
                }
                else{
                  res.redirect('/excercisepanel');
                }
                
            });
          });

        /*-------------------- END --------------------*/

                /*-------------------- GET admin schedule panel.--------------------*/
                   router.get('/schedulespanel',isLoggedIn,function(req,res,next){
                    Schedule.find(function(error,data){
                      if(error)
                      console.log(error);
                    
                      else
                      {
                        console.log(data);
                        res.render('schedulespanel',{data:data});  
                      }
                    })
                  })
        
                  router.get('/addschedule',isLoggedIn,function(req,res,next){
                    res.render('addschedule');
                })
        
                 
                  router.post('/addschedule',upload.single("file"),function(req,res){
                      
                    const scheduletitle=req.body.scheduletitle
                    const category= req.body.category
                    const content = req.body.content
                    
                    new Schedule({
                      scheduletitle:scheduletitle,
                      category:category,
                      content:content,
                      imagelinksched: "images/" + res.req.file.filename
                    }).save(function(error,data){
                        if(error)
                        console.log(error);
        
                        else
                        res.redirect('/schedulespanel');
                    })
                  });
        
                  router.post('/updateschedule/:id',function(req,res,next){
                    const id = req.params.id;
                          res.redirect('/updateschedule?' +  req.params.id);
                });
        
                router.get('/updateschedule?:id',isLoggedIn,function(req,res,next){
                  const id = req.url.split("?")[1]; 
                  Schedule.find({_id:id},function(error,data){
                          if(error)
                          console.log(error)
        
                          else
                          {
                              console.log(data);
                              res.render('updateschedule',{data:data});
                          }
                        
                      });
                })
        
                  router.post('/updatesched/:id',(req,res,next)=>{
                    const id = req.params.id;
                      let SchedUpdate = {
                            _id :id,
                            scheduletitle:req.body.scheduletitle,
                            category:req.body.category,
                            content: req.body.content,
                            // imagelinksched: "images/" + res.req.file.filename
                        };
                    
                    console.log(SchedUpdate);
                    Schedule.findOneAndUpdate({_id:id}, SchedUpdate,(err,data)=>{
                        if(err){
                            console.log(err)
                        }
                        else{
                          res.redirect('/schedulespanel');
                        }
                        
                    });
                  });
        
                  router.post('/deletesched/:id',(req,res)=>{
                    let id=req.params.id;
                    console.log(id);
                    Schedule.findOneAndRemove({"_id":id},(err,data)=>{
                        if(err){
                            console.log(err)
                        }
                        else{
                            res.redirect('/schedulespanel'),
                            console.log(data)
                        }
                    });
                });

                router.post('/updateimgsched/:id',function(req,res,next){
                  const id = req.params.id;
                        res.redirect('/updateschedimg?' +  req.params.id);
              });
        
              router.get('/updateschedimg?:id',isLoggedIn,function(req,res,next){
                const id = req.url.split("?")[1]; 
                    Schedule.find({_id:id},function(error,data){
                        if(error)
                        console.log(error)
        
                        else
                        {
                            console.log(data);
                            res.render('updatesimgsched',{data:data});
                        }
                      
                    });
              })
        
                router.post('/updateschedimg/:id',upload.single("file"),(req,res,next)=>{
                  const id = req.params.id;
              
                    let  PostUpdate = {
                          _id :id,
                          imagelinksched: "images/" + res.req.file.filename
                      };
                      Schedule.findOneAndUpdate({_id:id}, PostUpdate,(err,data)=>{
                        if(err){
                            console.log(err)
                        }
                        else{
                          res.redirect('/schedulespanel');
                        }
                        
                    });
                  });

                /*-------------------- END --------------------*/

//----------------------------------------------------- End -----------------------------------------------------//





//----------------------------------------------------- Login and Registration routes for users-----------------------------------------------------//


                  // /* User register page route*/
                  router.get('/adminsignup', function(req, res, next){
                    res.render('adminsignup',{ title: 'Express' });
                  }); 


                  // /* User registeration */
                  router.post('/adminsignup', (req, res) => {
                    const { name, email, password, password2 } = req.body;
                    let errors = [];

                    if (!name || !email || !password || !password2) {
                      errors.push({ msg: 'Please enter all fields' });
                    }

                    if (password != password2) {
                      errors.push({ msg: 'Passwords do not match' });
                    }

                    if (password.length < 6) {
                      errors.push({ msg: 'Password must be at least 6 characters' });
                    }

                    if (errors.length > 0) {
                      res.render('signup', {
                        errors:errors
                      });
                    } else {
                      Admin.findOne({ email: email }).then(user => {
                        if (user) {
                          errors.push({ msg: 'Email already exists' });
                          res.render('signup', {
                            errors:errors
                          });
                        } else {
                          const newUser = new Admin({
                            name,
                            email,
                            password
                          });

                          bcrypt.genSalt(10, (err, salt) => {
                            bcrypt.hash(newUser.password, salt, (err, hash) => {
                              if (err) throw err;
                              newUser.password = hash;
                              newUser
                                .save()
                                .then(user => {
                                  req.flash(
                                    'success_msg',
                                    'You are now registered and can log in'
                                  );
                                  res.redirect('/');
                                })
                                .catch(err => console.log(err));
                            });
                          });
                        }
                      });
                    }
                  });

                  

                  /* Logout  */
                  // router.get('/logout', (req, res) => {
                  //   req.logout();
                  //   req.flash('success_msg', 'You are logged out');
                  //   res.redirect('/');
                  // });

//----------------------------------------------------- End -----------------------------------------------------//



module.exports = router;



//----------------------------------------------------- function of user's routes forwarding -----------------------------------------------------//
function isLoggedIn(req,res,next)
{
  if(req.isAuthenticated())
  {
    Admin.find({_id:req.user.id},function(error,data){
      if(error)
      console.log(error)

          else
          {
              console.log(data);
              return next();}    
  });
}
else
  res.redirect('/');
}

function isSignedIn(req,res,next)
{
  if(req.isAuthenticated())
  {
    Gym.find({_id:req.user.id},function(error,data){
      if(error)
      console.log(error)

          else
          {
              console.log(data);
              return next();}    
  });
}
else
  res.redirect('/');
}

//----------------------------------------------------- End -----------------------------------------------------//