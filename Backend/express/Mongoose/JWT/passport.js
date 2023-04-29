var JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
const UserModel = require("./database")
var passport = require("passport")
var opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'secret';
passport.use(new JwtStrategy(opts,async function(jwt_payload, done) {
   const user = await UserModel.findOne({username: jwt_payload.username})
   if(user){
    console.log(jwt_payload.username)
    return done(null,user)
   } else{
    return done(null,false)
   }
}));