exports.index = (req, res, next) => {
    //res.send('Hello World');
    res.status(200).json({
      fullame: 'Channawat',
     })
  }

exports.bio = (req, res, next) => {
    //res.send('Hello World');
    res.status(200).json({
      fullame: 'Channawat',
      nickname: 'Keng',
      hobby: 'ROeveryday',
      gitusername: 'Channawatjwrld'
     })
  }

exports.company =(req, res, next) =>{
    res.status(200).json({
        data: [{
            id: 1,
            name: "CODING HUB",
            address: {
              province: "Bangkok",
              postcode: "10310"
            }
      
        },
        {
        id: 2,
        name:"Microsoft (Thailand)",
        address: {
            province: "Bangkok",
            postcode: "10330"
        }
        },
        {
            id: 3,
            name: "GRAVITY GAME TECH",
            address: {
                province: "Bangkok",
                postcode: "10500"
            }
        }]
    })
}
